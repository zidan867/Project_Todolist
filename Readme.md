# Aplikasi To-Do List

Proyek kolaborasi Task-M — Simulasi Tim Developer, RPL Kelas XI.

# Deskripsi

Website To-Do List (Task-M) sederhana untuk mencatat dan mengelola tugas harian. Pengguna dapat menambah, melihat, mengubah, dan menghapus tugas (CRUD), serta menandai tugas yang sudah selesai. Dibangun sebagai simulasi proyek klien menggunakan alur kerja kolaborasi Git & GitHub ala industri IT.

# Anggota Tim & Peran

| Nama | Peran |
| --- | --- |
| Muhammad Zidan Rizqi Pratama | Project Manager (PM) |
| Hanaya Chika Rahmadhani | Front-End Developer |
| Rayzan Harya Rizky | Back-End Developer |
| Faras Arrobi Albyan | UI/UX, Dokumentasi & QA / Tester |

# Fitur

- Menambah tugas baru
- Menampilkan daftar tugas
- Mengubah tugas
- Menghapus tugas
- Menandai tugas selesai / belum selesai

# Bahasa & Teknologi yang Digunakan

- **HTML** - Untuk membuat struktur antarmuka web.
- **CSS** - Untuk *styling* antarmuka tampilan UI.
- **JavaScript** - Untuk logika CRUD to-do list dan manipulasi DOM.

---

# Cara Menjalankan Aplikasi

Aplikasi ini memiliki **backend** dan **frontend**, jadi server backend harus dijalankan lebih dulu sebelum frontend dibuka.

## Langkah 1: Clone Repository

```bash
git clone https://github.com/zidan867/Project_Todolist.git
cd Project_Todolist
```

## Langkah 2: Jalankan Server (Backend)

1. Buka terminal di VS Code (**Terminal > New Terminal**).
2. Masuk ke folder backend:
   ```bash
   cd backend
   ```
3. Install dependency (cukup sekali di awal):
   ```bash
   npm install
   ```
4. Jalankan server:
   ```bash
   npm start
   ```
5. Tunggu sampai muncul pesan server berjalan, contoh: `Server running on http://localhost:3000`.
6. **Biarkan terminal ini tetap terbuka.** Jika ditutup, server akan berhenti.

## Langkah 3: Jalankan Tampilan (Frontend) dengan Live Server

1. Buka folder `frontend` di explorer VS Code.
2. Klik file `index.html`.
3. Klik tombol **Go Live** di pojok kanan bawah jendela VS Code.
4. Aplikasi akan otomatis terbuka di browser kamu.

> **Catatan:** Jika tombol **Go Live** tidak muncul, install extension **Live Server** (Ritwick Dey) di VS Code terlebih dahulu.

## Jika Aplikasi Tidak Berjalan

- Pastikan server backend (Langkah 2) sudah berjalan sebelum membuka frontend.
- Pastikan alamat server di kode frontend sama dengan alamat server backend (contoh: `http://localhost:3000`).

---

# Screenshot Tampilan

<img width="1080" height="766" alt="WhatsApp Image 2026-09-30 at 22 00 39" src="https://github.com/user-attachments/assets/3ab7e28c-e877-4c47-ab54-dcde02530ee5" />
<img width="1075" height="763" alt="image" src="https://github.com/user-attachments/assets/cc562d8a-9b76-4ed0-9667-2dc1a2a57743" />
<img width="1073" height="768" alt="image" src="https://github.com/user-attachments/assets/78445284-a2bb-4d49-ae30-0a29acba5db8" />
![Uploading image.png…]()






---

# Daftar Tugas Tim

| No | Tugas | PIC | Status | Issue # |
| --- | --- | --- | --- | --- |
| 1 | Membuat tampilan aplikasi To-Do List | Hanaya (Front-End) | done | #1 |
| 2 | Membuat fungsi CRUD To-Do List | Rayzan (Back-End) | done | #2 |
| 3 | Menyusun dokumentasi (README.md) | Faras (UI/UX & Dokumentasi) | Done | #3 |
| 4 | Menguji aplikasi To-Do List | Faras (QA) | To Do | #4 |

> Status: **To Do** (belum dikerjakan), **In Progress** (sedang dikerjakan), **Review** (menunggu PR di-review), **Done** (selesai & sudah di-merge).

---

# Alur Kolaborasi Git

```
main      -> versi stabil/final (hanya PM yang merge ke sini)
develop   -> branch pengembangan utama
feature/* -> satu branch untuk satu fitur/tugas
fix/*     -> perbaikan bug
```

Format commit message: `feat:`, `fix:`, `style:`, `docs:`, `refactor:`
