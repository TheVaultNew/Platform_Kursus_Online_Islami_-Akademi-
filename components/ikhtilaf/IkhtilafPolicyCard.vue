<script setup lang="ts">
import { Scale, CheckCircle2, HeartHandshake, ShieldCheck, BookOpen } from 'lucide-vue-next';

const principles = [
  {
    title: 'Penghormatan Terhadap 4 Mazhab Mu\'tabar',
    desc: 'Mengakui keabsahan ijtihad Mazhab Hanafi, Maliki, Syafi\'i, dan Hanbali sebagai warisan ilmiah otentik yang bersandar pada Al-Qur\'an dan As-Sunnah.'
  },
  {
    title: 'Adab Berbeda Pendapat (Adabul Ikhtilaf)',
    desc: 'Menghindari fanatisme buta (ta\'ashshub madzhabi) dan celaan antarsesama penuntut ilmu dalam urusan furu\'iyyah khilafiyyah.'
  },
  {
    title: 'Eksplorasi Nalar Dalil Secara Objektif',
    desc: 'Memaparkan argumen dalil dan kaidah ushul masing-masing imam secara proporsional agar penuntut ilmu memahami latar belakang lahirnya hukum.'
  },
  {
    title: 'Prinsip Wasathiyah (Moderat)',
    desc: 'Menjaga persatuan dan ukhuwah Islamiyah di atas keberagaman praktik ibadah masyarakat dengan sikap bijak dan saling menghargai.'
  }
];
</script>

<template>
  <section class="py-16 bg-cream-50 border-b border-cream-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="bg-cream-100 rounded-3xl p-8 sm:p-10 border border-emerald-900/20 shadow-card space-y-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-5 space-y-3.5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-semibold uppercase tracking-wider border border-emerald-900/20">
              <Scale class="w-3.5 h-3.5 text-emerald-800" />
              <span>Kepatuhan Standar Kurikulum</span>
            </div>

            <h3 class="font-display text-2xl sm:text-3xl font-bold text-emerald-950 leading-tight">
              Piagam Adab Ikhtilaf & <span class="text-gold-600 italic">Wasathiyah Fiqih</span>
            </h3>

            <p class="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              Sesuai dengan pedoman etika keilmuan Islam, Darul Hikmah Academy memegang teguh prinsip keterbukaan ilmiah dan adab persaudaraan dalam setiap kajian fikih.
            </p>

            <blockquote class="p-4 rounded-xl bg-cream-200/70 border-l-4 border-gold-500 text-xs text-charcoal-800 italic">
              "Perbedaan para ulama adalah rahmat dan keluasan bagi umat manusia."
              <span class="block mt-1 font-semibold text-emerald-900 not-italic">— Atsar Salafus Shalih</span>
            </blockquote>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="(p, idx) in principles"
              :key="idx"
              class="p-4 rounded-2xl bg-cream-50 border border-cream-300 space-y-1.5 shadow-sm"
            >
              <div class="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 class="w-4 h-4 text-gold-600 shrink-0" />
                <span>{{ p.title }}</span>
              </div>
              <p class="text-xs text-charcoal-600 font-light leading-relaxed pl-6">
                {{ p.desc }}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
