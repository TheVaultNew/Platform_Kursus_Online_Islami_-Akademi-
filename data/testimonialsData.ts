export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  courseCompleted: string;
  rating: number;
  quote: string;
  learningPathTaken: string;
  highlightTag: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-01',
    name: 'Faisal Rahman, S.T.',
    role: 'Software Engineer & Santri Akhir Pekan',
    location: 'Bandung, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    courseCompleted: 'Nahwu Matan Al-Jurumiyyah & Fiqih 4 Mazhab',
    rating: 5,
    quote: 'Fitur Visual Learning Path benar-benar mengubah cara saya belajar ilmu syar\'i. Sebagai profesional IT yang sibuk, materi terstruktur dan penjelasan adab ikhtilaf dari Dr. Ahmad Fauzi membuka wawasan saya bahwa perbedaan fiqih itu sangat ilmiah dan menyejukkan.',
    learningPathTaken: 'Jalur Keilmuan Fiqih 4 Mazhab',
    highlightTag: 'Alumni Jalur Fiqih'
  },
  {
    id: 'testi-02',
    name: 'Ustadzah Nurul Hidayati, S.Ag.',
    role: 'Pengajar Pesantren & Guru PAI',
    location: 'Surabaya, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    courseCompleted: 'Musthalah Hadits & Metodologi Kritik Sanad',
    rating: 5,
    quote: 'Materi kajian di Darul Hikmah Academy memiliki bobot ilmiah universitas timur tengah namun disampaikan dengan pedagogi digital modern. Saya sangat terbantu dengan adanya transkrip matan Arab dan sesi halaqah live bersama asatidz bersanad.',
    learningPathTaken: 'Jalur Keilmuan Musthalah Hadits',
    highlightTag: 'Alumni Jalur Hadits'
  },
  {
    id: 'testi-03',
    name: 'Rian Pratama',
    role: 'Mahasiswa Kedokteran',
    location: 'Yogyakarta, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    courseCompleted: 'Bahasa Arab Terstruktur Mustawa 1-2',
    rating: 5,
    quote: 'Dulu saya mengira bahasa Arab itu mustahil dipelajari tanpa mondok bertahun-tahun. Lewat metode visual diagram dan bimbingan Ust. Wildan, alhamdulillah sekarang saya sudah bisa membaca kitab matan fiqih gundul dan memahaminya.',
    learningPathTaken: 'Jalur Keilmuan Bahasa Arab',
    highlightTag: 'Alumni Jalur Bahasa Arab'
  },
  {
    id: 'testi-04',
    name: 'H. Bambang Setiawan, MM.',
    role: 'Pebisnis & Praktisi Keuangan',
    location: 'Jakarta Selatan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    courseCompleted: 'Fiqih Muamalah Kontemporer & Fintech Syariah',
    rating: 5,
    quote: 'Kajian Fiqih Muamalah Dr. Muhammad Zaky sangat solutif menjawab keraguan transaksi bisnis modern. Analisis fatwa DSN-MUI dan AAOIFI dijabarkan sangat jernih dan mendalam.',
    learningPathTaken: 'Spesialisasi Muamalah',
    highlightTag: 'Alumni Praktisi Bisnis'
  }
];
