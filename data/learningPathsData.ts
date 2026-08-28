export interface RoadmapNode {
  id: string;
  stepNumber: number;
  levelKey: 'pemula' | 'menengah' | 'mahir' | 'spesialisasi';
  levelLabel: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  courseId: string;
  durationWeeks: number;
  estimatedHours: number;
  turatsBook: string;
  status: 'foundation' | 'core' | 'advanced' | 'capstone';
  prerequisites: string[];
  keyCompetencies: string[];
  syllabusOverview: string[];
  instructorName: string;
  hasSanadExam: boolean;
  sanadDegreeName?: string;
  ikhtilafAdabNote?: string;
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  description: string;
  category: 'fiqih' | 'bahasa-arab' | 'tafsir' | 'hadits';
  totalNodes: number;
  totalDurationWeeks: number;
  totalEstimatedHours: number;
  difficulty: 'Semua Tingkatan (Berjenjang)' | 'Pemula ke Mahir';
  nodes: RoadmapNode[];
  targetAudience: string;
  outcomeSummary: string;
}

export const LEARNING_PATHS_DATA: LearningPath[] = [
  {
    id: 'path-fiqih',
    slug: 'jalur-fiqih-4-mazhab',
    title: 'Jalur Keilmuan Fiqih 4 Mazhab & Ushul Fiqih',
    arabicTitle: 'مسار الفقه المقارن وأصول الاستنباط',
    tagline: 'Dari Kaidah Fiqih Ibadah Dasar Hingga Nalar Ushul & Fiqih Muqaran 4 Mazhab',
    description: 'Roadmap terstruktur mengantarkan penuntut ilmu memahami hukum Islam dari tataran praktis ibadah harian, kaidah ushul fiqih, hingga telaah perbandingan 4 mazhab mu\'tabar (Hanafi, Maliki, Syafi\'i, Hanbali) dengan adab ilmiah yang tinggi.',
    category: 'fiqih',
    totalNodes: 4,
    totalDurationWeeks: 36,
    totalEstimatedHours: 120,
    difficulty: 'Semua Tingkatan (Berjenjang)',
    targetAudience: 'Santri, Asatidz, Mahasiswa Syariah, dan Penuntut Ilmu yang mendambakan kedalaman fiqih komparatif yang toleran dan adil.',
    outcomeSummary: 'Menguasai dalil fiqih 4 mazhab, kaidah ushul, dan bersikap bijak beradab dalam menghadapi realitas perbedaan hukum di masyarakat.',
    nodes: [
      {
        id: 'node-f-1',
        stepNumber: 1,
        levelKey: 'pemula',
        levelLabel: 'Tingkat 1: Ibtida\'i (Pondasi)',
        title: 'Fiqih Ibadah Praktis & Thaharah',
        arabicTitle: 'فقه العبادات للمبتدئين',
        subtitle: 'Pondasi sahnya ibadah sehari-hari: wudhu, shalat, zakat, dan puasa.',
        courseId: 'c-fiqih-01',
        durationWeeks: 6,
        estimatedHours: 20,
        turatsBook: 'Safinatun Naja & Matan Abi Syuja\'',
        status: 'foundation',
        prerequisites: ['Tidak ada prasyarat khusus. Cocok untuk semua Muslim.'],
        keyCompetencies: [
          'Memahami syarat, rukun, dan pembatal wudhu & shalat.',
          'Mampu mempraktikkan tata cara thaharah secara benar sesuai syariat.',
          'Mengetahui rukun zakat fitrah dan puasa Ramadhan.'
        ],
        syllabusOverview: [
          'Bab 1: Hakikat Hukum Taklifi (Wajib, Mandub, Haram, Makruh, Mubah)',
          'Bab 2: Pembagian Air & Pensucian Najis Mukhaffafah/Mutawassithah/Mughalladhah',
          'Bab 3: Rukun Shalat 17 Perkara & Sujud Sahwi/Tilawah/Syukur',
          'Bab 4: Kuis Formatif & Uji Praktik Mandiri'
        ],
        instructorName: 'Dr. KH. Ahmad Fauzi, MA.',
        hasSanadExam: false
      },
      {
        id: 'node-f-2',
        stepNumber: 2,
        levelKey: 'menengah',
        levelLabel: 'Tingkat 2: Mutawassith (Kaidah Ushul)',
        title: 'Pengantar Ushul Fiqih: Mabadi\'ul Istinbath',
        arabicTitle: 'مبادئ أصول الفقه واستنباط الأحكام',
        subtitle: 'Memahami kaidah penggalian hukum dari Al-Qur\'an, Sunnah, Ijma\', dan Qiyas.',
        courseId: 'c-fiqih-01',
        durationWeeks: 8,
        estimatedHours: 28,
        turatsBook: 'Matan Al-Waraqat (Imam Al-Haramain Al-Juwaini)',
        status: 'core',
        prerequisites: ['Telah menyelesaikan Tingkat 1 atau memiliki dasar fiqih ibadah.'],
        keyCompetencies: [
          'Mengenal lafaz Nash: \'Am, Khas, Mujmal, Mubayyan, Muthlaq, Muqayyad.',
          'Memahami rukun Qiyas: Ashl, Far\', Hukm, dan \'Illat.',
          'Mengenali syarat-syarat Mujtahid dan tingkatan Ijtihad.'
        ],
        syllabusOverview: [
          'Bab 1: Definisi Ushul Fiqih & Sejarah Pembukuannya oleh Imam Asy-Syafi\'i',
          'Bab 2: Kaidah Lafaz Amar (Perintah) & Nahy (Larangan)',
          'Bab 3: Dalil-Dalil yang Disepakati & Dalil Ikhtilaf (Istihsan, Maslahah Mursalah, \'Urf)',
          'Bab 4: Diskusi Halaqah: Nalar Istinbath'
        ],
        instructorName: 'Dr. KH. Ahmad Fauzi, MA.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Matan Al-Waraqat'
      },
      {
        id: 'node-f-3',
        stepNumber: 3,
        levelKey: 'mahir',
        levelLabel: 'Tingkat 3: Mutaqaddim (Fiqih 4 Mazhab)',
        title: 'Fiqih Perbandingan 4 Mazhab & Adab Ikhtilaf',
        arabicTitle: 'الفقه المقارن بين المذاهب الأربعة وأسباب الاختلاف',
        subtitle: 'Mengkaji argumen dalil Hanafi, Maliki, Syafi\'i, dan Hanbali secara komparatif.',
        courseId: 'c-fiqih-01',
        durationWeeks: 12,
        estimatedHours: 42,
        turatsBook: 'Bidayatul Mujtahid wa Nihayatul Muqtashid (Ibnu Rusyd)',
        status: 'advanced',
        ikhtilafAdabNote: 'Disajikan dengan metodologi adab ikhtilaf objektif, memaparkan dalil masing-masing imam tanpa fanatisme (ta\'ashshub).',
        prerequisites: ['Telah menguasai Ushul Fiqih Al-Waraqat.'],
        keyCompetencies: [
          'Mampu melacak asal muasal perbedaan hukum (Asbabul Ikhtilaf).',
          'Memahami letak kekuatan dalil masing-masing imam mazhab.',
          'Memiliki keluasan jiwa dalam menyikapi khilafiyah cabang ibadah & muamalah.'
        ],
        syllabusOverview: [
          'Bab 1: 10 Sebab Utama Perbedaan Pendapat Ulama Fiqih',
          'Bab 2: Studi Komparatif Fiqih Thaharah & Shalat 4 Mazhab',
          'Bab 3: Studi Komparatif Fiqih Zakat, Puasa, & Haji',
          'Bab 4: Bedah Masalah Kontemporer & Metode Tarjih Moderat'
        ],
        instructorName: 'Dr. KH. Ahmad Fauzi, MA.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Dirasah Fiqh Muqaran'
      },
      {
        id: 'node-f-4',
        stepNumber: 4,
        levelKey: 'spesialisasi',
        levelLabel: 'Tingkat 4: Takhassus (Qawaid & Fatwa)',
        title: 'Al-Qawaid Al-Fiqhiyyah & Metodologi Ifta\' Kontemporer',
        arabicTitle: 'القواعد الفقهية الكبرى وتخريج الفروع على الأصول',
        subtitle: '5 Kaidah Induk Fiqih dan aplikasinya pada fatwa ekonomi, medis, & teknologi terkini.',
        courseId: 'c-muamalah-01',
        durationWeeks: 10,
        estimatedHours: 30,
        turatsBook: 'Al-Asybah wan Nazha\'ir (As-Suyuthi / Ibnu Nujaim)',
        status: 'capstone',
        prerequisites: ['Lulus Tingkat 1, 2, dan 3 Fiqih Muqaran.'],
        keyCompetencies: [
          'Menguasai 5 Kaidah Asasiyyah: Niat, Keyakinan, Masyaqqah, Dharar, dan \'Adat.',
          'Menerapkan kaidah fiqih pada kasus fintech, bioetika medis, dan AI.',
          'Menyusun analisis hukum syariah komprehensif.'
        ],
        syllabusOverview: [
          'Bab 1: Kaidah Al-Umuru bi Maqashidiha & Al-Yaqinu la Yazulu bisy Syakk',
          'Bab 2: Kaidah Al-Masyaqqatu Tajlibut Taysir & Adh-Dhararu Yuzal',
          'Bab 3: Kaidah Al-\'Adatu Muhakkamah & Kaidah-Kaidah Furu\' Turunannya',
          'Bab 4: Ujian Komprehensif Sanad & Sertifikasi Pengajar Fiqih'
        ],
        instructorName: 'Dr. Muhammad Zaky, Lc., M.Ec.',
        hasSanadExam: true,
        sanadDegreeName: 'Syahadah Sanad Qawaid Fiqhiyyah'
      }
    ]
  },
  {
    id: 'path-bahasa-arab',
    slug: 'jalur-bahasa-arab-komprehensif',
    title: 'Jalur Keilmuan Bahasa Arab & Sastra Al-Qur\'an',
    arabicTitle: 'مسار دراسات لغة القرآن الكريم',
    tagline: 'Dari Dasar Huruf & Kata Hingga Menyelami Retorika Balaghah Al-Qur\'an',
    description: 'Jalur belajar bertahap untuk penutur non-Arab agar mampu membaca, memahami struktur tata bahasa (Nahwu), perubahan bentuk kata (Shorof), hingga menikmati keindahan retorika wahyu (Balaghah).',
    category: 'bahasa-arab',
    totalNodes: 4,
    totalDurationWeeks: 32,
    totalEstimatedHours: 110,
    difficulty: 'Semua Tingkatan (Berjenjang)',
    targetAudience: 'Penuntut ilmu yang ingin mandiri membaca literatur turats berbahasa Arab gundul (kitab kuning) dan mendalami makna Al-Qur\'an.',
    outcomeSummary: 'Mampu membaca kitab Arab tanpa harakat dengan kaidah nahwu yang benar, meng-i\'rab, dan memahami balaghah ayat.',
    nodes: [
      {
        id: 'node-a-1',
        stepNumber: 1,
        levelKey: 'pemula',
        levelLabel: 'Mustawa 1: Nahwu Dasar',
        title: 'Matan Al-Jurumiyyah & Struktur I\'rab Dasar',
        arabicTitle: 'شرح متن الآجرومية في علم النحو',
        subtitle: 'Mengenal kalam, 4 keadaan i\'rab, isim marfu\', manshub, dan majrur.',
        courseId: 'c-nahwu-01',
        durationWeeks: 8,
        estimatedHours: 24,
        turatsBook: 'Matan Al-Jurumiyyah (Ibnu Ajurrum)',
        status: 'foundation',
        prerequisites: ['Lancar membaca huruf hijaiyyah.'],
        keyCompetencies: [
          'Membedakan isim, fi\'il, dan huruf dengan tanda-tandanya.',
          'Menguasai tabel tanda i\'rab asli dan pengganti.',
          'Meng-i\'rab kalimat isim mufrod, mutsanna, dan jama\'.'
        ],
        syllabusOverview: [
          'Bab 1: Definisi Kalam & Unsur-unsurnya',
          'Bab 2: Tanda-tanda I\'rab (Rafa\', Nashab, Khafadh, Jazm)',
          'Bab 3: Marfu\'atul Asma\' (Fa\'il, Na\'ibul Fa\'il, Mubtada\', Khabar)',
          'Bab 4: Latihan I\'rab Surah Pendek Juz \'Amma'
        ],
        instructorName: 'Ust. Muhammad Wildan, Lc., M.Hum.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Matan Al-Jurumiyyah'
      },
      {
        id: 'node-a-2',
        stepNumber: 2,
        levelKey: 'menengah',
        levelLabel: 'Mustawa 2: Shorof & Morfologi Kata',
        title: 'Ilmu Shorof: Wazan Tashrif & Derivasi Kata',
        arabicTitle: 'علم الصرف وتصريف الأفعال والأسماء',
        subtitle: 'Mengubah 1 kata dasar menjadi puluhan makna melalui tabel tashrif lughawi & istilahi.',
        courseId: 'c-nahwu-01',
        durationWeeks: 8,
        estimatedHours: 26,
        turatsBook: 'Matan Al-Bina\' wal Asas & Al-Amtsilah At-Tashrifiyyah',
        status: 'core',
        prerequisites: ['Telah menyelesaikan Mustawa 1 (Al-Jurumiyyah).'],
        keyCompetencies: [
          'Menguasai wazan Tsulatsi Mujarrad 6 bab dan Tsulatsi Mazid.',
          'Membentuk Isim Fa\'il, Isim Maf\'ul, Isim Makan, Isim Zaman, dan Isim Alat.',
          'Membongkar akar kata Arab dalam kamus (Al-Munawwir / Lisanul Arab).'
        ],
        syllabusOverview: [
          'Bab 1: Timbangan Kata (Al-Mizan Ash-Shorfi: Fa\' - \'Ain - Lam)',
          'Bab 2: Tashrif Istilahi Fi\'il Madhi, Mudhari\', Mashdar, Amar, Nahy',
          'Bab 3: Fi\'il Shahih vs Fi\'il Mu\'tal (Mitsal, Ajwaf, Naqis, Lafif)',
          'Bab 4: Latihan Bedah Kata Al-Qur\'an'
        ],
        instructorName: 'Ust. Muhammad Wildan, Lc., M.Hum.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Tashrif Al-Amtsilah'
      },
      {
        id: 'node-a-3',
        stepNumber: 3,
        levelKey: 'mahir',
        levelLabel: 'Mustawa 3: Nahwu Mutawassith',
        title: 'Mutammimah Al-Jurumiyyah & Qawaidul I\'rab',
        arabicTitle: 'متممة الآجرومية في علم العربية',
        subtitle: 'Penyempurnaan kaidah nahwu tingkat menengah dan bedah struktur kalimat rumit.',
        courseId: 'c-nahwu-01',
        durationWeeks: 8,
        estimatedHours: 30,
        turatsBook: 'Mutammimah Al-Jurumiyyah (Al-Haththab)',
        status: 'advanced',
        prerequisites: ['Lulus Mustawa 1 dan 2.'],
        keyCompetencies: [
          'Menguasai bab Af\'alul Muqarabah, Raja\', Syuru\', dan Inna wa Akhwatuha.',
          'Menganalisis kalimat bersyarat (Adawat Asy-Syarth) dan Jawabul Qasam.',
          'Membaca teks kitab gundul tanpa harakat dengan akurasi tinggi.'
        ],
        syllabusOverview: [
          'Bab 1: Detail Manshubatul Asma\' (Maf\'ul Bih, Fih, Liahlih, Ma\'ah, Muthlaq, Hal, Tamyiz)',
          'Bab 2: Tawabi\' (Na\'at, \'Athaf, Taukid, Badal)',
          'Bab 3: Praktik Membaca Kitab Turats Fiqih & Hadits Gundul',
          'Bab 4: Ujian Baca Kitab Bersanad'
        ],
        instructorName: 'Ust. Muhammad Wildan, Lc., M.Hum.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Mutammimah Al-Jurumiyyah'
      },
      {
        id: 'node-a-4',
        stepNumber: 4,
        levelKey: 'spesialisasi',
        levelLabel: 'Mustawa 4: Balaghah & Sastra Wahyu',
        title: 'Ilmu Balaghah: Ma\'ani, Bayan, & Badi\'',
        arabicTitle: 'علم البلاغة وإعجاز القرآن البياني',
        subtitle: 'Menyingkap keindahan mukjizat sastra Al-Qur\'an dan gaya retorika Arab tingkat tinggi.',
        courseId: 'c-balaghah-01',
        durationWeeks: 8,
        estimatedHours: 30,
        turatsBook: 'Durusul Balaghah (Hifni Nashif) & Al-Balaghah Al-Wadhihah',
        status: 'capstone',
        prerequisites: ['Telah menguasai Nahwu dan Shorof secara kokoh.'],
        keyCompetencies: [
          'Memahami konsep Fasahah dan Balaghah serta nilai estetikanya.',
          'Mengidentifikasi Tasybih, Majaz \'Aqli/Lughawi, Isti\'arah, dan Kinayah.',
          'Merasakan kekhususan pemilihan diksi dalam ayat-ayat Al-Qur\'an.'
        ],
        syllabusOverview: [
          'Bab 1: Ilmu Ma\'ani (Khabar & Insya\', Qashr, Ijaz & Ithnab)',
          'Bab 2: Ilmu Bayan (Tasybih, Majaz, Isti\'arah, Kinayah)',
          'Bab 3: Ilmu Badi\' (Muhassinat Lafzhiyyah & Ma\'nawiyyah: Jinas, Sajak, Tibaq, Muqabalah)',
          'Bab 4: Tadabbur Keindahan Ayat Balaghah Pilihan'
        ],
        instructorName: 'Ust. Muhammad Wildan, Lc., M.Hum.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Balaghah Durusul Balaghah'
      }
    ]
  },
  {
    id: 'path-tafsir',
    slug: 'jalur-ulumul-quran-tafsir',
    title: 'Jalur Keilmuan Ulumul Qur\'an & Metodologi Tafsir',
    arabicTitle: 'مسار علوم القرآن ومناهج التفسير والتدبر',
    tagline: 'Dari Kaidah Turunnya Wahyu Hingga Analisis Corak Tafsir Klasik & Kontemporer',
    description: 'Roadmap ilmiah bagi penuntut ilmu yang ingin memahami kitab suci Al-Qur\'an dengan metodologi para mufassir salaf dan khalaf yang otentik dan teruji.',
    category: 'tafsir',
    totalNodes: 3,
    totalDurationWeeks: 24,
    totalEstimatedHours: 85,
    difficulty: 'Semua Tingkatan (Berjenjang)',
    targetAudience: 'Penghafal Al-Qur\'an, Asatidz, Mahasiswa Tafsir, dan pemerhati kajian Al-Qur\'an.',
    outcomeSummary: 'Mampu menafsirkan ayat sesuai kaidah tarjih, asbabun nuzul, munasabah, dan ragam qira\'at.',
    nodes: [
      {
        id: 'node-t-1',
        stepNumber: 1,
        levelKey: 'pemula',
        levelLabel: 'Tahap 1: Mabadi\' Ulumul Qur\'an',
        title: 'Pengantar Ulumul Qur\'an & Sejarah Kodifikasi',
        arabicTitle: 'تاريخ تدوين القرآن وعلوم الوحي',
        subtitle: 'Wahyu, Makki-Madani, Asbabun Nuzul, dan pemeliharaan mushaf.',
        courseId: 'c-tafsir-01',
        durationWeeks: 6,
        estimatedHours: 20,
        turatsBook: 'Mabahits fi \'Ulumil Qur\'an (Manna\' Al-Qaththan)',
        status: 'foundation',
        prerequisites: ['Terbuka untuk umum.'],
        keyCompetencies: [
          'Memahami sejarah pewahyuan dan penulisan mushaf Utsmani.',
          'Mengenali ciri surah Makkiyah dan Madaniyah.',
          'Mengetahui fungsi Asbabun Nuzul dalam penetapan hukum.'
        ],
        syllabusOverview: [
          'Bab 1: Definisi Al-Qur\'an dan I\'jaz Al-Qur\'an',
          'Bab 2: Kronologi Kodifikasi Era Khulafaur Rasyidin',
          'Bab 3: Kaidah Asbabun Nuzul & Makki Madani'
        ],
        instructorName: 'Prof. Dr. Syarif Hidayatullah, MA.',
        hasSanadExam: true
      },
      {
        id: 'node-t-2',
        stepNumber: 2,
        levelKey: 'menengah',
        levelLabel: 'Tahap 2: Qawaidut Tafsir',
        title: 'Kaidah-Kaidah Tafsir & Tarjih',
        arabicTitle: 'قواعد التفسير والترجيح بين أقوال المفسرين',
        subtitle: 'Rumus para mufassir dalam memilih pendapat yang paling kuat secara dalil.',
        courseId: 'c-tafsir-01',
        durationWeeks: 8,
        estimatedHours: 30,
        turatsBook: 'Muqaddimah fi Ushulit Tafsir (Ibnu Taimiyyah)',
        status: 'core',
        prerequisites: ['Lulus Tahap 1 Ulumul Qur\'an.'],
        keyCompetencies: [
          'Membedakan Tafsir bil Ma\'tsur dan Tafsir bir Ra\'yi.',
          'Menerapkan kaidah tarjih lughawi dan siyaqul kalam.',
          'Menghindari riwayat Israiliyyat yang tertolak.'
        ],
        syllabusOverview: [
          'Bab 1: Tingkatan Sumber Tafsir (Qur\'an bil Qur\'an, bil Hadits, bi Aqwalish Shahabah)',
          'Bab 2: Ragam Ikhtilaf Tafsir: Ikhtilaf Tanawwu\' vs Ikhtilaf Tadhadd',
          'Bab 3: Bedah Kaidah Tarjih Ibnu Jarir Ath-Thabari'
        ],
        instructorName: 'Prof. Dr. Syarif Hidayatullah, MA.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Ushulut Tafsir'
      },
      {
        id: 'node-t-3',
        stepNumber: 3,
        levelKey: 'mahir',
        levelLabel: 'Tahap 3: Manahijul Mufassirin',
        title: 'Kajian Manhaj Kitab Tafsir Mu\'tabar',
        arabicTitle: 'مناهج أمهات كتب التفسير والتدبر التحليli',
        subtitle: 'Menganalisis metodologi Tafsir Ath-Thabari, Ibnu Katsir, Al-Qurthubi, dan Az-Zamakhsyari.',
        courseId: 'c-tafsir-01',
        durationWeeks: 10,
        estimatedHours: 35,
        turatsBook: 'Al-Tafsir wal Mufassirun (Adz-Dzahabi)',
        status: 'advanced',
        prerequisites: ['Lulus Qawaidut Tafsir & Bahasa Arab Menengah.'],
        keyCompetencies: [
          'Memahami corak tafsir fiqhi (Al-Qurthubi / Ahkamul Qur\'an Al-Jashshash).',
          'Menganalisis tafsir lughawi dan i\'rab Al-Qur\'an.',
          'Mampu menyusun karya tulis tadabbur ilmiah.'
        ],
        syllabusOverview: [
          'Bab 1: Bedah Manhaj Jami\'ul Bayan Imam Ath-Thabari',
          'Bab 2: Bedah Manhaj Al-Jami\' li Ahkamil Qur\'an Imam Al-Qurthubi',
          'Bab 3: Bedah Manhaj Tafsir Al-Qur\'an Al-\'Azhim Ibnu Katsir',
          'Bab 4: Proyek Akhir Tafsir Tematik'
        ],
        instructorName: 'Prof. Dr. Syarif Hidayatullah, MA.',
        hasSanadExam: true,
        sanadDegreeName: 'Syahadah Dirasah Manahijul Mufassirin'
      }
    ]
  },
  {
    id: 'path-hadits',
    slug: 'jalur-sanad-hadits',
    title: 'Jalur Keilmuan Musthalah Hadits & Sanad Riwayah',
    arabicTitle: 'مسار علوم الحديث والمصطلح والإسناد',
    tagline: 'Dari Kaidah Dasar Periwayatan Hingga Tahqiq Takhrij & Kritik Sanad',
    description: 'Roadmap komprehensif mengarungi ilmu transmisi riwayat sabda Nabi ﷺ, mengenal syarat keshahihan, tingkatan perawi, dan memverifikasi keshahihan matan.',
    category: 'hadits',
    totalNodes: 3,
    totalDurationWeeks: 26,
    totalEstimatedHours: 90,
    difficulty: 'Semua Tingkatan (Berjenjang)',
    targetAudience: 'Penuntut ilmu hadits, pengajar, dan santri yang ingin memperoleh sanad muttashil.',
    outcomeSummary: 'Mampu mentakhrij hadits, menganalisis status perawi (Jarh wa Ta\'dil), dan menguasai kaidah keshahihan.',
    nodes: [
      {
        id: 'node-h-1',
        stepNumber: 1,
        levelKey: 'pemula',
        levelLabel: 'Tingkat 1: Al-Baiquniyyah',
        title: 'Al-Manzhumah Al-Baiquniyyah fi \'Ilmil Hadits',
        arabicTitle: 'شرح المنظومة البيقونية في مصطلح الحديث',
        subtitle: 'Menghafal dan memahami 34 bait rumus klasifikasi hadits.',
        courseId: 'c-hadits-01',
        durationWeeks: 6,
        estimatedHours: 20,
        turatsBook: 'Al-Manzhumah Al-Baiquniyyah (Umar bin Muhammad Al-Baiquni)',
        status: 'foundation',
        prerequisites: ['Terbuka untuk semua pemula.'],
        keyCompetencies: [
          'Memahami 5 syarat hadits Shahih dan Hasan.',
          'Mengenal jenis-jenis hadits Dhaif (Mursal, Munqathi\', Mu\'dhal, Mu\'allaq).',
          'Membedakan hadits Marfu\', Mauquf, dan Maqthu\'.'
        ],
        syllabusOverview: [
          'Bab 1: Bait 1-10: Hadits Shahih, Hasan, dan Dhaif',
          'Bab 2: Bait 11-20: Cacat Sanad karena Terputus (Inqitha\')',
          'Bab 3: Bait 21-34: Syadz, Munkar, Maudhu\', dan Mudallas'
        ],
        instructorName: 'Dr. Luqman Hakim, Lc., MA.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Sanad Al-Manzhumah Al-Baiquniyyah'
      },
      {
        id: 'node-h-2',
        stepNumber: 2,
        levelKey: 'menengah',
        levelLabel: 'Tingkat 2: Nukhbatul Fikar',
        title: 'Nukhbatul Fikar & Metodologi Ibnu Hajar',
        arabicTitle: 'نخبة الفكر في مصطلح أهل الأثر',
        subtitle: 'Sistematika ilmu hadits paling presisi karya Al-Hafizh Ibnu Hajar Al-Asqalani.',
        courseId: 'c-hadits-01',
        durationWeeks: 10,
        estimatedHours: 35,
        turatsBook: 'Nukhbatul Fikar & Nuzhatun Nazhar (Ibnu Hajar Al-Asqalani)',
        status: 'core',
        prerequisites: ['Telah menguasai Matan Al-Baiquniyyah.'],
        keyCompetencies: [
          'Memahami pembagian Hadits Mutawatir dan Ahad (Masyhur, \'Aziz, Gharib).',
          'Menganalisis sebab-sebab cacat perawi (Kadzib, Fasiq, Bid\'ah, Jahalah).',
          'Mengenal konsep \'Illat hadits yang tersembunyi.'
        ],
        syllabusOverview: [
          'Bab 1: Klasifikasi Jalur Periwayatan Mutawatir & Ahad',
          'Bab 2: Kriteria Keadilan (\'Adalah) & Kekuatan Hafalan (Dhabth)',
          'Bab 3: Cacat Matan: Idraj, Qalb, Idhthirab, Tashhif'
        ],
        instructorName: 'Dr. Luqman Hakim, Lc., MA.',
        hasSanadExam: true,
        sanadDegreeName: 'Ijazah Nukhbatul Fikar'
      },
      {
        id: 'node-h-3',
        stepNumber: 3,
        levelKey: 'mahir',
        levelLabel: 'Tingkat 3: Takhrij & Jarh wa Ta\'dil',
        title: 'Takhrijul Hadits & Studi Rijalus Sanad',
        arabicTitle: 'تخريج الحديث ودراسة الأسانيد والرجال',
        subtitle: 'Praktik meneliti hadits langsung ke kitab babon (Kutubus Sittah) dan menganalisis biografi perawi.',
        courseId: 'c-hadits-01',
        durationWeeks: 10,
        estimatedHours: 35,
        turatsBook: 'Ushulut Takhrij wa Dirasatul Asanid (Dr. Mahmud Ath-Thahhan) & Tahdzibut Tahdzib',
        status: 'advanced',
        prerequisites: ['Lulus Nukhbatul Fikar dan Bahasa Arab Menengah.'],
        keyCompetencies: [
          'Menggunakan 5 metode takhrij hadits klasik dan digital (Maktabah Syamilah).',
          'Membaca kitab Rijal: Tahdzibut Tahdzib, Taqribut Tahdzib, Al-Jarh wat Ta\'dil.',
          'Menyimpulkan hukum keshahihan sanad suatu hadits.'
        ],
        syllabusOverview: [
          'Bab 1: Metode Takhrij Berdasarkan Sahabat, Lafaz Pertama, Kata Kunci, dan Tema',
          'Bab 2: Tingkatan Lafaz Jarh wa Ta\'dil (Tsiqah Tsiqah s/d Wadhdha\')',
          'Bab 3: Praktik Analisis Sanad Hadits Masyhur di Media Sosial',
          'Bab 4: Ujian Sanad Kutubus Sittah'
        ],
        instructorName: 'Dr. Luqman Hakim, Lc., MA.',
        hasSanadExam: true,
        sanadDegreeName: 'Syahadah Takhrij wa Dirasatul Asanid'
      }
    ]
  }
];
