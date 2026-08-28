# Panduan Pengelola & Pemilik Akademi: Kustomisasi Platform Kursus Online Islami

Buku panduan praktis berbahasa Indonesia ini disusun secara khusus untuk **pemilik yayasan, pimpinan ma'had, kepala akademik, asatidz, dan staf pengelola (non-programmer)**. Panduan ini menjelaskan langkah demi langkah cara mengelola, mengedit tulisan, memperbarui harga, menambah kursus baru, hingga mengunggah website ke internet dengan aman dan benar.

---

## 📑 Daftar Isi Panduan 15 Bab
1. [Periksa & Perbaiki Potensi Error/Bug](#1-periksa--perbaiki-potensi-errorbug)
2. [Pengaturan OG & SEO Metadata (Agar Bagus Saat Dishare ke WA/Medsos)](#2-pengaturan-og--seo-metadata)
3. [Memaksimalkan Keamanan (Security) Website](#3-memaksimalkan-keamanan-security-website)
4. [Memaksimalkan Tampilan Mobile & Tablet (Aksesibilitas WCAG AA)](#4-memaksimalkan-tampilan-mobile--tablet)
5. [Mengelola Gambar (Ganti Foto Asatidz, Banner, & Logo)](#5-mengelola-gambar)
6. [Mengubah Biaya Pendaftaran & Harga Kursus](#6-mengubah-biaya-pendaftaran--harga-kursus)
7. [Mengubah Copywriting/Tulisan & Batasan Wajib Adab Ikhtilaf Fiqih](#7-mengubah-copywriting--batasan-wajib-adab-ikhtilaf)
8. [Integrasi WhatsApp Admin & Akun Media Sosial Ma'had](#8-integrasi-whatsapp--media-sosial)
9. [Menambahkan Kursus & Program Belajar Baru](#9-menambahkan-kursus--program-belajar-baru)
10. [Membuka & Mengedit Proyek di VS Code](#10-membuka--mengedit-proyek-di-vs-code)
11. [Panduan Lainnya: Hard Refresh, Backup, & Solusi Masalah (Troubleshooting)](#11-panduan-lainnya-hard-refresh-backup--troubleshooting)
12. [Memodifikasi Komponen Visual & Setiap Bagian Halaman](#12-memodifikasi-komponen-visual--tiap-bagian-halaman)
13. [Sistem Pembayaran: QRIS Statis vs QRIS Dinamis](#13-sistem-pembayaran-qris-statis-vs-qris-dinamis)
14. [Fitur Upload Berkas (Dokumen Beasiswa & Rekaman Tugas)](#14-fitur-upload-berkas)
15. [Panduan Integrasi Hosting & Publikasi Website ke Internet](#15-panduan-integrasi-hosting--publikasi-website)

---

## 1. Periksa & Perbaiki Potensi Error/Bug

Sebelum mempublikasikan website ke publik, pastikan Anda melakukan 4 langkah pemeriksaan sederhana berikut:

### A. Membuka Console Browser (Melihat Error Tersembunyi)
1. Buka website di browser Google Chrome pada komputer Anda (`http://localhost:3000`).
2. Tekan tombol **F12** pada keyboard (atau klik kanan di mana saja lalu pilih **Inspect / Periksa**).
3. Klik pada tab **Console** di bagian atas jendela inspect.
4. Pastikan tidak ada tulisan berwarna merah tebal (*Uncaught TypeError* atau *Failed to load resource*). Jika ada tulisan kuning (peringatan), hal tersebut biasanya aman, namun tulisan merah wajib ditangani.

### B. Menjalankan Pengecekan Build (Kompilasi)
Buka Terminal di VS Code dan jalankan perintah:
```bash
npm run build
```
- Jika muncul pesan bertuliskan `✨ Build complete!`, artinya seluruh kode Vue/Nuxt Anda dalam kondisi sempurna dan siap dipublikasikan.
- Jika ada kesalahan kode (misalnya ada tanda kurung kurawal yang terhapus saat mengedit teks), terminal akan memberi tahu nama berkas dan nomor baris yang salah.

### C. Menjalankan Pengecekan Tipe TypeScript
Jalankan perintah ini untuk memastikan data yang dimasukkan sesuai format:
```bash
npx tsc --noEmit
```
Perintah ini akan memastikan tidak ada kesalahan pengetikan nama kolom pada data kursus Anda.

### D. Checklist Manual Sebelum Publikasi
- [ ] Seluruh foto asatidz, logo, dan thumbnail kursus tampil jelas (tidak rusak/pecah).
- [ ] Semua tombol menu dan tautan WhatsApp dapat diklik dengan benar.
- [ ] Tidak ada tulisan teks `undefined`, `null`, atau `[object Object]` pada halaman.
- [ ] Form pendaftaran dan pengajuan beasiswa memunculkan notifikasi konfirmasi hijau setelah diklik.

---

## 2. Pengaturan OG & SEO Metadata

Open Graph (OG) membuat tampilan website Anda tampak profesional saat tautannya dibagikan melalui WhatsApp, Telegram, Facebook, atau Twitter/X (disertai judul, deskripsi, dan foto mini pratinjau).

### Lokasi Pengaturan di Nuxt 3:
1. **Pengaturan Global**: Buka berkas [nuxt.config.ts](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/nuxt.config.ts) pada baris `app.head`. Anda dapat mengubah judul website, deskripsi lembaga, dan warna tema browser:
```typescript
title: "Darul Hikmah Academy - Platform Kursus Online Islami Bersanad",
meta: [
  { name: 'description', content: 'Kajian Fiqih 4 Mazhab, Nahwu, Tafsir, dan Hadits bersanad...' },
  { property: 'og:title', content: "Darul Hikmah Academy - Kursus Islami Online Bersanad" },
  { property: 'og:image', content: "https://domain-anda.com/images/og-banner.jpg" }
]
```
2. **Pengaturan Khusus Per Halaman**: Buka berkas [pages/index.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/pages/index.vue) di bagian blok `useHead({ ... })`.

### Cara Menguji Tampilan Share WhatsApp / Facebook:
1. Masuk ke situs gratis [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
2. Masukkan alamat URL website Anda lalu klik **Debug / Fetch New Information**.
3. Facebook akan menampilkan gambar pratinjau dan judul persis seperti yang akan muncul di WhatsApp.

### Mendaftarkan Sitemap ke Google Search Console:
1. Buat berkas `sitemap.xml` atau gunakan modul sitemap resmi Nuxt.
2. Buka [Google Search Console](https://search.google.com/search-console).
3. Tambahkan domain Anda, lalu masukkan tautan `https://domain-anda.com/sitemap.xml` agar artikel dan kursus Anda cepat terindeks di halaman 1 pencarian Google.

---

## 3. Memaksimalkan Keamanan (Security) Website

Website pendidikan dan keagamaan rentan menjadi target kejahatan siber jika tidak dijaga dengan benar. Ikuti kaidah keamanan berikut:

1. **Jangan Pernah Menaruh Kunci Rahasia (API Key) di Kode Frontend**:
   - Jika di masa depan Anda menghubungkan fitur SMS OTP atau AI, simpan API Key di berkas `.env` dan panggil hanya melalui folder `server/api/` (backend Nuxt), bukan di dalam komponen Vue.
2. **Gunakan `rel="noopener noreferrer"` pada Tautan Eksternal**:
   - Setiap kali menambahkan link ke website luar dengan target `_blank`, selalu sertakan atribut `rel="noopener noreferrer"` untuk mencegah serangan *tab-nabbing*.
3. **Validasi Formulir Pendaftaran**:
   - Seluruh formulir di website ini ([EnrollmentModal.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/pricing/EnrollmentModal.vue) & [ScholarshipModal.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/pricing/ScholarshipModal.vue)) telah dilengkapi pemeriksaan format email dan nomor WhatsApp yang sah.
4. **Periksa Celah Dependensi Secara Berkala**:
   - Jalankan perintah `npm audit` setiap 3 bulan sekali di terminal untuk mendeteksi pustaka yang memerlukan pembaruan keamanan.
5. **Wajib Memasang Sertifikat SSL (HTTPS)**:
   - Pastikan saat website online, alamat website diawali dengan `https://` (ikon gembok hijau/terkunci). Layanan seperti Vercel dan Cloudflare menyediakannya secara **gratis otomatis**.

---

## 4. Memaksimalkan Tampilan Mobile & Tablet

Lebih dari 78% santri dan penuntut ilmu mengakses materi melalui smartphone. Website ini dirancang dengan standar responsif dan aksesibilitas tinggi (*WCAG AA*).

### Cara Menguji Tampilan Mobile di Komputer:
1. Pada browser Chrome yang sedang membuka website, tekan **F12**.
2. Klik ikon **Device Toggle** (ikon HP/Tablet di pojok kiri atas jendela Inspect atau tekan `Ctrl + Shift + M`).
3. Pilih perangkat yang ingin disimulasikan: *iPhone 14 Pro*, *Samsung Galaxy*, atau *iPad Air*.

### Breakpoint Tailwind yang Digunakan:
- `sm:` (Layar di atas 640px — HP posisi horizontal / Tablet mini)
- `md:` (Layar di atas 768px — Tablet iPad)
- `lg:` (Layar di atas 1024px — Laptop / Desktop)
- `xl:` (Layar di atas 1280px — Layar Komputer Lebar)

### Standar Aksesibilitas WCAG AA yang Diterapkan:
- **Ukuran Target Sentuh Minimal 44x44 Piksel**: Seluruh tombol (seperti tombol daftar, tombol tahapan roadmap, dan tombol filter) dirancang cukup besar agar mudah disentuh jari tanpa salah pencet.
- **Rasio Kontras Tajam**: Kombinasi warna Deep Emerald (`#1B4D3E`), Charcoal (`#2B2723`), dan Cream (`#F7F1E3`) memiliki rasio kontras di atas **7:1** (melebihi standar minimum 4.5:1). Ini sangat membantu kenyamanan mata santri usia muda hingga para sesepuh / asatidz senior saat membaca teks kitab dalam waktu lama.

---

## 5. Mengelola Gambar

### Lokasi Folder Gambar:
Seluruh aset gambar lokal diletakkan di dalam folder:
📁 `public/images/`

### Rekomendasi Format & Ukuran Gambar:
| Jenis Gambar | Dimensi Rekomendasi | Format Terbaik | Batas Ukuran Berkas |
| :--- | :--- | :--- | :--- |
| **Foto Asatidz / Pengajar** | 400 x 400 px (Rasio 1:1) | WebP / JPG | Maksimal 100 KB |
| **Banner Hero Utama** | 1920 x 1080 px (Rasio 16:9) | WebP / JPG | Maksimal 300 KB |
| **Thumbnail Modul Kursus** | 800 x 500 px (Rasio 16:10) | WebP / JPG | Maksimal 150 KB |
| **Logo Ma'had / Favicon** | 512 x 512 px | SVG / PNG Transparan | Maksimal 50 KB |

### Cara Mengganti Foto:
1. Simpan foto baru Anda ke folder `public/images/ustadz-fauzi.jpg`.
2. Buka berkas [instructorsData.ts](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/data/instructorsData.ts) atau [coursesData.ts](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/data/coursesData.ts).
3. Ubah kolom `avatar:` menjadi `/images/ustadz-fauzi.jpg`.

> 💡 **Tips Penghemat Kuota**: Selalu kompres foto sebelum dimasukkan ke website menggunakan situs gratis seperti [TinyPNG.com](https://tinypng.com/) atau [Squoosh.app](https://squoosh.app/) agar website terbuka secepat kilat.

---

## 6. Mengubah Biaya Pendaftaran & Harga Kursus

Seluruh data harga **TIDAK DI-HARDCODE** di dalam tampilan, melainkan terpusat di folder `data/` sehingga sangat mudah diubah.

### A. Mengubah Harga Kursus Satuan:
Buka berkas [data/coursesData.ts](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/data/coursesData.ts):
```typescript
{
  id: 'c-fiqih-01',
  title: 'Fiqih Ibadah Komparatif 4 Mazhab...',
  price: 349000,          // <-- Ubah harga jual di sini (tanpa titik/koma)
  originalPrice: 599000,  // <-- Harga coret (sebelum diskon)
  // ...
}
```

### B. Mengubah Biaya Paket Berlangganan:
Buka berkas [data/pricingData.ts](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/data/pricingData.ts):
```typescript
{
  id: 'plan-pro',
  name: 'Santri Akademi (Thalibul Ilmi)',
  priceMonthly: 199000,       // <-- Iuran bulanan
  priceAnnual: 1499000,       // <-- Iuran tahunan
  originalAnnualPrice: 2388000,
  // ...
}
```
Website secara otomatis akan memformat angka `349000` menjadi `Rp 349.000` secara rapi dan seragam di seluruh halaman.

---

## 7. Mengubah Copywriting & Batasan Wajib Adab Ikhtilaf

### Lokasi Berkas Teks Berdasarkan Bagian:
- **Teks Hero Pembuka**: [components/hero/HeroEditorial.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/hero/HeroEditorial.vue)
- **Teks Metode Belajar**: [components/methodology/LearningMethodology.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/methodology/LearningMethodology.vue)
- **Teks Footer & Alamat**: [components/layout/Footer.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/layout/Footer.vue)

### Tips Menjaga Tag HTML/Vue Agar Tidak Rusak:
Saat mengubah tulisan, editlah **hanya teks di antara tanda kurung sudut `<...>`**. Jangan sampai menghapus tanda kurung pembuka atau penutup:
- ✅ **Benar**: `<h1>Pondasi Fiqih Ibadah</h1>` diubah menjadi `<h1>Belajar Fiqih Mudah</h1>`
- ❌ **Salah**: `Pondasi Fiqih Ibadah</h1>` (tag pembuka `<h1>` terhapus tidak sengaja).

### ⚠️ PERINGATAN WAJIB: Batasan Konten Adab Ikhtilaf (Lampiran C)
> **DILARANG MENGHAPUS CATATAN ADAB IKHTILAF**:
> Sesuai standar kurikulum platform ini, komponen [IkhtilafPolicyCard.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/ikhtilaf/IkhtilafPolicyCard.vue) dan teks `ikhtilafNote` pada setiap kursus fiqih **TIDAK BOLEH DIHAPUS** demi mempersingkat halaman.
> 
> Catatan ini adalah garansi ilmiah bahwa lembaga Anda mengajarkan fikih dengan menghormati konsensus 4 mazhab mu'tabar (Hanafi, Maliki, Syafi'i, Hanbali) dan menjauhkan santri dari sikap fanatisme golongan (*ta'ashshub*).

---

## 8. Integrasi WhatsApp & Media Sosial

Untuk mengubah nomor kontak admin pendaftaran santri dan link media sosial:

### A. Mengubah Nomor WhatsApp Admin & Hotline Ma'had:
Buka berkas [components/layout/Footer.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/layout/Footer.vue) dan [components/layout/Navbar.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/layout/Navbar.vue).

Format penulisan link WhatsApp yang benar:
```html
<a href="https://wa.me/6281299008822?text=Assalamu'alaikum%20Admin,%20saya%20ingin%20bertanya%20tentang%20kursus%20di%20Darul%20Hikmah">
  Hubungi WhatsApp Musyrif
</a>
```
> *Catatan: Awali nomor dengan kode negara `62` (bukan angka 0).*

### B. Mengubah Akun Media Sosial:
Buka berkas [components/layout/Footer.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/layout/Footer.vue) pada bagian bawah (link Instagram, YouTube, dan email resmi ma'had).

---

## 9. Menambahkan Kursus & Program Belajar Baru

Untuk menambahkan materi kursus baru ke dalam website:

1. Buka berkas [data/coursesData.ts](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/data/coursesData.ts).
2. Salin salah satu blok kursus yang sudah ada, lalu tempelkan di baris paling bawah sebelum tanda `];`.
3. Sesuaikan informasinya:
```typescript
{
  id: 'c-sirah-02',
  slug: 'fiqih-sirah-nabawiyah-lanjutan',
  title: 'Fiqih Sirah Nabawiyah: Analisis Piagam Madinah',
  arabicTitle: 'فقه السيرة ودراسة وثيقة المدينة',
  subtitle: 'Pondasi kepemimpinan dan konstitusi negara majemuk Rasulullah ﷺ.',
  category: 'sirah',
  categoryName: 'Sirah & Peradaban',
  level: 'Menengah (Mutawassith)',
  levelKey: 'menengah',
  durationHours: 18,
  totalLessons: 14,
  totalModules: 3,
  instructorId: 'ins-05',
  instructorName: 'Ust. Ridwan Abdullah, MA.',
  instructorTitle: 'Pakar Sejarah & Peradaban Islam',
  instructorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  instructorInstitution: 'Darul Musthafa, Tarim, Yaman',
  rating: 4.98,
  reviewsCount: 140,
  enrolledCount: 980,
  price: 249000,
  originalPrice: 450000,
  isPopular: true,
  isSanadCertified: true,
  turatsBookReference: 'Fiqhus Sirah (Dr. Muhammad Sa\'id Ramadhan Al-Buthi)',
  shortDescription: 'Membedah strategi diplomasi Rasulullah ﷺ dalam membangun masyarakat madani.',
  fullDescription: 'Kajian komprehensif mengupas bait-bait pasal dalam Piagam Madinah...',
  learningOutcomes: [
    'Memahami 47 pasal utama dalam naskah Piagam Madinah.',
    'Menerapkan adab diplomasi dakwah dalam konteks masyarakat majemuk.'
  ],
  prerequisites: ['Telah mempelajari Sirah Nabawiyah tingkat pemula.'],
  modules: [
    {
      id: 'm-sirah-1',
      title: 'Latar Belakang Hijrah & Piagam Madinah',
      description: 'Konsolidasi kaum Muhajirin dan Anshar',
      lessons: [
        { id: 'ls-1', title: 'Kedatangan di Madinah', duration: '30 Menit', type: 'video', isFreePreview: true }
      ]
    }
  ]
}
```
Simpan berkas (`Ctrl + S`), dan kursus baru langsung otomatis tampil di katalog lengkap dengan filternya.

---

## 10. Membuka & Mengedit Proyek di VS Code

Untuk kenyamanan mengelola website, gunakan software **Visual Studio Code (VS Code)**:

1. Unduh dan pasang [Visual Studio Code](https://code.visualstudio.com/) (Gratis untuk Windows & Mac).
2. Buka VS Code, klik menu **File > Open Folder...**, lalu pilih folder proyek ini (`19._Platform_Kursus_Online_Islami_(Akademi)`).
3. **Ekstensi yang Sangat Disarankan untuk Dipasang**:
   - **Vue - Official (Volar)**: Ekstensi wajib untuk proyek Vue 3 & Nuxt 3 (menggantikan Vetur lama agar pewarnaan kode dan deteksi otomatis bekerja sempurna).
   - **Tailwind CSS IntelliSense**: Menampilkan contekan warna dan class style otomatis.
   - **Prettier - Code formatter**: Merapikan spasi kode secara otomatis saat disimpan.
   - **ESLint**: Menjaga standar kebersihan kode.
4. **Menjalankan Website dari Dalam VS Code**:
   - Buka menu **Terminal > New Terminal**.
   - Ketik `npm run dev` lalu tekan Enter.
   - Klik tautan `http://localhost:3000` yang muncul.

---

## 11. Panduan Lainnya: Hard Refresh, Backup, & Troubleshooting

### A. Cara Hard Refresh Browser (Jika Perubahan Belum Muncul)
Browser terkadang menyimpan memori lama (cache). Jika setelah diedit tampilan di browser belum berubah:
- Di Windows: Tekan **Ctrl + F5** (atau tahan `Ctrl` lalu klik tombol Reload di browser).
- Di Mac: Tekan **Cmd + Shift + R**.

### B. Cara Membuat Cadangan (Backup) Proyek
Sebelum melakukan perubahan teks atau data dalam jumlah besar:
1. Salin (*copy*) seluruh folder proyek ini ke lokasi lain, atau klik kanan folder lalu pilih **Compress to ZIP**.
2. Beri nama cadangan seperti `Backup_Akademi_27Agu2026.zip`.
3. Jika terjadi salah edit yang tidak bisa diperbaiki, Anda dapat mengekstrak kembali folder cadangan tersebut.

### C. Solusi Masalah Umum (FAQ Troubleshooting):
1. **Layar Tiba-tiba Blank Putih**:
   - Buka Inspect Element (F12) > tab Console. Lihat berkas apa yang salah ketik. Sering kali terjadi karena tanda koma `,` atau tanda kutip `'` yang terhapus saat mengedit data.
2. **Gambar Tidak Muncul**:
   - Periksa apakah nama berkas gambar huruf besar/kecilnya sama persis (`foto.jpg` berbeda dengan `Foto.JPG` di server).
3. **Terminal Menampilkan Error "Port 3000 in use"**:
   - Nuxt akan otomatis beralih ke port `http://localhost:3001` atau matikan terminal sebelumnya dengan menekan `Ctrl + C`.

---

## 12. Memodifikasi Komponen Visual & Tiap Bagian Halaman

Berikut adalah peta panduan untuk menemukan komponen visual pada layar:

```
+-------------------------------------------------------------------------------+
| TopNotificationBar.vue  (Pengumuman Beasiswa 100% di Paling Atas)             |
+-------------------------------------------------------------------------------+
| Navbar.vue              (Logo Akademi, Menu Navigasi, Tombol Mulai Belajar)   |
+-------------------------------------------------------------------------------+
| HeroEditorial.vue       (Judul Besar, Kotak Pencarian, Statistik 12.500+ Santri) |
+-------------------------------------------------------------------------------+
| LearningPathRoadmap.vue (Peta Jalur Belajar Visual & Node 4 Tingkatan)        |
+-------------------------------------------------------------------------------+
| CourseCatalog.vue       (Filter Kategori, Grid Kartu Kursus, Modal Silabus)   |
+-------------------------------------------------------------------------------+
| InstructorSection.vue   (Foto Para Ustadz & Tombol Silsilah Sanad Ijazah)     |
+-------------------------------------------------------------------------------+
| LearningMethodology.vue (4 Pilar Metode Belajar: Video, Halaqah, Kuis, Ijazah)|
+-------------------------------------------------------------------------------+
| IkhtilafPolicyCard.vue  (Piagam Adab Ikhtilaf Fiqih & Wasathiyah 4 Mazhab)    |
+-------------------------------------------------------------------------------+
| StudentTestimonials.vue (Kutipan Pengalaman & Testimoni Santri Alumni)        |
+-------------------------------------------------------------------------------+
| PricingSection.vue      (Pilihan Paket Belajar, Garansi 14 Hari, Form Daftar) |
+-------------------------------------------------------------------------------+
| Footer.vue              (Alamat Ma'had, Kontak WhatsApp, Hak Cipta & Link)    |
+-------------------------------------------------------------------------------+
```

Setiap komponen di folder `components/` bersifat independen. Anda dapat mengubah isi satu komponen tanpa perlu khawatir merusak komponen lainnya.

---

## 13. Sistem Pembayaran: QRIS Statis vs QRIS Dinamis

Saat santri mendaftar kelas berbayar melalui [EnrollmentModal.vue](file:///d:/website%20claude/Website%202/2.Islami_Premium_Vue_Nuxt_Tailwind/19._Platform_Kursus_Online_Islami_%28Akademi%29/components/pricing/EnrollmentModal.vue), terdapat dua metode penerapan pembayaran:

| Fitur | QRIS Statis (Manual) | QRIS Dinamis (Otomatis) |
| :--- | :--- | :--- |
| **Biaya Layanan** | **Gratis 100%** (Dikeluarkan oleh Bank/BSI/BCA) | Dikenakan biaya MDR sekitar 0.7% per transaksi |
| **Cara Kerja** | Menampilkan gambar barcode QRIS tetap milik yayasan di layar | Barcode QRIS dibuat otomatis unik per nominal transaksi |
| **Konfirmasi Pembayaran** | Santri mengunggah / mengirim bukti transfer via WhatsApp ke admin | Sistem otomatis mendeteksi pembayaran detik itu juga |
| **Kebutuhan Teknis** | Cukup simpan gambar `qris-yayasan.png` di folder `public/images/` | Butuh akun Payment Gateway (Midtrans, Xendit, atau Duitku Syariah) |
| **Rekomendasi** | **Sangat disarankan untuk tahap awal yayasan/ma'had** | Disarankan jika santri aktif sudah di atas 1.000 orang |

---

## 14. Fitur Upload Berkas

Pada portal pengajuan beasiswa santri dhuafa dan pengumpulan tugas qira'ah kitab:

### 1. Bagian yang Sudah Berjalan di Frontend (Client-Side):
- Tampilan form upload dokumen.
- Pembatasan tipe berkas (misal hanya menerima `.pdf`, `.jpg`, atau `.mp3` rekaman suara).
- Pembatasan ukuran berkas (maksimal 5 MB agar tidak membebani memori).
- Pratinjau (*preview*) berkas seketika di layar santri.

### 2. Bagian yang Membutuhkan Server Penyimpanan (Backend Storage):
- Agar berkas yang diunggah santri tersimpan permanen di cloud (bukan hanya di memori browser), Anda dapat menghubungkan form ini ke layanan penyimpanan gratis/murah seperti:
  - **Cloudinary** (Sangat mudah untuk gambar & dokumen).
  - **Supabase Storage / AWS S3** (Untuk berkas PDF dan rekaman audio qira'ah).
  - **Google Drive API** atau pengiriman langsung via lampiran bot WhatsApp/Telegram admin.

---

## 15. Panduan Integrasi Hosting & Publikasi Website

Website berbasis **Nuxt 3** membutuhkan lingkungan server modern yang mendukung **Node.js**.

> ⚠️ **Catatan Penting Hosting**:
> Berbeda dari website HTML jadul, paket Shared Hosting cPanel murah (seperti paket termurah Hostinger/GoDaddy standar) **tidak disarankan** kecuali mereka menyediakan menu khusus bernama **"Setup Node.js App"**.

### Pilihan Cara Hosting Terbaik & Termudah:

#### Opsi 1: Menggunakan Vercel atau Netlify (SANGAT DIREKOMENDASIKAN - GRATIS & OTOMATIS)
1. Unggah folder proyek Anda ke akun [GitHub](https://github.com/).
2. Buka [Vercel.com](https://vercel.com/) atau [Netlify.com](https://www.netlify.com/), daftar menggunakan akun GitHub Anda.
3. Klik **Add New Project**, pilih repositori proyek ini.
4. Vercel akan otomatis mendeteksi framework **Nuxt**, klik tombol **Deploy**.
5. Dalam waktu 1-2 menit, website Anda sudah aktif di internet dengan HTTPS gratis (contoh: `https://darulhikmah-academy.vercel.app`), dan Anda bisa menyambungkannya ke domain yayasan sendiri (contoh: `https://darulhikmah.ac.id`).

#### Opsi 2: Ekspor Statis Penuh (Static Generation) untuk Shared Hosting Biasa
Jika ma'had Anda sudah terlanjur membeli hosting cPanel biasa:
1. Buka terminal di VS Code, jalankan perintah:
```bash
npm run generate
```
2. Nuxt akan mengompilasi seluruh halaman menjadi berkas HTML, CSS, dan JavaScript statis murni di dalam folder:
📁 `.output/public/`
3. Kompres seluruh isi folder `.output/public/` tersebut menjadi berkas `.zip`, lalu unggah dan ekstrak ke folder `public_html` di cPanel hosting Anda.
4. Website akan langsung berjalan online tanpa membutuhkan server Node.js aktif!

---

*Alhamdulillah, panduan 15 bab telah selesai. Semoga platform Darul Hikmah Academy ini menjadi wasilah jariyah penyebaran ilmu Islam yang berkah, terpercaya, dan mencerahkan umat.*
