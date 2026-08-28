export interface SanadChain {
  discipline: string;
  bookName: string;
  chainSummary: string;
  highestAuthority: string;
  ijazahType: 'Sama\' wa Qira\'ah' | 'Ijazah \'Ammah' | 'Ijazah Khashshah';
  yearReceived: number;
}

export interface Instructor {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  academicDegree: string;
  institution: string;
  specialization: string;
  avatar: string;
  bio: string;
  teachingExperienceYears: number;
  totalStudents: number;
  totalCourses: number;
  sanadChains: SanadChain[];
  featuredQuote: string;
}

export const INSTRUCTORS_DATA: Instructor[] = [
  {
    id: 'ins-01',
    name: 'Dr. KH. Ahmad Fauzi, MA.',
    arabicName: 'د. أحمد فوزي الأزهري',
    title: 'Doktor Fiqih Muqaran (Perbandingan Mazhab)',
    academicDegree: 'S1, S2, S3 Universitas Al-Azhar Kairo, Mesir',
    institution: 'Fakultas Syariah wal Qanun, Univ. Al-Azhar Mesir',
    specialization: 'Fiqih 4 Mazhab, Ushul Fiqih, & Maqashid Syariah',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Menghabiskan lebih dari 14 tahun menimba ilmu di Masjid Al-Azhar dan talaqqi kepada para ulama kibar di Kairo. Aktif mengajar Fiqih Muqaran dengan menjunjung tinggi adab ikhtilaf dan persatuan umat.',
    teachingExperienceYears: 18,
    totalStudents: 14200,
    totalCourses: 5,
    featuredQuote: 'Perbedaan pandangan di antara para Imam Mazhab adalah rahmat dan khazanah metodologis luar biasa, bukan alasan perpecahan.',
    sanadChains: [
      {
        discipline: 'Fiqih & Ushul Fiqih Syafi\'i',
        bookName: 'Al-Majmu\' Syarah Al-Muhadzdzab & Jam\'ul Jawami\'',
        chainSummary: 'Bersambung via Syaikh Ali Jum\'ah & Syaikh Yusri Rusydi hingga Al-Imam Asy-Syafi\'i rahimahullah.',
        highestAuthority: 'Al-Imam Muhammad bin Idris Asy-Syafi\'i',
        ijazahType: 'Sama\' wa Qira\'ah',
        yearReceived: 2012
      },
      {
        discipline: 'Ushul Fiqih',
        bookName: 'Matan Al-Waraqat & Lubbul Ushul',
        chainSummary: 'Bersambung melalui jalur Masyayikh Al-Azhar Asy-Syarif.',
        highestAuthority: 'Imam Al-Haramain Al-Juwaini',
        ijazahType: 'Ijazah Khashshah',
        yearReceived: 2010
      }
    ]
  },
  {
    id: 'ins-02',
    name: 'Ust. Muhammad Wildan, Lc., M.Hum.',
    arabicName: 'الأستاذ محمد ويلدان المدني',
    title: 'Magister Linguistik & Pakar Bahasa Arab Turats',
    academicDegree: 'S1 Univ. Islam Madinah (KSA), S2 Ilmu Linguistik UGM',
    institution: 'Kulliyyah Lughah Arabiyyah Univ. Islam Madinah',
    specialization: 'Nahwu, Shorof, Balaghah, & Filologi Manuskrip Arab',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Pengajar bahasa Arab berpengalaman lebih dari 12 tahun yang merintis metode visual i\'rab untuk mempermudah santri non-Arab menguasai kitab kuning dalam waktu singkat.',
    teachingExperienceYears: 12,
    totalStudents: 18500,
    totalCourses: 4,
    featuredQuote: 'Bahasa Arab adalah kunci pembuka khazanah ilmu Islam; barangsiapa menguasainya, terbuka baginya ribuan jilid karya ulama.',
    sanadChains: [
      {
        discipline: 'Nahwu & Sastra Arab',
        bookName: 'Alfiyyah Ibnu Malik & Matan Al-Jurumiyyah',
        chainSummary: 'Talaqqi dan qira\'ah di Masjid Nabawi Madinah Munawwarah.',
        highestAuthority: 'Al-Imam Ibnu Malik Al-Andalusi',
        ijazahType: 'Sama\' wa Qira\'ah',
        yearReceived: 2015
      }
    ]
  },
  {
    id: 'ins-03',
    name: 'Prof. Dr. Syarif Hidayatullah, MA.',
    arabicName: 'أ.د. شريف هداية الله',
    title: 'Guru Besar Ilmu Al-Qur\'an & Metodologi Tafsir',
    academicDegree: 'S1, S2 Univ. Umm Al-Qura Makkah, S3 UIN Syarif Hidayatullah',
    institution: 'Universitas Umm Al-Qura Makkah Al-Mukarramah',
    specialization: 'Ulumul Qur\'an, Qira\'at Sab\'ah, & Kaidah Tafsir Tematik',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Pakar studi Al-Qur\'an yang telah menulis 15+ buku seputar metodologi tafsir dan kaidah tarjih. Pembimbing para mufassir muda di berbagai perguruan tinggi Islam.',
    teachingExperienceYears: 25,
    totalStudents: 9800,
    totalCourses: 3,
    featuredQuote: 'Menafsirkan Al-Qur\'an membutuhkan kaidah istinbath yang kokoh agar tidak terjerumus dalam penafsiran hawa nafsu.',
    sanadChains: [
      {
        discipline: 'Qira\'at & Ilmu Al-Qur\'an',
        bookName: 'Matan Asy-Syathibiyyah fi Qira\'at Sab\'ah',
        chainSummary: 'Sanad muttashil 30 tingkatan hingga Rasulullah ﷺ via Syaikh Al-Muqri\' Makkah.',
        highestAuthority: 'Sayyidina Rasulullah ﷺ',
        ijazahType: 'Sama\' wa Qira\'ah',
        yearReceived: 2008
      }
    ]
  },
  {
    id: 'ins-04',
    name: 'Dr. Luqman Hakim, Lc., MA.',
    arabicName: 'د. لقمان حكيم',
    title: 'Doktor Hadits & Metodologi Takhrij Riwayat',
    academicDegree: 'S1, S2, S3 Fakultas Hadits Univ. Islam Madinah, KSA',
    institution: 'Kulliyyatul Hadits Asy-Syarif Univ. Islam Madinah',
    specialization: 'Musthalah Hadits, Jarh wa Ta\'dil, & Tahqiq Kutubus Sittah',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Menyelesaikan disertasi doktoral dengan predikat Summa Cum Laude di Madinah. Memiliki sanad periwayatan hadits dari puluhan muhaddits dunia Islam.',
    teachingExperienceYears: 14,
    totalStudents: 11400,
    totalCourses: 3,
    featuredQuote: 'Sanad adalah bagian dari agama; jikalau bukan karena sanad, niscaya setiap orang bebas berbicara semau mereka.',
    sanadChains: [
      {
        discipline: 'Kutubus Sittah',
        bookName: 'Shahih Al-Bukhari, Shahih Muslim, Sunan Abi Dawud, At-Tirmidzi, An-Nasa\'i, Ibnu Majah',
        chainSummary: 'Ijazah Musalsal bil Awwaliyyah & Sanad Kutubus Sittah dari para Masyayikh Haramain.',
        highestAuthority: 'Al-Imam Al-Bukhari & Para Shahabat Nabi ﷺ',
        ijazahType: 'Ijazah Khashshah',
        yearReceived: 2014
      }
    ]
  }
];
