# Panduan Kontribusi

Terima kasih atas minat Anda untuk berkontribusi pada proyek **Tahlil & Yasinan Tracker**! Kami sangat menghargai bantuan Anda untuk membuat aplikasi ini lebih baik.

Dokumen ini berisi panduan untuk membantu Anda memulai kontribusi.

## 🚀 Memulai

### Prasyarat
Pastikan Anda telah menginstal perangkat lunak berikut di komputer Anda:
- [Node.js](https://nodejs.org/) (Versi LTS direkomendasikan)
- [npm](https://www.npmjs.com/) (Biasanya sudah terinstal bersama Node.js)

### Instalasi
1. **Fork** repositori ini ke akun GitHub Anda.
2. **Clone** repositori yang sudah di-fork ke komputer lokal Anda:
   ```bash
   git clone https://github.com/USERNAME_ANDA/tahlil-tracker.git
   cd tahlil-tracker
   ```
3. **Instal dependensi**:
   ```bash
   npm install
   ```

### Menjalankan Aplikasi
Untuk menjalankan aplikasi dalam mode pengembangan:
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## 🛠️ Pengembangan

### Struktur Proyek
- `/components`: Komponen UI React (misal: `JavaneseCalendarView`, `MilestoneCard`).
- `/data`: Data statis untuk bacaan Yasin, doa, dan panduan.
- `/hooks`: Custom React hooks (misal: `useDeceasedProfile` untuk manajemen state profil).
- `/utils`: Fungsi bantuan dan logika utilitas (misal: perhitungan tanggal Jawa).
- `/types`: Definisi tipe TypeScript (`types.ts`).
- `/assets`: Aset statis seperti gambar dan ikon yang diimpor.
- `/public`: Aset statis yang disajikan secara langsung (misal: manifest, favicon).

### Konvensi Kode
- Gunakan **TypeScript** untuk keamanan tipe.
- Gunakan **Functional Components** dengan Hooks.
- Pastikan kode Anda rapi dan mudah dibaca.

## 📝 Mengirimkan Kontribusi

1. Buat **branch** baru untuk fitur atau perbaikan Anda:
   ```bash
   git checkout -b fitur-baru-anda
   ```
2. Lakukan perubahan dan **commit** dengan pesan yang jelas:
   ```bash
   git commit -m "feat: menambahkan fitur kalender jawa"
   ```
   Gunakan [Conventional Commits](https://www.conventionalcommits.org/) jika memungkinkan.
3. **Push** branch Anda ke GitHub:
   ```bash
   git push origin fitur-baru-anda
   ```
4. Buat **Pull Request (PR)** dari repositori Anda ke repositori utama. Jelaskan perubahan yang Anda buat secara detail.

## 🤝 Kode Etik
Harap menjaga komunikasi yang sopan dan saling menghormati dalam setiap interaksi di proyek ini.

---
Terima kasih telah berkontribusi! 🙏
