<script setup lang="ts">
import { ref } from 'vue';
import {
  Sparkles,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Play,
  Award,
  Video,
  FileText,
  LogOut,
  ShieldCheck,
  Compass,
  UserCheck,
  ChevronRight,
  MessageSquare
} from 'lucide-vue-next';
import { COURSES_DATA, type Course } from '~/data/coursesData';
import KitabPdfModal from '~/components/catalog/KitabPdfModal.vue';

// SEO Meta
useHead({
  title: 'Portal Masuk Santri (Login) — Darul Hikmah Academy',
  meta: [
    {
      name: 'description',
      content: 'Portal login resmi santri Darul Hikmah Academy. Akses materi rekaman kajian, halaqah live session, modul kitab turats, dan ujian sertifikasi sanad keilmuan.'
    }
  ]
});

// State
const identifier = ref('');
const password = ref('');
const showPassword = ref(false);
const rememberMe = ref(true);
const isLoading = ref(false);
const errorMessage = ref('');
const isLoggedIn = ref(false);
const activeTab = ref<'materi' | 'halaqah' | 'tugas'>('materi');

// Current logged in user profile
const loggedInUser = ref({
  name: 'Muhammad Ihsan, S.T.',
  nis: 'DHA-2026-9812',
  email: 'santri.ihsan@darulhikmah.id',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  registeredSince: 'Januari 2026',
  enrolledCourses: [
    {
      id: 'c-fiqih-01',
      title: 'Fiqih Ibadah Komparatif 4 Mazhab & Adab Ikhtilaf',
      instructor: 'Dr. KH. Ahmad Fauzi, MA.',
      progress: 68,
      completedLessons: 19,
      totalLessons: 28,
      nextLesson: 'Bab Shalat: Kajian Dalil Qunut Shubuh (Syafi\'i & Maliki vs Hanafi & Hanbali)',
      hasSanadExam: true
    },
    {
      id: 'c-nahwu-01',
      title: 'Nahwu Bahasa Arab Terstruktur: Matan Al-Jurumiyyah',
      instructor: 'Ust. Muhammad Wildan, Lc., M.Hum.',
      progress: 45,
      completedLessons: 11,
      totalLessons: 24,
      nextLesson: 'Bab Mengenal Tanda-Tanda I\'rab: Tanda Nashab Fathah & Alif',
      hasSanadExam: true
    }
  ]
});

// Auto-fill demo credentials
const fillDemoAccount = (type: 'ihsan' | 'nurul') => {
  if (type === 'ihsan') {
    identifier.value = 'santri.ihsan@darulhikmah.id';
    password.value = 'ThalibulIlmi2026!';
    loggedInUser.value.name = 'Muhammad Ihsan, S.T.';
    loggedInUser.value.email = 'santri.ihsan@darulhikmah.id';
    loggedInUser.value.nis = 'DHA-2026-9812';
  } else {
    identifier.value = 'akhwat.nurul@darulhikmah.id';
    password.value = 'ThalibatulIlmi2026!';
    loggedInUser.value.name = 'Ustadzah Nurul Hidayah, S.Ag.';
    loggedInUser.value.email = 'akhwat.nurul@darulhikmah.id';
    loggedInUser.value.nis = 'DHA-2026-7421';
  }
  errorMessage.value = '';
};

// Handle Login
const handleLogin = () => {
  errorMessage.value = '';
  if (!identifier.value.trim() || !password.value.trim()) {
    errorMessage.value = 'Silakan masukkan Email / NIS dan Kata Sandi Anda.';
    return;
  }

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    isLoggedIn.value = true;
  }, 750);
};

// Handle Logout & Auto Reset
const handleLogout = () => {
  isLoggedIn.value = false;
  identifier.value = '';
  password.value = '';
  showPassword.value = false;
  errorMessage.value = '';
};

// Modal PDF Modul Kitab & Silabus
const isPdfModalOpen = ref(false);
const activePdfCourse = ref<Course | null>(null);

const openPdfModal = (courseId: string) => {
  const found = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];
  activePdfCourse.value = found;
  isPdfModalOpen.value = true;
};

// Helper notification
const handleAction = (message: string) => {
  if (typeof window !== 'undefined') {
    window.alert(message);
  }
};
</script>

