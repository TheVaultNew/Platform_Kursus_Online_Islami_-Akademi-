<script setup lang="ts">
import { ref } from 'vue';
import {
  Award,
  BookOpen,
  Sparkles,
  CheckCircle2,
  FileText,
  GraduationCap,
  HeartHandshake,
  Globe,
  ExternalLink,
  ChevronRight
} from 'lucide-vue-next';

interface ShowcaseItem {
  id: string;
  category: 'tahqiq' | 'sanad' | 'risalah' | 'dakwah';
  categoryLabel: string;
  title: string;
  author: string;
  role: string;
  avatar: string;
  batch: string;
  description: string;
  badge: string;
  tags: string[];
}

const activeCategory = ref<'all' | 'tahqiq' | 'sanad' | 'risalah' | 'dakwah'>('all');

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'karya-1',
    category: 'tahqiq',
    categoryLabel: 'Tahqiq & Syarah Naskah',
    title: 'Tahqiq & Catatan Komparatif Matan Al-Ghayah wat Taqrib',
    author: 'Muhammad Ihsan, S.T.',
    role: 'Santri Fiqih Muqaran • Alumni ITB',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    batch: 'Angkatan I (2025)',
    description: 'Menyusun anotasi dalil hadits berharakat dan studi perbandingan ikhtilaf 4 mazhab pada bab Shalat & Zakat yang telah diuji oleh Dr. KH. Ahmad Fauzi, MA.',
    badge: 'Karya Terbaik Santri',
    tags: ['Fiqih Syafi\'i', 'Tahqiq Matan', 'Studi Ikhtilaf']
  },
  {
    id: 'karya-2',
    category: 'sanad',
    categoryLabel: 'Kelulusan Ijazah Sanad',
    title: 'Pengambilan Ijazah Sanad Matan Al-Jurumiyyah & Al-Baiquniyyah',
    author: 'Ustadzah Nurul Hidayah, S.Ag.',
    role: 'Pengajar Pesantren Putri • Yogyakarta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    batch: 'Angkatan II (2025)',
    description: 'Lulus ujian setoran hafalan matan (*tasmi\' mutun*) 100% mutqin dengan silsilah sanad bersambung ke Ibnu Ajurrum & Al-Hafidz Al-Baiquni.',
    badge: 'Ijazah Sanad Mumtaz',
    tags: ['Kaidah Nahwu', 'Musthalah Hadits', 'Talaqqi Bersanad']
  },
  {
    id: 'karya-3',
    category: 'risalah',
    categoryLabel: 'Risalah Fiqih Kontemporer',
    title: 'Panduan Akad Syirkah & E-Commerce Syariah untuk UMKM',
    author: 'Fajar Ramadhan, S.E.',
    role: 'Praktisi Bisnis & Santri Muamalah',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    batch: 'Angkatan I (2025)',
    description: 'Mengkonversi kaidah klasik Bidayatul Mujtahid karya Ibnu Rusyd ke dalam model akad bisnis digital modern, crowdfunding, dan bagi hasil syariah.',
    badge: 'Publikasi Jurnal Santri',
    tags: ['Fiqih Muamalah', 'Ekonomi Syariah', 'Fintech Halal']
  },
  {
    id: 'karya-4',
    category: 'dakwah',
    categoryLabel: 'Kiprah Dakwah Pelosok',
    title: 'Pembinaan Majelis Ta\'lim & Rintisan Rumah Qur\'an Pelosok',
    author: 'Ust. Abdul Malik',
    role: 'Dai Pedalaman • Sorong, Papua Barat',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    batch: 'Penerima Beasiswa Dhuafa 100%',
    description: 'Memanfaatkan silabus digital Darul Hikmah Academy untuk mengajar 60+ santri mualaf dan anak-anak pedalaman dalam membaca kitab gundul dasar.',
    badge: 'Apresiasi Khidmah Umat',
    tags: ['Beasiswa Wakaf', 'Dakwah Pedalaman', 'Bahasa Arab Dasar']
  }
];

const filteredShowcase = computed(() => {
  if (activeCategory.value === 'all') return showcaseItems;
  return showcaseItems.filter(item => item.category === activeCategory.value);
});
</script>

