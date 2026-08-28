export interface PricingPlan {
  id: string;
  name: string;
  arabicName: string;
  badge?: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  originalAnnualPrice: number;
  isPopular?: boolean;
  isScholarshipEligible?: boolean;
  features: {
    title: string;
    included: boolean;
    tooltip?: string;
  }[];
  ctaText: string;
  ctaAction: string;
}

export const PRICING_PLANS_DATA: PricingPlan[] = [
  {
    id: 'plan-basic',
    name: 'Penuntut Mandiri (Mustami\')',
    arabicName: 'طالب العلم المستقل',
    tagline: 'Ideal untuk pemula yang ingin belajar materi dasar secara mandiri sesuai waktu luang.',
    priceMonthly: 99000,
    priceAnnual: 799000,
    originalAnnualPrice: 1188000,
    isPopular: false,
    isScholarshipEligible: true,
    features: [
      { title: 'Akses 35+ Modul Kursus Tingkat Pemula', included: true },
      { title: 'Video On-Demand Kualitas HD & Audio Jernih', included: true },
      { title: 'Download Slide Rangkuman & E-Book Matan Turats', included: true },
      { title: 'Kuis Evaluasi Formatif Tiap Bab', included: true },
      { title: 'Sertifikat Digital Penyelesaian Kursus', included: true },
      { title: 'Akses Sesi Halaqah Live Mingguan Bersama Asatidz', included: false },
      { title: 'Ujian Sanad Bersambung & Ijazah Keilmuan', included: false },
      { title: 'Bimbingan Tugas & Musyrif Pribadi 1-on-1', included: false }
    ],
    ctaText: 'Mulai Belajar Mandiri',
    ctaAction: 'basic'
  },
  {
    id: 'plan-pro',
    name: 'Santri Akademi (Thalibul Ilmi)',
    arabicName: 'طالب العلم الأكاديمي',
    badge: 'PALING DIMINATI',
    tagline: 'Paket komprehensif akses seluruh jalur keilmuan, halaqah interaktif, dan sertifikasi sanad.',
    priceMonthly: 199000,
    priceAnnual: 1499000,
    originalAnnualPrice: 2388000,
    isPopular: true,
    isScholarshipEligible: true,
    features: [
      { title: 'Akses Penuh Seluruh 180+ Kursus & Roadmap Belajar', included: true },
      { title: 'Visual Learning Path Interaktif Semua Jenjang', included: true },
      { title: 'Akses Halaqah Live & Diskusi Tanya Jawab Mingguan', included: true },
      { title: 'Hak Mengikuti Ujian Sanad Matan & Ijazah Riwayah', included: true },
      { title: 'Transkrip & Rekaman Halaqah Seumur Hidup', included: true },
      { title: 'Grup Diskusi Keilmuan Eksklusif bersama Asatidz', included: true },
      { title: 'Prioritas Tanya Jawab Fiqih & Fatwa', included: true },
      { title: 'Bimbingan Skripsi/Riset Turats 1-on-1 (Khusus Spesialisasi)', included: false }
    ],
    ctaText: 'Daftar Santri Akademi',
    ctaAction: 'pro'
  },
  {
    id: 'plan-lifetime',
    name: 'Keluarga & Wakaf Pendidikan',
    arabicName: 'عضوية مدى الحياة والوقف',
    badge: 'NILAI TERBAIK & WAKAF',
    tagline: 'Akses seumur hidup untuk Anda dan keluarga sekaligus berinfaq bagi beasiswa santri dhuafa.',
    priceMonthly: 0,
    priceAnnual: 3499000,
    originalAnnualPrice: 5999000,
    isPopular: false,
    isScholarshipEligible: false,
    features: [
      { title: 'Akses Seumur Hidup (Lifetime) Tanpa Iuran Bulanan', included: true },
      { title: 'Bisa Digunakan Hingga 3 Akun Anggota Keluarga', included: true },
      { title: '30% Dana Disalurkan untuk Beasiswa Santri Yatim & Dhuafa', included: true },
      { title: 'Seluruh Fitur Paket Santri Akademi Terbuka Penuh', included: true },
      { title: 'Kitab Fisik Turats Eksklusif Dikirim ke Rumah', included: true },
      { title: 'Undangan Khusus Dauroh Offline Tahunan Bersama Masyayikh', included: true },
      { title: 'Konsultasi Belajar Syar\'i Pribadi bersama Asatidz', included: true },
      { title: 'Laporan Infaq Penyaluran Beasiswa Berkala', included: true }
    ],
    ctaText: 'Pilih Akses Seumur Hidup',
    ctaAction: 'lifetime'
  }
];
