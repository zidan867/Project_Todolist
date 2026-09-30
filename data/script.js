// --- 1. LOGIKA MODAL POPUP ---
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const taskModal = document.getElementById("taskModal");

if (openModalBtn && taskModal) {
  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskModal.style.display = "flex";
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
  });
}

if (cancelModalBtn) {
  cancelModalBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === taskModal) {
    taskModal.style.display = "none";
  }
});

      async function loadTasksFromJson() {
        try {
          const defaultTasks = [
            { id: 1, title: "Design F-Task UI", date: "22 Aug 2026", category: "Work", status: "Today", completed: false },
            { id: 2, title: "Create REST API", date: "23 Aug 2026", category: "Study", status: "Tomorrow", completed: false }
          ];

          const localTasks = getSavedTasks();
          if (localTasks.length === 0) {
            localStorage.setItem(savedTasksKey, JSON.stringify(defaultTasks));
            renderTasks(defaultTasks);
          } else {
            renderTasks(localTasks);
          }
          filterTasks();
        } catch (error) {
          console.warn("Gagal memuat data:", error);
          renderTasks(getSavedTasks());
        }
      }

window.addEventListener("DOMContentLoaded", loadTasks);