<template>
  <div v-fade-scroll class="py-6 sm:py-10 selection:bg-gold-500/30 selection:text-emerald-950 font-sans">
    
    <!-- ========================================================= -->
    <!-- CASE 1: FORM LOGIN (BELUM LOGIN)                          -->
    <!-- ========================================================= -->
    <main v-if="!isLoggedIn" class="flex-1 flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Column: Editorial Islam Card with High Contrast -->
        <div class="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 p-8 sm:p-10 rounded-3xl border-2 border-gold-400/70 shadow-2xl space-y-6 relative overflow-hidden bg-arabesque-dark">
          <div class="absolute -right-16 -top-16 w-60 h-60 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />
          <div class="absolute -left-16 -bottom-16 w-60 h-60 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
          
          <div class="space-y-3">
            <span class="px-4 py-1.5 rounded-full bg-gold-400 text-emerald-950 text-xs font-bold uppercase tracking-wider shadow-md inline-block">
              Portal Pembelajaran Santri
            </span>
            <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug drop-shadow-sm">
              Ruang Belajar & <span class="text-gold-300 font-serif italic">Halaqah Ilmiah</span>
            </h2>
          </div>

          <p class="text-sm sm:text-base text-white leading-relaxed font-normal p-3.5 rounded-2xl bg-emerald-950/80 border border-gold-400/30 shadow-inner">
            Khusus santri terdaftar dan penerima beasiswa. Masuk untuk mengakses video materi rekaman, naskah matan turats, jadwal halaqah mingguan, dan ujian sanad keilmuan.
          </p>

          <!-- Feature Highlights with High Contrast Pills -->
          <div class="space-y-2.5 pt-1 text-xs sm:text-sm text-cream-50 font-medium">
            <div class="p-3 rounded-xl bg-emerald-900/90 border border-gold-400/40 flex items-center gap-3 shadow-sm">
              <CheckCircle2 class="w-5 h-5 text-gold-400 shrink-0" />
              <span class="text-cream-50">Akses Materi 24/7 & Naskah PDF Berharakat</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-900/90 border border-gold-400/40 flex items-center gap-3 shadow-sm">
              <CheckCircle2 class="w-5 h-5 text-gold-400 shrink-0" />
              <span class="text-cream-50">Halaqah Tanya-Jawab Live Asatidz Madinah & Al-Azhar</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-900/90 border border-gold-400/40 flex items-center gap-3 shadow-sm">
              <CheckCircle2 class="w-5 h-5 text-gold-400 shrink-0" />
              <span class="text-cream-50">Ujian Kelulusan & Ijazah Sanad Bersambung</span>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-emerald-900/95 border border-gold-400/40 text-xs text-cream-100 space-y-1.5 shadow-sm">
            <p class="font-arabic text-base text-gold-300 text-right leading-loose">مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ</p>
            <p class="text-xs text-cream-200 italic text-right font-light">"Barangsiapa menempuh jalan untuk menuntut ilmu, Allah mudahkan baginya jalan menuju Surga." (HR. Muslim)</p>
          </div>
        </div>

        <!-- Right Column: Login Card -->
        <div class="lg:col-span-7 bg-cream-50 p-7 sm:p-10 rounded-3xl border border-cream-300 shadow-xl space-y-6">
          
          <div class="space-y-1.5">
            <h3 class="font-display text-2xl font-bold text-emerald-950">
              Masuk ke Akun Santri
            </h3>
            <p class="text-xs sm:text-sm text-charcoal-600">
              Masukkan alamat email atau Nomor Induk Santri (NIS) yang terdaftar.
            </p>
          </div>

          <!-- Quick 1-Click Demo Fill -->
          <div class="p-3.5 rounded-2xl bg-cream-200/70 border border-gold-500/30 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles class="w-3.5 h-3.5 text-gold-600" />
                Uji Coba Akun Demo (1-Klik):
              </span>
            </div>
            <div class="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                class="px-3 py-1.5 rounded-xl bg-emerald-900 text-cream-50 hover:bg-emerald-850 font-medium transition-all cursor-pointer shadow-sm active:scale-95"
                @click="fillDemoAccount('ihsan')"
              >
                Santri 1: Muhammad Ihsan (Fiqih & Nahwu)
              </button>
              <button
                type="button"
                class="px-3 py-1.5 rounded-xl bg-navy-900 text-cream-50 hover:bg-navy-800 font-medium transition-all cursor-pointer shadow-sm active:scale-95"
                @click="fillDemoAccount('nurul')"
              >
                Santri 2: Ustdzh Nurul (Tafsir & Hadits)
              </button>
            </div>
          </div>

          <!-- Error Alert -->
          <div
            v-if="errorMessage"
            class="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium"
          >
            {{ errorMessage }}
          </div>

          <!-- Form Login -->
          <form class="space-y-4" @submit.prevent="handleLogin">
            
            <!-- Email / NIS Input -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Email Terdaftar / Nomor Induk Santri (NIS) *
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                  <Mail class="w-4 h-4 text-emerald-900" />
                </div>
                <input
                  v-model="identifier"
                  type="text"
                  required
                  placeholder="Contoh: santri@darulhikmah.id atau DHA-2026-9812"
                  class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>
            </div>

            <!-- Password Input -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Kata Sandi *
                </label>
                <a
                  href="https://wa.me/6281299008822?text=Assalamu'alaikum%20Admin,%20saya%20lupa%20kata%20sandi%20akun%20santri%20saya"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs text-gold-700 hover:text-emerald-900 font-semibold"
                >
                  Lupa Sandi?
                </a>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                  <Lock class="w-4 h-4 text-emerald-900" />
                </div>
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  placeholder="Masukkan kata sandi Anda"
                  class="w-full pl-10 pr-11 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-charcoal-500 hover:text-emerald-900 cursor-pointer"
                  @click="showPassword = !showPassword"
                >
                  <EyeOff v-if="showPassword" class="w-4 h-4" />
                  <Eye v-else class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2 text-xs text-charcoal-700 cursor-pointer">
                <input
                  v-model="rememberMe"
                  type="checkbox"
                  class="rounded text-emerald-900 focus:ring-emerald-800 w-4 h-4 cursor-pointer"
                />
                <span>Ingat saya di perangkat ini</span>
              </label>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 font-bold text-sm shadow-md shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <span v-if="!isLoading">Masuk ke Ruang Belajar</span>
              <span v-else>Memverifikasi Kredensial...</span>
              <ArrowRight class="w-4 h-4 text-gold-400" />
            </button>

          </form>

          <!-- Alternative Registration / Scholarship Link -->
          <div class="pt-4 border-t border-cream-300 text-center text-xs text-charcoal-600 space-y-2">
            <p>
              Belum terdaftar sebagai santri?
              <NuxtLink to="/register" class="text-emerald-900 font-bold underline hover:text-gold-700 ml-1">
                Daftar Santri Baru
              </NuxtLink>
              atau
              <NuxtLink to="/register" class="text-emerald-900 font-bold underline hover:text-gold-700 ml-1">
                Ajukan Beasiswa 100%
              </NuxtLink>
            </p>
          </div>

        </div>

      </div>
    </main>

    <!-- ========================================================= -->
    <!-- CASE 2: DASHBOARD RUANG BELAJAR SANTRI (SETELAH LOGIN)    -->
    <!-- ========================================================= -->
    <main v-else class="flex-1 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      
      <!-- Welcome Header Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 border border-gold-500/40 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden bg-arabesque-dark">
        <div class="space-y-2 z-10">
          <div class="flex items-center gap-2">
            <span class="px-3 py-0.5 rounded-full bg-gold-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              Status: Santri Aktif Bersanad
            </span>
            <span class="text-xs text-cream-300 font-mono">NIS: {{ loggedInUser.nis }}</span>
          </div>

          <h2 class="font-display text-2xl sm:text-3xl font-bold text-cream-50">
            Ahlan wa Sahlan, {{ loggedInUser.name }}!
          </h2>

          <p class="text-xs sm:text-sm text-cream-200/90 font-light">
            Selamat melanjutkan thalabul 'ilmi. Anda memiliki <strong>{{ loggedInUser.enrolledCourses.length }} Kursus Aktif</strong> yang sedang berlangsung.
          </p>
        </div>

        <div class="flex items-center gap-3 z-10">
          <button
            type="button"
            class="px-4 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-cream-100 text-xs font-semibold border border-gold-500/30 flex items-center gap-2 transition-all cursor-pointer"
            @click="handleLogout"
          >
            <LogOut class="w-4 h-4 text-gold-400" />
            <span>Keluar Akun</span>
          </button>
        </div>
      </div>

      <!-- Enrolled Courses Grid -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
            <BookOpen class="w-5 h-5 text-gold-600" />
            <span>Kursus & Halaqah Anda yang Sedang Berjalan:</span>
          </h3>
          <NuxtLink to="/#katalog" class="text-xs font-bold text-emerald-900 hover:underline">
            + Tambah Kursus Lainnya
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="course in loggedInUser.enrolledCourses"
            :key="course.id"
            class="p-6 rounded-2xl bg-cream-50 border border-cream-300 shadow-md space-y-4 hover:border-gold-500/50 transition-all flex flex-col justify-between"
          >
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs text-charcoal-500">
                <span class="font-medium text-emerald-900 font-serif italic">{{ course.instructor }}</span>
                <span class="px-2 py-0.5 rounded bg-gold-500/10 text-gold-800 font-semibold text-[10px] uppercase">
                  Ujian Sanad Aktif
                </span>
              </div>

              <h4 class="font-display text-lg sm:text-xl font-extrabold text-emerald-950 leading-snug">
                {{ course.title }}
              </h4>

              <!-- Progress Bar -->
              <div class="space-y-1.5 pt-2">
                <div class="flex items-center justify-between text-xs font-semibold">
                  <span class="text-charcoal-700">Kemajuan Belajar:</span>
                  <span class="text-emerald-950 font-bold">{{ course.progress }}% ({{ course.completedLessons }}/{{ course.totalLessons }} Pelajaran)</span>
                </div>
                <div class="w-full h-2.5 rounded-full bg-cream-200 overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-emerald-800 to-gold-500 rounded-full transition-all duration-500"
                    :style="{ width: `${course.progress}%` }"
                  />
                </div>
              </div>

              <!-- Next Lesson Box -->
              <div class="p-3 rounded-xl bg-cream-100 border border-cream-200 text-xs text-charcoal-800 space-y-1 mt-3">
                <span class="text-[10px] font-bold uppercase text-gold-800 tracking-wider block">Materi Selanjutnya:</span>
                <p class="font-medium text-emerald-950">{{ course.nextLesson }}</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-3 border-t border-cream-200 flex items-center justify-between gap-3">
              <button
                type="button"
                class="px-4 py-2 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                @click="openPdfModal(course.id)"
              >
                <FileText class="w-3.5 h-3.5 text-emerald-900" />
                <span>Modul Kitab PDF</span>
              </button>

              <button
                type="button"
                class="px-5 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                @click="openPdfModal(course.id)"
              >
                <Play class="w-3.5 h-3.5 text-gold-400 fill-current" />
                <span>Lanjutkan Belajar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Schedule of Live Halaqah -->
      <div class="p-6 rounded-3xl bg-cream-50 border border-cream-300 shadow-md space-y-4">
        <h3 class="font-display text-lg font-bold text-emerald-950 flex items-center gap-2">
          <Video class="w-5 h-5 text-gold-600" />
          <span>Jadwal Halaqah Live & Tanya Jawab Pekan Ini:</span>
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-cream-100 border border-cream-300 space-y-2">
            <span class="px-2 py-0.5 rounded bg-emerald-900 text-cream-50 font-bold text-[10px] uppercase">
              Sabtu, 20.00 WIB
            </span>
            <h5 class="font-bold text-emerald-950 text-sm">Halaqah Fiqih Muqaran Live Zoom</h5>
            <p class="text-charcoal-600">Kajian bedah dalil ikhtilaf shalat bersama Dr. KH. Ahmad Fauzi, MA.</p>
            <button
              type="button"
              class="w-full py-2 rounded-lg bg-emerald-900/10 hover:bg-emerald-900/20 text-emerald-900 font-bold transition-colors cursor-pointer text-center"
              @click="handleAction('Membuka Ruang Zoom Halaqah...')"
            >
              Masuk Ruang Zoom
            </button>
          </div>

          <div class="p-4 rounded-xl bg-cream-100 border border-cream-300 space-y-2">
            <span class="px-2 py-0.5 rounded bg-navy-900 text-cream-50 font-bold text-[10px] uppercase">
              Ahad, 09.00 WIB
            </span>
            <h5 class="font-bold text-emerald-950 text-sm">Praktik I'rab Matan Al-Jurumiyyah</h5>
            <p class="text-charcoal-600">Simulasi baca kitab gundul interaktif bersama Ust. Muhammad Wildan, Lc.</p>
            <button
              type="button"
              class="w-full py-2 rounded-lg bg-emerald-900/10 hover:bg-emerald-900/20 text-emerald-900 font-bold transition-colors cursor-pointer text-center"
              @click="handleAction('Membuka Ruang Zoom Halaqah...')"
            >
              Masuk Ruang Zoom
            </button>
          </div>

          <div class="p-4 rounded-xl bg-cream-100 border border-cream-300 space-y-2 flex flex-col justify-between">
            <div class="space-y-1">
              <span class="px-2 py-0.5 rounded bg-gold-500 text-emerald-950 font-bold text-[10px] uppercase">
                Konsultasi Ilmiah
              </span>
              <h5 class="font-bold text-emerald-950 text-sm">Grup Diskusi WhatsApp Santri</h5>
              <p class="text-charcoal-600">Ajukan pertanyaan seputar materi pelajaran langsung kepada musyrif pendamping.</p>
            </div>
            <a
              href="https://wa.me/6281299008822?text=Assalamu'alaikum%20Musyrif,%20saya%20santri%20aktif%20ingin%20bergabung%20grup%20diskusi"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full py-2 rounded-lg bg-emerald-900 text-cream-50 font-bold transition-colors text-center inline-block"
            >
              Gabung Grup Diskusi
            </a>
          </div>
        </div>
      </div>

    </main>

    <!-- Modal Modul Kitab PDF & Silabus -->
    <KitabPdfModal
      :is-open="isPdfModalOpen"
      :course="activePdfCourse"
      @close="isPdfModalOpen = false"
    />

  </div>
</template>
