<script setup lang="ts">
import { Video, Users, CheckCircle2, Award, BookOpen, MessageSquare, Sparkles, MonitorPlay } from 'lucide-vue-next';

const methodologyPillars = [
  {
    icon: Video,
    number: '01',
    title: 'Video Studio HD & Transkrip Matan',
    subtitle: 'Rekaman berkualitas studio dengan audio jernih dan transkrip teks Arab berharakat yang tersinkronisasi otomatis.',
    benefits: ['Bisa diakses 24/7 kapan saja', 'Kecepatan pemutaran 0.75x - 2.0x', 'Download audio kajian untuk offline']
  },
  {
    icon: Users,
    number: '02',
    title: 'Halaqah Live & Diskusi Bersama Asatidz',
    subtitle: 'Sesi tatap maya interaktif mingguan untuk bedah kasus fiqih kontemporer, koreksi bacaan, dan tanya jawab langsung.',
    benefits: ['Tanya jawab santri 1-on-1', 'Studi kasus masalah mu\'amalah aktual', 'Rekaman halaqah selalu tersedia']
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Kuis Evaluasi & Pendampingan Musyrif',
    subtitle: 'Uji pemahaman di akhir tiap bab dengan kuis formatif cerdas serta bimbingan musyrif pembina untuk tugas riset.',
    benefits: ['Umpan balik instan pembahasan', 'Musyrif standby konsultasi materi', 'Pelacakan progress belajar real-time']
  },
  {
    icon: Award,
    number: '04',
    title: 'Ujian Sanad & Ijazah Keilmuan Terverifikasi',
    subtitle: 'Bagi penuntut ilmu yang lulus ujian komprehensif berhak menerima Ijazah Sanad bersambung dengan verifikasi digital QR.',
    benefits: ['Transkrip nilai berstandar akademik', 'Sertifikat digital terenkripsi QR code', 'Bisa dicetak resmi dalam format piagam turats']
  }
];
</script>

<template>
  <section id="metode" class="py-20 lg:py-28 bg-emerald-950 text-cream-100 relative overflow-hidden bg-arabesque-dark border-b border-gold-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold">
          <MonitorPlay class="w-4 h-4" />
          <span>Pedagogi Pembelajaran Terpadu</span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tracking-tight">
          Metode Belajar <span class="gold-gradient-text italic">Komprehensif & Modern</span>
        </h2>

        <p class="text-sm sm:text-base text-cream-200/80 font-light leading-relaxed">
          Mengintegrasikan tradisi mulia talaqqi kitab turats dengan teknologi Learning Management System (LMS) mutakhir untuk menjamin pemahaman yang kokoh.
        </p>
      </div>

      <!-- 4 Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="pillar in methodologyPillars"
          :key="pillar.number"
          class="bg-emerald-900/40 border border-gold-500/20 rounded-2xl p-6 sm:p-7 space-y-5 hover:border-gold-500/50 hover:bg-emerald-900/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <component :is="pillar.icon" class="w-6 h-6" />
              </div>
              <span class="font-display text-2xl font-bold text-emerald-700/60 group-hover:text-gold-400/40 transition-colors">
                {{ pillar.number }}
              </span>
            </div>

            <h3 class="font-display text-lg sm:text-xl font-bold text-cream-50 leading-snug">
              {{ pillar.title }}
            </h3>

            <p class="text-xs sm:text-sm text-cream-200/80 font-light leading-relaxed">
              {{ pillar.subtitle }}
            </p>
          </div>

          <div class="pt-4 border-t border-emerald-800/80 space-y-2">
            <div
              v-for="(b, idx) in pillar.benefits"
              :key="idx"
              class="flex items-center gap-2 text-xs text-cream-300"
            >
              <CheckCircle2 class="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{{ b }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Learning Experience Preview Card -->
      <div class="bg-gradient-to-r from-navy-950 via-emerald-950 to-navy-950 rounded-3xl p-8 sm:p-10 border border-gold-500/30 shadow-2xl space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-6 space-y-4">
            <span class="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              Pengalaman Santri Digital
            </span>
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-cream-50">
              Kajian Kitab dengan Visualisasi Matan & Bagan Istinbath
            </h3>
            <p class="text-sm text-cream-200/80 leading-relaxed font-light">
              Setiap kajian dilengkapi dengan tampilan naskah asli kitab turats, bagan alur perbedaan pendapat 4 mazhab, serta ringkasan dalil yang memudahkan pemahaman penuntut ilmu pemula sekalipun.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-3.5 rounded-xl bg-emerald-900/60 border border-gold-500/20 text-xs text-cream-200">
                <span class="font-bold text-gold-400 block mb-1">Akses Fleksibel:</span>
                Tersedia di Web, Tablet, dan Mobile App.
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-900/60 border border-gold-500/20 text-xs text-cream-200">
                <span class="font-bold text-gold-400 block mb-1">Koreksi Bacaan:</span>
                Sesi setoran qira'ah kitab dengan musyrif.
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-charcoal-950">
              <!-- Mock Video Player Header -->
              <div class="bg-navy-900 px-4 py-2.5 flex items-center justify-between border-b border-navy-800 text-xs text-cream-300">
                <span class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  Halaqah Live: Bedah Fiqih Ibadah 4 Mazhab
                </span>
                <span class="text-gold-400 font-mono">1080p HD • 60 FPS</span>
              </div>

              <!-- Video Screen Placeholder Mock -->
              <div class="p-6 space-y-4 bg-gradient-to-b from-navy-950 to-charcoal-950 text-cream-100">
                <div class="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 space-y-2">
                  <p class="text-xs text-gold-400 font-semibold uppercase tracking-wider">Teks Matan Turats Terjemah:</p>
                  <p class="font-arabic text-sm sm:text-base text-right text-gold-300 leading-relaxed">
                    فَصْلٌ: فُرُوضُ الْوُضُوءِ سِتَّةٌ: الْأَوَّلُ: النِّيَّةُ، الثَّانِي: غَسْلُ الْوَجْهِ...
                  </p>
                  <p class="text-xs text-cream-200/90 italic">
                    "Pasal: Fardhu wudhu ada enam perkara: Pertama niat, kedua membasuh wajah..." (Safinatun Naja)
                  </p>
                </div>

                <div class="p-3 rounded-lg bg-navy-900/80 border border-navy-800 flex items-center justify-between text-xs text-cream-300">
                  <span>Asatidz: Dr. KH. Ahmad Fauzi, MA.</span>
                  <span class="text-gold-400 font-semibold">Aktif 412 Santri Menyimak</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
