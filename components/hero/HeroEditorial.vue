<script setup lang="ts">
import { Compass, BookOpen, Search, Sparkles, Award, Users, CheckCircle2, Play, ArrowRight } from 'lucide-vue-next';
import { ref } from 'vue';

defineEmits<{
  (e: 'search', query: string): void;
  (e: 'explore-paths'): void;
  (e: 'open-enrollment'): void;
}>();

const heroSearch = ref('');
const popularKeywords = ['Fiqih 4 Mazhab', 'Nahwu Al-Jurumiyyah', 'Musthalah Hadits', 'Balaghah', 'Ushul Fiqih'];
</script>

<template>
  <section class="relative bg-emerald-950 text-cream-100 pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-arabesque-dark border-b border-gold-500/20">
    <!-- Atmospheric Ambient Glows -->
    <div class="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Editorial Headline & Search -->
        <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-gold-500/40 text-gold-400 text-xs sm:text-sm font-medium shadow-sm">
            <span class="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>Akademi Pembelajaran Islam Klasik & Kontemporer</span>
          </div>

          <!-- Main Headline -->
          <h1 class="font-display text-2xl sm:text-4xl xl:text-6xl font-bold tracking-tight text-cream-50 leading-[1.15] text-balance">
            Menyambung <span class="gold-gradient-text italic font-serif">Sanad Keilmuan</span> Islam Secara Terstruktur.
          </h1>

          <!-- Subtitle -->
          <p class="text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Kuasai <span class="text-cream-50 font-medium">Fiqih 4 Mazhab dengan Adab Ikhtilaf</span>, Bahasa Arab, Ulumul Qur'an, dan Hadits melalui kurikulum berjenjang dan bimbingan Asatidz lulusan Al-Azhar & Madinah.
          </p>

          <!-- Search Bar & Popular Tags -->
          <div class="max-w-xl mx-auto lg:mx-0 space-y-3">
            <form
              class="relative flex items-center shadow-2xl rounded-xl overflow-hidden bg-cream-50/95 p-1.5 border border-gold-500/40 focus-within:ring-2 focus-within:ring-gold-500"
              @submit.prevent="$emit('search', heroSearch)"
            >
              <div class="pl-3 pr-2 text-charcoal-500">
                <Search class="w-5 h-5 text-emerald-900" />
              </div>
              <input
                v-model="heroSearch"
                type="text"
                placeholder="Cari materi: Fiqih Ibadah, Nahwu, Hadits, Tafsir..."
                class="w-full bg-transparent text-charcoal-900 placeholder:text-charcoal-500 text-sm sm:text-base focus:outline-none px-2 py-2"
                aria-label="Cari kursus atau materi kajian"
              />
              <button
                type="submit"
                class="bg-emerald-900 text-cream-50 hover:bg-emerald-850 px-5 py-2.5 rounded-lg text-sm font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <span>Cari</span>
                <ArrowRight class="w-4 h-4 text-gold-400" />
              </button>
            </form>

            <!-- Popular Quick Tags -->
            <div class="flex flex-wrap items-center gap-2 text-xs text-cream-300/80 justify-center lg:justify-start">
              <span class="font-medium text-gold-400">Pencarian Populer:</span>
              <button
                v-for="kw in popularKeywords"
                :key="kw"
                type="button"
                class="px-2.5 py-1 rounded bg-emerald-900/60 hover:bg-emerald-800 text-cream-200 border border-emerald-800 transition-colors"
                @click="heroSearch = kw; $emit('search', kw)"
              >
                {{ kw }}
              </button>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col xs:flex-row sm:flex-row items-stretch xs:items-center justify-center lg:justify-start gap-3 pt-2">
            <a
              href="#learning-path"
              class="w-full xs:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-emerald-950 font-semibold shadow-lg shadow-gold-500/25 hover:shadow-gold-glow hover:brightness-105 transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm sm:text-base"
              @click="$emit('explore-paths')"
            >
              <Compass class="w-5 h-5 text-emerald-950 shrink-0" />
              <span>Jelajahi Visual Learning Path</span>
            </a>

            <a
              href="#katalog"
              class="w-full xs:w-auto px-6 py-3.5 rounded-xl border border-cream-200/30 text-cream-100 hover:bg-cream-100/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
            >
              <BookOpen class="w-5 h-5 text-gold-400 shrink-0" />
              <span>Lihat Katalog Kursus</span>
            </a>
          </div>

        </div>

        <!-- Right Column: Visual Editorial Showcase Card (hidden on mobile, visible lg+) -->
        <div class="hidden lg:block lg:col-span-5">
          <div class="relative max-w-md mx-auto lg:max-w-none">
            
            <!-- Glow background border -->
            <div class="absolute -inset-1.5 bg-gradient-to-r from-gold-500/40 via-emerald-600/30 to-gold-500/20 rounded-2xl blur-lg opacity-75" />

            <!-- Main Feature Card -->
            <div class="relative bg-gradient-to-b from-navy-950 via-emerald-950 to-emerald-950 border border-gold-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl text-cream-100 space-y-5 animate-float hover-lift">
              
              <!-- Card Header -->
              <div class="flex items-center justify-between border-b border-emerald-850/80 pb-4">
                <div class="flex items-center gap-2.5">
                  <span class="px-2.5 py-1 rounded bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                    Jalur Unggulan 2026
                  </span>
                </div>
                <div class="flex items-center gap-1 text-gold-400 text-xs font-medium">
                  <Award class="w-4 h-4" />
                  <span>Sanad Ijazah Resmi</span>
                </div>
              </div>

              <!-- Course Feature Spotlight -->
              <div class="space-y-3">
                <p class="text-xs text-cream-300 font-arabic tracking-wide text-right">الفقه المقارن وأدب الخلاف بين الأئمة الأربعة</p>
                <h3 class="font-display text-xl sm:text-2xl font-bold text-cream-50 leading-snug">
                  Fiqih Ibadah Komparatif 4 Mazhab & Kaidah Adab Ikhtilaf
                </h3>
                <p class="text-xs sm:text-sm text-cream-200/80 line-clamp-2 font-light">
                  Kajian objektif membedah dalil Hanafi, Maliki, Syafi'i, dan Hanbali dari kitab Bidayatul Mujtahid dengan bimbingan Doktor Al-Azhar.
                </p>
              </div>

              <!-- Step Roadmap Mini-Visualizer Preview -->
              <div class="bg-emerald-900/60 rounded-xl p-4 border border-gold-500/20 space-y-3">
                <div class="flex items-center justify-between text-xs text-gold-400 font-semibold">
                  <span>Alur Jenjang 4 Tingkat:</span>
                  <span>36 Pekan • 120 Jam</span>
                </div>

                <div class="grid grid-cols-4 gap-2 text-center text-[11px]">
                  <div class="p-2 rounded bg-gold-500/20 border border-gold-500/40 text-gold-300">
                    <span class="block font-bold text-xs text-gold-400">Lv. 1</span>
                    <span>Safinah</span>
                  </div>
                  <div class="p-2 rounded bg-emerald-800/80 border border-emerald-700 text-cream-200">
                    <span class="block font-bold text-xs text-gold-400">Lv. 2</span>
                    <span>Waraqat</span>
                  </div>
                  <div class="p-2 rounded bg-emerald-800/80 border border-emerald-700 text-cream-200">
                    <span class="block font-bold text-xs text-gold-400">Lv. 3</span>
                    <span>Bidayah</span>
                  </div>
                  <div class="p-2 rounded bg-emerald-800/80 border border-emerald-700 text-cream-200">
                    <span class="block font-bold text-xs text-gold-400">Lv. 4</span>
                    <span>Qawaid</span>
                  </div>
                </div>
              </div>

              <!-- Instructor Bio in Card -->
              <div class="flex items-center justify-between pt-1">
                <div class="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Dr. KH. Ahmad Fauzi"
                    class="w-10 h-10 rounded-full border-2 border-gold-500/60 object-cover"
                  />
                  <div>
                    <h4 class="text-sm font-semibold text-cream-100">Dr. KH. Ahmad Fauzi, MA.</h4>
                    <p class="text-[11px] text-cream-300">Al-Azhar University Cairo</p>
                  </div>
                </div>

                <button
                  type="button"
                  class="p-2.5 rounded-full bg-gold-500 text-emerald-950 hover:scale-110 transition-transform shadow-lg cursor-pointer"
                  title="Lihat Pratinjau Materi"
                  @click="$emit('explore-paths')"
                >
                  <Play class="w-4 h-4 fill-emerald-950" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      <!-- Key Metrics Stats Bar -->
      <div class="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-emerald-850/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        <div class="space-y-1 text-center">
          <p class="font-display text-2xl sm:text-4xl font-bold text-gold-400">12.500+</p>
          <p class="text-xs sm:text-sm text-cream-200/80 font-light">Penuntut Ilmu &amp; Santri Aktif</p>
        </div>

        <div class="space-y-1 text-center">
          <p class="font-display text-2xl sm:text-4xl font-bold text-gold-400">45+</p>
          <p class="text-xs sm:text-sm text-cream-200/80 font-light">Asatidz &amp; Masyayikh Bersanad</p>
        </div>

        <div class="space-y-1 text-center">
          <p class="font-display text-2xl sm:text-4xl font-bold text-gold-400">180+</p>
          <p class="text-xs sm:text-sm text-cream-200/80 font-light">Modul Kajian &amp; Kitab Turats</p>
        </div>

        <div class="space-y-1 text-center">
          <p class="font-display text-2xl sm:text-4xl font-bold text-gold-400">98%</p>
          <p class="text-xs sm:text-sm text-cream-200/80 font-light">Tingkat Kepuasan &amp; Kelulusan</p>
        </div>
      </div>

    </div>
  </section>
</template>