<template>
  <section id="prestasi-santri" class="py-16 sm:py-24 bg-cream-100 relative overflow-hidden border-t border-cream-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider">
          <Award class="w-3.5 h-3.5 text-gold-600" />
          <span>Etalase Ilmiah Santri</span>
        </div>

        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 leading-tight">
          Karya & Prestasi <span class="text-gold-600 font-serif italic">Santri Akademi</span>
        </h2>

        <p class="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
          Bukti nyata integrasi ilmu turats dengan amal nyata. Santri kami tidak sekadar menonton video, namun menghasilkan karya naskah tahqiq, kelulusan sanad muttashil, dan kiprah dakwah di tengah umat.
        </p>
      </div>

      <!-- Quick Metrics Strip -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div class="p-4 rounded-2xl bg-cream-50 border border-cream-300 text-center shadow-sm space-y-1">
          <p class="font-display text-2xl sm:text-3xl font-extrabold text-emerald-950">1.240+</p>
          <p class="text-[11px] sm:text-xs text-charcoal-600 font-medium">Santri Lulus Bersanad</p>
        </div>

        <div class="p-4 rounded-2xl bg-cream-50 border border-cream-300 text-center shadow-sm space-y-1">
          <p class="font-display text-2xl sm:text-3xl font-extrabold text-gold-600">380+</p>
          <p class="text-[11px] sm:text-xs text-charcoal-600 font-medium">Karya Naskah & Risalah</p>
        </div>

        <div class="p-4 rounded-2xl bg-cream-50 border border-cream-300 text-center shadow-sm space-y-1">
          <p class="font-display text-2xl sm:text-3xl font-extrabold text-emerald-950">100%</p>
          <p class="text-[11px] sm:text-xs text-charcoal-600 font-medium">Ujian Talaqqi Langsung</p>
        </div>

        <div class="p-4 rounded-2xl bg-cream-50 border border-cream-300 text-center shadow-sm space-y-1">
          <p class="font-display text-2xl sm:text-3xl font-extrabold text-gold-600">42 Kota</p>
          <p class="text-[11px] sm:text-xs text-charcoal-600 font-medium">Sebaran Santri & Alumni</p>
        </div>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          class="px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          :class="activeCategory === 'all' ? 'bg-emerald-900 text-cream-50 shadow-md font-bold' : 'bg-cream-50 text-charcoal-700 hover:bg-cream-200 border border-cream-300'"
          @click="activeCategory = 'all'"
        >
          Semua Karya & Prestasi
        </button>

        <button
          type="button"
          class="px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          :class="activeCategory === 'tahqiq' ? 'bg-emerald-900 text-cream-50 shadow-md font-bold' : 'bg-cream-50 text-charcoal-700 hover:bg-cream-200 border border-cream-300'"
          @click="activeCategory = 'tahqiq'"
        >
          Tahqiq & Syarah Naskah
        </button>

        <button
          type="button"
          class="px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          :class="activeCategory === 'sanad' ? 'bg-emerald-900 text-cream-50 shadow-md font-bold' : 'bg-cream-50 text-charcoal-700 hover:bg-cream-200 border border-cream-300'"
          @click="activeCategory = 'sanad'"
        >
          Ijazah Sanad Muttashil
        </button>

        <button
          type="button"
          class="px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          :class="activeCategory === 'risalah' ? 'bg-emerald-900 text-cream-50 shadow-md font-bold' : 'bg-cream-50 text-charcoal-700 hover:bg-cream-200 border border-cream-300'"
          @click="activeCategory = 'risalah'"
        >
          Risalah Fiqih Muamalah
        </button>

        <button
          type="button"
          class="px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          :class="activeCategory === 'dakwah' ? 'bg-emerald-900 text-cream-50 shadow-md font-bold' : 'bg-cream-50 text-charcoal-700 hover:bg-cream-200 border border-cream-300'"
          @click="activeCategory = 'dakwah'"
        >
          Kiprah Beasiswa Dakwah
        </button>
      </div>

      <!-- Showcase Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="item in filteredShowcase"
          :key="item.id"
          class="p-6 sm:p-7 rounded-3xl bg-cream-50 border border-cream-300 shadow-md hover:shadow-xl hover:border-gold-500/50 transition-all flex flex-col justify-between space-y-5 group"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-emerald-900/10 text-emerald-950 font-bold text-[10px] uppercase tracking-wider">
                {{ item.categoryLabel }}
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-gold-400 text-emerald-950 font-bold text-[10px] uppercase shadow-sm">
                {{ item.badge }}
              </span>
            </div>

            <h3 class="font-display text-lg sm:text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors leading-snug">
              {{ item.title }}
            </h3>

            <p class="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
              {{ item.description }}
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2 py-0.5 rounded-md bg-cream-200 text-charcoal-700 text-[10px] font-medium"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Author Info Card -->
          <div class="pt-4 border-t border-cream-200 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <img
                :src="item.avatar"
                :alt="item.author"
                class="w-10 h-10 rounded-full object-cover border-2 border-gold-400 shrink-0 shadow-sm"
              />
              <div class="space-y-0.5">
                <p class="text-xs font-bold text-emerald-950">{{ item.author }}</p>
                <p class="text-[11px] text-charcoal-500">{{ item.role }} • {{ item.batch }}</p>
              </div>
            </div>

            <div class="w-8 h-8 rounded-full bg-cream-200 group-hover:bg-emerald-900 group-hover:text-gold-400 text-charcoal-700 flex items-center justify-center transition-colors">
              <Sparkles class="w-4 h-4" />
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom Registration CTA from Showcase -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-gold-400/40">
        <div class="space-y-1.5 text-center sm:text-left">
          <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 text-[10px] font-bold uppercase tracking-wider shadow">
            Mari Menjadi Bagian Penuntut Ilmu
          </span>
          <h4 class="font-display text-lg sm:text-xl font-bold text-cream-50">
            Ingin Mengkaji Kitab Turats & Meraih Ijazah Sanad Ilmiah?
          </h4>
          <p class="text-xs sm:text-sm text-cream-200/90 font-light">
            Daftar sekarang dan mulailah talaqqi terstruktur bersama asatidz lulusan Madinah, Al-Azhar, dan Ma'had Muktamad.
          </p>
        </div>

        <NuxtLink
          to="/register"
          class="px-7 py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-emerald-950 font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-2"
        >
          <span>Daftar Santri Sekarang</span>
          <ChevronRight class="w-4 h-4" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
