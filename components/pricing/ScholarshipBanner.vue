<script setup lang="ts">
import { Sparkles, ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-vue-next';

defineEmits<{
  (e: 'apply-scholarship'): void;
}>();
</script>

<template>
  <div class="relative rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 p-8 sm:p-10 lg:p-12 border-2 border-gold-400/60 shadow-2xl overflow-hidden bg-arabesque-dark">
    <!-- Atmospheric Ambient glow -->
    <div class="absolute -right-20 -top-20 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
      
      <div class="lg:col-span-8 space-y-5 text-center lg:text-left">
        
        <!-- High Contrast Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400 text-emerald-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
          <Sparkles class="w-4 h-4 text-emerald-950" />
          <span>Program Beasiswa Penuntut Ilmu Dhuafa</span>
        </div>

        <!-- High Visibility Headline -->
        <h3 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-sm">
          Ilmu Syar'i Milik Bersama. Tidak Mampu Membayar? <span class="text-gold-300 font-serif italic drop-shadow">Kami Danai 100%!</span>
        </h3>

        <!-- Crystal Clear Body Description -->
        <p class="text-sm sm:text-base text-white leading-relaxed max-w-2xl font-normal p-4 rounded-2xl bg-emerald-950/80 border border-gold-400/40 shadow-inner">
          Melalui program Wakaf Pendidikan & Infaq Muhsinin, kami menyediakan <strong class="text-gold-300 font-bold underline decoration-gold-400/50 underline-offset-2">Beasiswa Penuh 100%</strong> bagi santri, asatidz di pelosok, yatim, dhuafa, dan penghafal Al-Qur'an untuk mengakses seluruh materi tanpa pungutan biaya.
        </p>

        <!-- High Contrast Trust Badges -->
        <div class="flex flex-wrap items-center gap-3 pt-2 justify-center lg:justify-start">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-900/90 border border-gold-400/40 text-cream-50 text-xs sm:text-sm font-medium shadow-sm">
            <ShieldCheck class="w-4 h-4 text-gold-400 shrink-0" />
            <span>Tanpa Biaya Tersembunyi</span>
          </div>

          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-900/90 border border-gold-400/40 text-cream-50 text-xs sm:text-sm font-medium shadow-sm">
            <HeartHandshake class="w-4 h-4 text-gold-400 shrink-0" />
            <span>Didanai Lembaga Wakaf Terpercaya</span>
          </div>
        </div>

      </div>

      <!-- Action Button -->
      <div class="lg:col-span-4 flex justify-center lg:justify-end">
        <button
          type="button"
          class="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:brightness-110 text-emerald-950 font-bold text-sm sm:text-base shadow-xl shadow-gold-500/30 hover:shadow-gold-glow transition-all flex items-center gap-2.5 cursor-pointer active:scale-95 border border-gold-300"
          @click="$emit('apply-scholarship')"
        >
          <span>Ajukan Beasiswa Sekarang</span>
          <ArrowRight class="w-4 h-4 text-emerald-950" />
        </button>
      </div>

    </div>
  </div>
</template>
