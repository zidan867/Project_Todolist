const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const port = process.env.PORT || 3000;
const rootDirectory = path.resolve(__dirname, "..");
const taskFile = path.join(rootDirectory, "data", "task.json");

const sendJson = (response, statusCode, data) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(data));
};

const readTasks = async () => {
  const content = await fs.readFile(taskFile, "utf8");
  return JSON.parse(content);
};

const collectBody = (request) =>
  new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request terlalu besar"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });

const serveFile = async (request, response, pathname) => {
  const requestedPath = pathname === "/" ? "/dashboard.html" : pathname;
  const filePath = path.resolve(rootDirectory, `.${requestedPath}`);

  if (!filePath.startsWith(rootDirectory)) {
    sendJson(response, 403, { error: "Akses ditolak" });
    return;
  }

  try {
    const content = await fs.readFile(filePath);
    const extension = path.extname(filePath);
    const contentTypes = {
      ".html": "text/html; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".js": "text/javascript; charset=utf-8",
      ".json": "application/json; charset=utf-8",
      ".png": "image/png",
      ".jpg": "image/jpeg]",
      ".jpeg": "image/jpeg",
    };
    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
    });
    response.end(content);
  } catch {
    sendJson(response, 404, { error: "File tidak ditemukan" });
  }
};

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);

  try {
    if (requestUrl.pathname === "/api/tasks" && request.method === "GET") {
      sendJson(response, 200, await readTasks());
      return;
    }

    if (requestUrl.pathname === "/api/tasks" && request.method === "POST") {
      const newTask = JSON.parse(await collectBody(request));
      const tasks = await readTasks();
      const highestTaskId = tasks.reduce(
        (highestId, task) =>
          Number.isInteger(task.id) ? Math.max(highestId, task.id) : highestId,
        0,
      );
      newTask.id = highestTaskId + 1;
      tasks.push(newTask);
      await fs.writeFile(
        taskFile,
        `${JSON.stringify(tasks, null, 2)}\n`,
        "utf8",
      );
      sendJson(response, 201, newTask);
      return;
    }

    const deleteTaskMatch = requestUrl.pathname.match(
      /^\/api\/tasks\/([^/]+)$/,
    );
    if (deleteTaskMatch && request.method === "DELETE") {
      const taskId = decodeURIComponent(deleteTaskMatch[1]);
      const tasks = await readTasks();
      const remainingTasks = tasks.filter((task) => String(task.id) !== taskId);

      if (remainingTasks.length === tasks.length) {
        sendJson(response, 404, { error: "Task tidak ditemukan" });
        return;
      }

      await fs.writeFile(
        taskFile,
        `${JSON.stringify(remainingTasks, null, 2)}\n`,
        "utf8",
      );
      sendJson(response, 200, { message: "Task berhasil dihapus" });
      return;
    }

    await serveFile(request, response, decodeURIComponent(requestUrl.pathname));
  } catch (error) {
    sendJson(response, 400, { error: error.message });
  }
});

server.listen(port, () => {
  console.log(`Task list berjalan di http://localhost:${port}`);
});
