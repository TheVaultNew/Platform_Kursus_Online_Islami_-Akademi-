export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'reading' | 'live';
  isFreePreview?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  category: 'fiqih' | 'bahasa-arab' | 'tafsir' | 'hadits' | 'sirah' | 'aqidah' | 'muamalah';
  categoryName: string;
  level: 'Pemula (Ibtida\'i)' | 'Menengah (Mutawassith)' | 'Lanjutan (Mutaqaddim)';
  levelKey: 'pemula' | 'menengah' | 'lanjutan';
  durationHours: number;
  totalLessons: number;
  totalModules: number;
  instructorId: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  instructorInstitution: string;
  rating: number;
  reviewsCount: number;
  enrolledCount: number;
  price: number;
  originalPrice: number;
  isPopular?: boolean;
  isSanadCertified: boolean;
  turatsBookReference: string;
  shortDescription: string;
  fullDescription: string;
  learningOutcomes: string[];
  prerequisites: string[];
  ikhtilafNote?: string; // Kepatuhan Lampiran C: Catatan adab ikhtilaf 4 mazhab
  modules: CourseModule[];
}

export const COURSES_DATA: Course[] = [
  {
    id: 'c-fiqih-01',
    slug: 'fiqih-ibadah-komparatif-4-mazhab',
    title: 'Fiqih Ibadah Komparatif 4 Mazhab & Adab Ikhtilaf',
    arabicTitle: 'الفقه المقارن في العبادات وأدب الاختلاف',
    subtitle: 'Kajian komprehensif thaharah, shalat, zakat, puasa, dan haji dengan perspektif Hanafi, Maliki, Syafi\'i, dan Hanbali secara objektif dan ilmiah.',
    category: 'fiqih',
    categoryName: 'Fiqih & Ushul Fiqih',
    level: 'Menengah (Mutawassith)',
    levelKey: 'menengah',
    durationHours: 32,
    totalLessons: 28,
    totalModules: 4,
    instructorId: 'ins-01',
    instructorName: 'Dr. KH. Ahmad Fauzi, MA.',
    instructorTitle: 'Doktor Fiqih Muqaran Al-Azhar University Cairo',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'Universitas Al-Azhar, Mesir',
    rating: 4.95,
    reviewsCount: 420,
    enrolledCount: 2840,
    price: 349000,
    originalPrice: 599000,
    isPopular: true,
    isSanadCertified: true,
    turatsBookReference: 'Bidayatul Mujtahid wa Nihayatul Muqtashid (Ibnu Rusyd)',
    shortDescription: 'Memahami dalil, metode istinbath, dan titik temu serta perbedaan pandangan 4 mazhab fiqih besar dengan menjunjung tinggi adab persaudaraan ilmiah.',
    fullDescription: 'Kursus ini dirancang khusus bagi penuntut ilmu yang ingin memahami bagaimana para fuqaha agung mazhab Hanafi, Maliki, Syafi\'i, dan Hanbali merumuskan hukum fiqih dari dalil-dalil Al-Qur\'an dan As-Sunnah. Pembahasan menekankan pada kekayaan ijtihad ulama dan membangun kedewasaan dalam menyikapi perbedaan furu\'iyyah.',
    ikhtilafNote: 'KURSUS INI BERPANDUAN PADA ADAB IKHTILAF: Seluruh perbedaan pendapat disajikan secara adil, ilmiah, dan berimbang tanpa mendiskreditkan salah satu mazhab mu\'tabar. Fokus utama adalah memahami argumen dalil masing-masing imam mazhab.',
    learningOutcomes: [
      'Memahami metodologi ushul fiqih dari masing-masing 4 Imam Mazhab.',
      'Mengetahui dalil dan cara istidlal furu\' fiqih thaharah dan shalat 4 mazhab.',
      'Memiliki kelapangan dada dan kematangan adab dalam merespons keragaman amaliah umat.',
      'Mampu merujuk kitab-kitab turats fiqih komparatif secara mandiri.'
    ],
    prerequisites: [
      'Telah menguasai dasar-dasar fiqih praktis tingkat pemula.',
      'Dapat membaca teks Arab dasar (berharakat).'
    ],
    modules: [
      {
        id: 'm1',
        title: 'Pengantar Fiqih Perbandingan & Adab Perbedaan Pendapat',
        description: 'Mengenal sejarah kodifikasi 4 mazhab dan kaidah emas dalam menyikapi perbedaan furu\'iyyah.',
        lessons: [
          { id: 'l1', title: 'Kedudukan Fiqih Mazhab & Urgensi Belajar Fiqih Muqaran', duration: '25 Menit', type: 'video', isFreePreview: true },
          { id: 'l2', title: 'Adab Ikhtilaf: Teladan Para Sahabat & Imam Mazhab', duration: '30 Menit', type: 'video', isFreePreview: true },
          { id: 'l3', title: 'Kuis Refleksi: Karakteristik Metodologi 4 Mazhab', duration: '15 Menit', type: 'quiz' }
        ]
      },
      {
        id: 'm2',
        title: 'Bab Thaharah: Wudhu, Tayammum, & Pensucian Najis',
        description: 'Perbandingan rukun wudhu, batas usapan kepala, dan hukum air menurut 4 mazhab.',
        lessons: [
          { id: 'l4', title: 'Konsep Air Mutlak & Air Musta\'mal dalam 4 Mazhab', duration: '40 Menit', type: 'video', isFreePreview: true },
          { id: 'l5', title: 'Rukun & Sunnah Wudhu: Dalil Surah Al-Maidah Ayat 6', duration: '45 Menit', type: 'video' },
          { id: 'l6', title: 'Halaqah Live Diskusi: Masalah Khilafiyah Seputar Najis', duration: '60 Menit', type: 'live' }
        ]
      },
      {
        id: 'm3',
        title: 'Bab Shalat: Niat, Takbir, Qunut, & Duduk Tasyahhud',
        description: 'Detail teknis tata cara shalat beserta dalil hadits yang menjadi sandaran para imam.',
        lessons: [
          { id: 'l7', title: 'Lafaz Niat & Takbiratul Ihram Menurut 4 Mazhab', duration: '35 Menit', type: 'video' },
          { id: 'l8', title: 'Kajian Dalil Qunut Shubuh (Syafi\'i & Maliki vs Hanafi & Hanbali)', duration: '50 Menit', type: 'video' },
          { id: 'l9', title: 'Posisi Tangan dan Isyarat Telunjuk Saat Tasyahhud', duration: '35 Menit', type: 'video' }
        ]
      },
      {
        id: 'm4',
        title: 'Bab Zakat, Puasa Ramadhan, & Manasik Haji',
        description: 'Penetapan hisab-rukyah, fidyah, zakat profesi, dan rukun haji komparatif.',
        lessons: [
          { id: 'l10', title: 'Penetapan Awal Bulan Hijriyah: Rukyatul Hilal vs Hisab', duration: '45 Menit', type: 'video' },
          { id: 'l11', title: 'Zakat Perdagangan, Saham, & Aset Kontemporer', duration: '40 Menit', type: 'video' },
          { id: 'l12', title: 'Ujian Evaluasi Akhir: Fiqih Ibadah Komparatif', duration: '30 Menit', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'c-nahwu-01',
    slug: 'matan-al-jurumiyyah-nahwu-dasar',
    title: 'Nahwu Bahasa Arab Terstruktur: Matan Al-Jurumiyyah',
    arabicTitle: 'النحو الميسر بشرح متن الآجرومية',
    subtitle: 'Kuasai struktur tata bahasa Arab dari nol dengan metode visual interaktif, i\'rab praktis, dan latihan aplikatif ayat-ayat Al-Qur\'an.',
    category: 'bahasa-arab',
    categoryName: 'Bahasa Arab & Balaghah',
    level: 'Pemula (Ibtida\'i)',
    levelKey: 'pemula',
    durationHours: 24,
    totalLessons: 24,
    totalModules: 4,
    instructorId: 'ins-02',
    instructorName: 'Ust. Muhammad Wildan, Lc., M.Hum.',
    instructorTitle: 'Pakar Bahasa Arab & Pengampu Ma\'had Bahasa',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'Universitas Islam Madinah, KSA',
    rating: 4.98,
    reviewsCount: 680,
    enrolledCount: 4120,
    price: 299000,
    originalPrice: 499000,
    isPopular: true,
    isSanadCertified: true,
    turatsBookReference: 'Matan Al-Jurumiyyah (Ibnu Ajurrum ash-Shanhaji)',
    shortDescription: 'Gerbang utama memahami kitab turats. Belajar kalam, tanda-tanda i\'rab, isim-isim marfu\', manshub, dan majrur dengan mudah.',
    fullDescription: 'Matan Al-Jurumiyyah adalah kitab pondasi paling legendaris dalam disiplin ilmu nahwu selama lebih dari 700 tahun. Kursus ini menguraikan setiap bait dan matan secara sistematis menggunakan bagan visual modern, diagram relasi kata, dan latihan i\'rab langsung pada potongan ayat Al-Qur\'an.',
    learningOutcomes: [
      'Mengenali pembagian kalam: Isim, Fi\'il, dan Huruf serta ciri-cirinya.',
      'Memahami 4 keadaan I\'rab: Rafa\', Nashab, Khafadh (Jar), dan Jazm beserta tanda aseli dan penggantinya.',
      'Mampu meng-i\'rab kalimat sederhana dalam bahasa Arab dan Al-Qur\'an.',
      'Siap melanjutkan ke tingkat lanjutan (Mutammimah / Alfiyyah Ibnu Malik).'
    ],
    prerequisites: [
      'Mampu membaca huruf hijaiyyah dengan lancar.',
      'Tidak memerlukan kemampuan berbahasa Arab sebelumnya.'
    ],
    modules: [
      {
        id: 'm-nahwu-1',
        title: 'Bab Al-Kalam & Pembagian Kalimat',
        description: 'Definisi kalam dan membedakan Isim, Fi\'il, dan Huruf.',
        lessons: [
          { id: 'ln-1', title: 'Apa itu Kalam dalam Pandangan Ulama Nahwu?', duration: '20 Menit', type: 'video', isFreePreview: true },
          { id: 'ln-2', title: 'Tanda-tanda Isim: Tanwin, Alif Lam, dan Huruf Jar', duration: '30 Menit', type: 'video', isFreePreview: true },
          { id: 'ln-3', title: 'Latihan Identifikasi Isim pada Surah Al-Fatihah', duration: '25 Menit', type: 'quiz' }
        ]
      },
      {
        id: 'm-nahwu-2',
        title: 'Bab Mengenal Tanda-Tanda I\'rab (Ma\'rifati \'Alamatil I\'rab)',
        description: 'Tanda Rafa\' (Dhammah, Wawu, Alif, Nun) dan tanda Nashab/Jar/Jazm.',
        lessons: [
          { id: 'ln-4', title: '4 Tanda Rafa\' dan Tempat-Tempat Penggunaannya', duration: '40 Menit', type: 'video', isFreePreview: true },
          { id: 'ln-5', title: 'Tanda Nashab: Fathah, Alif, Kasrah, Ya, Hadzfun Nun', duration: '45 Menit', type: 'video' },
          { id: 'ln-6', title: 'Simulasi I\'rab Interaktif: Isim Mutsanna & Jama\'', duration: '35 Menit', type: 'reading' }
        ]
      },
      {
        id: 'm-nahwu-3',
        title: 'Bab Al-Af\'al: Fi\'il Madhi, Mudhari\', & Amar',
        description: 'Hukum Fi\'il Madhi mabni fathah, Fi\'il Amar mabni jazm, dan Fi\'il Mudhari\' mu\'rab.',
        lessons: [
          { id: 'ln-7', title: 'Kaidah Pembentukan Fi\'il Amar dari Mudhari\'', duration: '35 Menit', type: 'video' },
          { id: 'ln-8', title: 'Nawashib: 10 Huruf Penashab Fi\'il Mudhari\'', duration: '40 Menit', type: 'video' },
          { id: 'ln-9', title: 'Jawazim: 18 Huruf Penjazm Fi\'il Mudhari\' & Syarth', duration: '45 Menit', type: 'video' }
        ]
      },
      {
        id: 'm-nahwu-4',
        title: 'Bab Marfu\'atul Asma\' & Manshubatul Asma\'',
        description: 'Fa\'il, Naibul Fa\'il, Mubtada, Khabar, Maf\'ul Bih, Zharof, Masdar.',
        lessons: [
          { id: 'ln-10', title: 'Mubtada & Khabar beserta Pembagian Isim Zhahir/Dhamir', duration: '40 Menit', type: 'video' },
          { id: 'ln-11', title: 'Tawabi\' (Na\'at, Athaf, Taukid, Badal)', duration: '45 Menit', type: 'video' },
          { id: 'ln-12', title: 'Ujian Praktik Membaca & Meng-i\'rab Matan', duration: '30 Menit', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'c-tafsir-01',
    slug: 'ulumul-quran-metodologi-tafsir',
    title: 'Ulumul Qur\'an & Kaidah Metodologi Penafsiran',
    arabicTitle: 'علوم القرآن ومناهج المفسرين',
    subtitle: 'Studi komprehensif sejarah pengumpulan Al-Qur\'an, Asbabun Nuzul, Nasikh Mansukh, Makkiyah-Madaniyah, dan kaidah penafsiran para ulama.',
    category: 'tafsir',
    categoryName: 'Ulumul Qur\'an & Tafsir',
    level: 'Menengah (Mutawassith)',
    levelKey: 'menengah',
    durationHours: 28,
    totalLessons: 22,
    totalModules: 3,
    instructorId: 'ins-03',
    instructorName: 'Prof. Dr. Syarif Hidayatullah, MA.',
    instructorTitle: 'Guru Besar Ilmu Al-Qur\'an & Tafsir',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'UIN Syarif Hidayatullah / Univ. Umm Al-Qura',
    rating: 4.92,
    reviewsCount: 310,
    enrolledCount: 1950,
    price: 329000,
    originalPrice: 550000,
    isPopular: false,
    isSanadCertified: true,
    turatsBookReference: 'Mabahits fi Ulumil Qur\'an (Manna\' Al-Qaththan) & Al-Itqan (As-Suyuthi)',
    shortDescription: 'Memahami bagaimana Al-Qur\'an diturunkan, dipelihara, dan ditafsirkan oleh para mufassir generasi Salaf dan Khalaf dengan kaidah yang lurus.',
    fullDescription: 'Ulumul Qur\'an adalah instrumen utama untuk menjaga pemahaman ayat dari penyimpangan interpretasi. Melalui kursus ini, Anda akan diajak menyelami cabang-cabang ilmu Al-Qur\'an esensial mulai dari qira\'at sab\'ah, kaidah tarjih tafsir, hingga membedakan tafsir bil-ma\'tsur dan tafsir bir-ra\'yi.',
    learningOutcomes: [
      'Menguasai kronologi pembukuan mushaf dari era Nabawi hingga Utsmani.',
      'Memahami fungsi Asbabun Nuzul dan kaidah Al-\'Ibratu bi \'Umumil Lafzhi la bi Khushushis Sabab.',
      'Mengenal ragam corak tafsir: Fiqhi, Lughawi, Isyari, dan I\'tiqadi.',
      'Mampu menganalisis ayat dengan kaidah tafsir yang muktabar.'
    ],
    prerequisites: [
      'Memiliki minat mendalam terhadap studi Al-Qur\'an.',
      'Mengerti dasar-dasar kosakata bahasa Arab.'
    ],
    modules: [
      {
        id: 'm-tafsir-1',
        title: 'Sejarah Al-Qur\'an & Karakteristik Wahyu',
        description: 'Cara turunnya wahyu, pembukuan mushaf Abu Bakar dan Utsman bin Affan.',
        lessons: [
          { id: 'lt-1', title: 'Definisi Al-Qur\'an, Wahyu, dan I\'jaz Al-Qur\'an', duration: '30 Menit', type: 'video', isFreePreview: true },
          { id: 'lt-2', title: 'Kisah Pengumpulan Mushaf Al-Imam di Era Khulafaur Rasyidin', duration: '40 Menit', type: 'video', isFreePreview: true }
        ]
      },
      {
        id: 'm-tafsir-2',
        title: 'Asbabun Nuzul & Makkiyah-Madaniyah',
        description: 'Kriteria surah Makkah dan Madinah serta analisis peristiwa turunnya ayat hukum.',
        lessons: [
          { id: 'lt-3', title: 'Ciri-Ciri Redaksi Ayat Makkiyah vs Madaniyah', duration: '35 Menit', type: 'video' },
          { id: 'lt-4', title: 'Studi Kasus Asbabun Nuzul Ayat-Ayat Ahkam', duration: '45 Menit', type: 'video' }
        ]
      },
      {
        id: 'm-tafsir-3',
        title: 'Manhaj Tafsir: Dari Ath-Thabari Hingga Al-Qurthubi',
        description: 'Bedah metodologi penafsiran bil ma\'tsur dan penafsiran bir ra\'yi al-mahmud.',
        lessons: [
          { id: 'lt-5', title: 'Kaidah Tarjih Antara Dua Pendapat Mufassir', duration: '40 Menit', type: 'video' },
          { id: 'lt-6', title: 'Kuis Evaluasi Analisis Tafsir Tematik', duration: '25 Menit', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'c-hadits-01',
    slug: 'musthalah-hadits-tahqiq-sanad',
    title: 'Musthalah Hadits & Metodologi Kritik Sanad Matan',
    arabicTitle: 'مصطلح الحديث وقواعد الجرح والتعديل',
    subtitle: 'Pelajari kaidah klasifikasi hadits Shahih, Hasan, Dhaif, Maudhu\', serta prinsip Jarh wa Ta\'dil dari kitab Al-Manzhumah Al-Baiquniyyah.',
    category: 'hadits',
    categoryName: 'Hadits & Sanad',
    level: 'Menengah (Mutawassith)',
    levelKey: 'menengah',
    durationHours: 30,
    totalLessons: 26,
    totalModules: 3,
    instructorId: 'ins-04',
    instructorName: 'Dr. Luqman Hakim, Lc., MA.',
    instructorTitle: 'Doktor Hadits & Ilmu Sanad Univ. Islam Madinah',
    instructorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'Universitas Islam Madinah, KSA',
    rating: 4.96,
    reviewsCount: 390,
    enrolledCount: 2210,
    price: 369000,
    originalPrice: 620000,
    isPopular: true,
    isSanadCertified: true,
    turatsBookReference: 'Al-Manzhumah Al-Baiquniyyah & Nukhbatul Fikar (Ibnu Hajar Al-Asqalani)',
    shortDescription: 'Membedah rumus ilmiah ulama muhadditsin dalam memverifikasi keotentikan sabda Rasulullah ﷺ melalui silsilah sanad dan ketiadaan illat.',
    fullDescription: 'Disiplin ilmu hadits adalah salah satu warisan metodologi verifikasi transmisi informasi teragung di dunia. Dalam kursus ini, Anda akan membedah 32 klasifikasi hadits beserta syarat keshahihan, tingkatan perawi, dan studi kasus hadits-hadits masyhur di masyarakat.',
    learningOutcomes: [
      'Menghafal dan memahami matan Al-Baiquniyyah secara tuntas.',
      'Membedakan hadits Shahih Li Dzatihi, Hasan Li Ghairihi, dan jenis-jenis Dhaif.',
      'Memahami kaidah Jarh wa Ta\'dil dan syarat diterimanya periwayatan.',
      'Memperoleh Ijazah Sanad Matan Al-Baiquniyyah bersambung ke mu\'allif.'
    ],
    prerequisites: [
      'Telah mempelajari pengantar studi Islam dasar.'
    ],
    modules: [
      {
        id: 'm-hadits-1',
        title: '5 Syarat Hadits Shahih & Klasifikasi Awal',
        description: 'Ittishalus Sanad, \'Adalatur Ruwah, Dhabtur Ruwah, \'Adamusy Syudzudz, \'Adamul \'Illah.',
        lessons: [
          { id: 'lh-1', title: 'Pengantar Ilmu Hadits Dirayah & Riwayah', duration: '30 Menit', type: 'video', isFreePreview: true },
          { id: 'lh-2', title: '5 Rukun Utama Hadits Shahih Menurut Jumhur', duration: '45 Menit', type: 'video', isFreePreview: true }
        ]
      },
      {
        id: 'm-hadits-2',
        title: 'Jenis-Jenis Cacat Sanad: Mursal, Munqathi\', Mu\'allaq',
        description: 'Inqitha\' sanad zahir dan tersembunyi (Tadlis & Irsal Khafi).',
        lessons: [
          { id: 'lh-3', title: 'Pengertian Hadits Mu\'allaq dan Statusnya di Shahih Bukhari', duration: '40 Menit', type: 'video' },
          { id: 'lh-4', title: 'Bahaya Tadlis dan Cara Mengetahuinya', duration: '40 Menit', type: 'video' }
        ]
      },
      {
        id: 'm-hadits-3',
        title: 'Praktik Takhrij & Kaidah Jarh wa Ta\'dil',
        description: 'Mencari hadits di Kutubus Sittah dan meneliti biografi rijalul hadits.',
        lessons: [
          { id: 'lh-5', title: 'Metode Membaca Kitab Tahdzibut Tahdzib', duration: '50 Menit', type: 'video' },
          { id: 'lh-6', title: 'Ujian Sanad Riwayah Matan Al-Baiquniyyah', duration: '30 Menit', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'c-sirah-01',
    slug: 'sirah-nabawiyah-fiqih-peradaban',
    title: 'Sirah Nabawiyah & Analisis Strategi Peradaban Islam',
    arabicTitle: 'السيرة النبوية وفقه بناء الحضارة',
    subtitle: 'Menapaki jejak Rasulullah ﷺ dari masa jahiliyyah, dakwah Makkah, hijrah, piagam Madinah, hingga Fathu Makkah sebagai blueprint kepemimpinan.',
    category: 'sirah',
    categoryName: 'Sirah & Tarikh',
    level: 'Pemula (Ibtida\'i)',
    levelKey: 'pemula',
    durationHours: 20,
    totalLessons: 18,
    totalModules: 3,
    instructorId: 'ins-05',
    instructorName: 'Ust. Ridwan Abdullah, MA.',
    instructorTitle: 'Peneliti Sejarah & Peradaban Islam Timur Tengah',
    instructorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'Darul Musthafa, Tarim, Yaman',
    rating: 4.97,
    reviewsCount: 512,
    enrolledCount: 3450,
    price: 249000,
    originalPrice: 420000,
    isPopular: false,
    isSanadCertified: true,
    turatsBookReference: 'Ar-Rahiq Al-Makhtum (Al-Mubarakfuri) & Fiqhus Sirah (Al-Buthi)',
    shortDescription: 'Memetik hikmah dakwah, tarbiyah, diplomasi, dan resolusi konflik dari peristiwa sejarah kehidupan agung Baginda Nabi Muhammad ﷺ.',
    fullDescription: 'Sirah bukan sekadar cerita sejarah masa lampau, melainkan panduan hidup dan manhaj perubahan sosial umat manusia. Kursus ini memadukan riwayat shahih dengan ibrah kontemporer untuk kehidupan sehari-hari dan kepemimpinan modern.',
    learningOutcomes: [
      'Mengetahui tahapan fase dakwah Sirriyah dan Jahriyyah di Makkah.',
      'Memahami diplomasi Piagam Madinah sebagai konstitusi majemuk pertama di dunia.',
      'Menghayati akhlaq kepemimpinan Nabi ﷺ saat kemenangan Fathu Makkah.'
    ],
    prerequisites: ['Terbuka untuk semua kalangan.'],
    modules: [
      {
        id: 'm-sirah-1',
        title: 'Kondisi Arab Pra-Islam & Masa Awal Kenabian',
        description: 'Latar geografis Jazirah Arab, nasab mulia, dan pengangkatan Rasul.',
        lessons: [
          { id: 'ls-1', title: 'Peta Geopolitik Dunia Kuno & Hikmah Terpilihnya Mekkah', duration: '35 Menit', type: 'video', isFreePreview: true },
          { id: 'ls-2', title: 'Turunnya Wahyu Pertama di Gua Hira', duration: '40 Menit', type: 'video', isFreePreview: true }
        ]
      },
      {
        id: 'm-sirah-2',
        title: 'Fase Madinah: Piagam Madinah & Pembentukan Peradaban',
        description: 'Persaudaraan Muhajirin-Anshar dan diplomasi konstitusi tertulis pertama.',
        lessons: [
          { id: 'ls-3', title: 'Bedah Pasal Piagam Madinah untuk Masyarakat Majemuk', duration: '45 Menit', type: 'video' },
          { id: 'ls-4', title: 'Strategi Diplomasi Perjanjian Hudaibiyyah', duration: '40 Menit', type: 'video' }
        ]
      },
      {
        id: 'm-sirah-3',
        title: 'Fathu Makkah & Haji Wada\'',
        description: 'Puncak kemenangan dakwah tanpa pertumpahan darah dan pesan abadi khutbah wada\'.',
        lessons: [
          { id: 'ls-5', title: 'Prinsip Kemaafan dalam Fathu Makkah', duration: '40 Menit', type: 'video' },
          { id: 'ls-6', title: 'Kuis Komprehensif Fiqih Sirah Nabawiyah', duration: '25 Menit', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'c-aqidah-01',
    slug: 'aqidah-ahlussunnah-al-aqidah-ath-thahawiyyah',
    title: 'Aqidah Ahlussunnah: Matan Al-Aqidah Ath-Thahawiyyah',
    arabicTitle: 'العقيدة الطحاوية ومنهج أهل السنة والجماعة',
    subtitle: 'Pondasi keyakinan Islam yang lurus, moderat, bebas dari paham ekstrim, merujuk pada konsensus Salafus Shalih.',
    category: 'aqidah',
    categoryName: 'Aqidah & Pemikiran',
    level: 'Menengah (Mutawassith)',
    levelKey: 'menengah',
    durationHours: 26,
    totalLessons: 20,
    totalModules: 3,
    instructorId: 'ins-01',
    instructorName: 'Dr. KH. Ahmad Fauzi, MA.',
    instructorTitle: 'Doktor Fiqih & Ushuluddin Al-Azhar',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'Universitas Al-Azhar, Kairo',
    rating: 4.94,
    reviewsCount: 280,
    enrolledCount: 1670,
    price: 319000,
    originalPrice: 520000,
    isPopular: false,
    isSanadCertified: true,
    turatsBookReference: 'Matan Al-Aqidah Ath-Thahawiyyah (Imam Abu Ja\'far Ath-Thahawi)',
    shortDescription: 'Memperteguh tauhid Uluhiyyah, Rububiyyah, dan Asma wa Shifat dengan pendekatan wasathiyah (moderat) yang disepakati mayoritas ulama.',
    fullDescription: 'Imam Abu Ja\'far Ath-Thahawi (239-321 H) menyusun pokok-pokok aqidah Islam yang disepakati oleh para imam Abu Hanifah, Malik, Asy-Syafi\'i, dan Ahmad. Kursus ini memandu penuntut ilmu memahami makna keimanan, takdir, syafa\'at, dan alam ghaib secara mendalam.',
    learningOutcomes: [
      'Mengetahui prinsip-prinsip utama keyakinan Ahlussunnah wal Jama\'ah.',
      'Memahami sikap moderat dalam menyikapi persoalan teologi umat.',
      'Memperoleh sanad qira\'ah matan Ath-Thahawiyyah.'
    ],
    prerequisites: ['Telah mempelajari rukun iman dasar.'],
    modules: [
      {
        id: 'm-aqidah-1',
        title: 'Mengenal Imam Ath-Thahawi & Prinsip Keesaan Allah',
        description: 'Biografi mu\'allif dan bait-bait awal seputar tauhid mutlak.',
        lessons: [
          { id: 'la-1', title: 'Biografi Imam Ath-Thahawi & Konteks Penulisan Matan', duration: '30 Menit', type: 'video', isFreePreview: true },
          { id: 'la-2', title: 'Sifat-Sifat Allah Tanpa Tasybih dan Tanpa Ta\'thil', duration: '45 Menit', type: 'video', isFreePreview: true }
        ]
      },
      {
        id: 'm-aqidah-2',
        title: 'Kenabian, Syafa\'at, & Perkara Sam\'iyyat (Hari Kiamat)',
        description: 'Penjelasan seputar telaga Kautsar, shirath, timbangan mizan, dan surga-neraka.',
        lessons: [
          { id: 'la-3', title: 'Hakikat Kenabian & Mukjizat Nabi Muhammad ﷺ', duration: '40 Menit', type: 'video' },
          { id: 'la-4', title: 'Kajian Dalil Syafa\'at \'Uzhma di Padang Mahsyar', duration: '45 Menit', type: 'video' }
        ]
      },
      {
        id: 'm-aqidah-3',
        title: 'Takdir, Iman, & Sikap Terhadap Para Shahabat',
        description: 'Konsep qadha dan qadar serta cinta kepada seluruh sahabat dan Ahlul Bait.',
        lessons: [
          { id: 'la-5', title: 'Memahami Takdir Tanpa Fatalisme (Jabariyyah) & Qadariyyah', duration: '45 Menit', type: 'video' },
          { id: 'la-6', title: 'Ujian Sanad Matan Ath-Thahawiyyah', duration: '30 Menit', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'c-muamalah-01',
    slug: 'fiqih-muamalah-kontemporer-fintech-syariah',
    title: 'Fiqih Muamalah Kontemporer & Akad Finansial Modern',
    arabicTitle: 'فقه المعاملات المالية المعاصرة والعقود المصرفية',
    subtitle: 'Bedah akad murabahah, ijarah, musyarakah, sukuk, fintech P2P, kripto, paylater, dan e-money berdasarkan fatwa DSN-MUI & AAOIFI.',
    category: 'muamalah',
    categoryName: 'Fiqih & Ushul Fiqih',
    level: 'Lanjutan (Mutaqaddim)',
    levelKey: 'lanjutan',
    durationHours: 35,
    totalLessons: 30,
    totalModules: 3,
    instructorId: 'ins-06',
    instructorName: 'Dr. Muhammad Zaky, Lc., M.Ec.',
    instructorTitle: 'Pakar Keuangan Syariah Internasional (Certified AAOIFI Sharia Advisor)',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'International Islamic University Malaysia (IIUM)',
    rating: 4.99,
    reviewsCount: 460,
    enrolledCount: 3100,
    price: 399000,
    originalPrice: 699000,
    isPopular: true,
    isSanadCertified: true,
    turatsBookReference: 'Al-Buyu\' min Bidayatil Mujtahid & Standar AAOIFI Internasional',
    shortDescription: 'Memandu praktisi, pebisnis, dan akademisi memahami keabsahan transaksi digital, kaidah larangan Riba, Gharar, dan Maysir dalam era ekonomi modern.',
    fullDescription: 'Perkembangan transaksi digital menuntut pemahaman mendalam tentang bagaimana kaidah ushul dan fiqih muamalah klasik diterapkan pada produk-produk perbankan, pasar modal, dan aplikasi teknologi finansial terkini.',
    ikhtilafNote: 'KURSUS INI MENGULAS BERBAGAI PENDAPAT DEWAN SYARIAH: Analisis disajikan dengan merujuk pada standar Majma\' Al-Fiqh Al-Islami Internasional, AAOIFI Bahrain, dan DSN-MUI dengan memaparkan ragam ijtihad kontemporer.',
    learningOutcomes: [
      'Memahami rukun dan syarat jual beli sah serta pembatalnya.',
      'Menganalisis skema transaksi digital (e-wallet, paylater, kartu kredit syariah).',
      'Mampu menyusun kontrak bisnis syariah yang bebas dari unsur syubhat.'
    ],
    prerequisites: [
      'Memahami fiqih dasar.',
      'Memiliki minat dalam bisnis atau ekonomi syariah.'
    ],
    modules: [
      {
        id: 'm-muamalah-1',
        title: 'Asas-Asas Pokok Muamalah Maliyyah',
        description: 'Kaidah al-Ashlu fil Mu\'amalati al-Ibahah, larangan riba dan gharar.',
        lessons: [
          { id: 'lm-1', title: 'Prinsip Dasar Muamalah Islam: Halal vs Haram', duration: '35 Menit', type: 'video', isFreePreview: true },
          { id: 'lm-2', title: 'Jenis-Jenis Riba: Fadhl, Nasi\'ah, Qardh, dan Jahiliyyah', duration: '45 Menit', type: 'video', isFreePreview: true }
        ]
      },
      {
        id: 'm-muamalah-2',
        title: 'Bedah Akad: Murabahah, Musyarakah, & Ijarah Muntahiya Bittamlik',
        description: 'Struktur akad perbankan syariah dan pembiayaan properti/kendaraan.',
        lessons: [
          { id: 'lm-3', title: 'Skema Murabahah Bank Syariah: Syarat Serah Terima Barang', duration: '40 Menit', type: 'video' },
          { id: 'lm-4', title: 'Musyarakah Mutanaqisah (MMQ) untuk Pembiayaan Rumah', duration: '45 Menit', type: 'video' }
        ]
      },
      {
        id: 'm-muamalah-3',
        title: 'Fintech, Paylater, E-Wallet, & Aset Kripto',
        description: 'Fatwa DSN-MUI & Majma\' Fiqih Internasional seputar teknologi finansial.',
        lessons: [
          { id: 'lm-5', title: 'Hukum Saldo Diskon Paylater & E-Money', duration: '45 Menit', type: 'video' },
          { id: 'lm-6', title: 'Ujian Studi Kasus Akad Bisnis Syariah', duration: '30 Menit', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'c-balaghah-01',
    slug: 'ilmu-balaghah-keindahan-bahasa-alquran',
    title: 'Ilmu Balaghah & Retorika Bahasa Al-Qur\'an',
    arabicTitle: 'البلاغة القرآنية: المعاني والبيان والبديع',
    subtitle: 'Menyelami rahasia mukjizat sastra Al-Qur\'an melalui cabang ilmu Ma\'ani, Bayan, dan Badi\' dengan rujukan Durusul Balaghah.',
    category: 'bahasa-arab',
    categoryName: 'Bahasa Arab & Balaghah',
    level: 'Lanjutan (Mutaqaddim)',
    levelKey: 'lanjutan',
    durationHours: 28,
    totalLessons: 24,
    totalModules: 3,
    instructorId: 'ins-02',
    instructorName: 'Ust. Muhammad Wildan, Lc., M.Hum.',
    instructorTitle: 'Pakar Bahasa Arab & Pengampu Ma\'had',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    instructorInstitution: 'Universitas Islam Madinah, KSA',
    rating: 4.93,
    reviewsCount: 210,
    enrolledCount: 1320,
    price: 349000,
    originalPrice: 580000,
    isPopular: false,
    isSanadCertified: true,
    turatsBookReference: 'Durusul Balaghah (Hifni Nashif dkk.) & Al-Balaghah Al-Wadhihah',
    shortDescription: 'Memahami alasan mengapa sebuah kata dipilih dalam ayat Al-Qur\'an, gaya majaz, tasybih, kinayah, dan keindahan susunan kalimat ilahi.',
    fullDescription: 'Ilmu Balaghah adalah mahkota dalam studi kebahasaan Arab yang membuka tabir keindahan retorika wahyu. Kursus ini diperuntukkan bagi santri yang telah menguasai nahwu dan shorof untuk mengapresiasi mukjizat mukjizat sastra Al-Qur\'an.',
    learningOutcomes: [
      'Memahami 3 pilar Balaghah: Ilmu Ma\'ani, Ilmu Bayan, dan Ilmu Badi\'.',
      'Mengidentifikasi majaz, isti\'arah, kinayah, dan tibaq dalam Al-Qur\'an.',
      'Merasakan kenikmatan tadabbur estetika bahasa Arab fasih.'
    ],
    prerequisites: [
      'Telah lulus tingkat Nahwu dan Shorof menengah.'
    ],
    modules: [
      {
        id: 'm-balaghah-1',
        title: 'Pengantar Fashahah & Hakikat Balaghah',
        description: 'Syarat kalam fashih dan batasan muthabaqatul kalam li muqtadhal hal.',
        lessons: [
          { id: 'lbl-1', title: 'Perbedaan Fasahah dan Balaghah', duration: '25 Menit', type: 'video', isFreePreview: true },
          { id: 'lbl-2', title: 'Kalam Khabar & Insya\' Tholabi dalam Al-Qur\'an', duration: '40 Menit', type: 'video', isFreePreview: true }
        ]
      },
      {
        id: 'm-balaghah-2',
        title: 'Ilmu Bayan: Tasybih, Majaz, & Kinayah',
        description: 'Mengungkap metafora dan analogi sastra Al-Qur\'an yang mengagumkan.',
        lessons: [
          { id: 'lbl-3', title: 'Rukun Tasybih dan Macam-Macamnya', duration: '45 Menit', type: 'video' },
          { id: 'lbl-4', title: 'Isti\'arah Tashrihiyyah & Makniyyah pada Ayat Pilihan', duration: '45 Menit', type: 'video' }
        ]
      },
      {
        id: 'm-balaghah-3',
        title: 'Ilmu Badi\': Keindahan Bunyi & Harmoni Makna',
        description: 'Jinas, Saja\', Tibaq, Muqabalah, dan Tauriyah.',
        lessons: [
          { id: 'lbl-5', title: 'Seni Rima & Keselarasan Huruf di Akhir Ayat', duration: '40 Menit', type: 'video' },
          { id: 'lbl-6', title: 'Ujian Analisis Balaghah Surah Pendek', duration: '30 Menit', type: 'quiz' }
        ]
      }
    ]
  }
];
