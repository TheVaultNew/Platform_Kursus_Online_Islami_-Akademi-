<script setup lang="ts">
import { Sparkles, ArrowRight, X } from 'lucide-vue-next';
import { ref } from 'vue';

const isVisible = ref(true);
defineEmits<{
  (e: 'open-scholarship'): void;
}>();
</script>

<template>
  <div
    v-if="isVisible"
    class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 text-xs sm:text-sm py-2.5 px-4 border-b border-gold-400/40 shadow-sm"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-3">
      <div class="flex items-center gap-2.5 mx-auto sm:mx-0 flex-wrap sm:flex-nowrap justify-center">
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-400 text-emerald-950 font-bold text-[11px] tracking-wide uppercase shadow-sm">
          <Sparkles class="w-3.5 h-3.5 text-emerald-950" />
          Beasiswa 100%
        </span>
        <p class="font-medium text-cream-50 text-xs sm:text-sm">
          Pendaftaran Program Beasiswa Penuntut Ilmu Dhuafa & Penghafal Qur'an Angkatan VII Telah Dibuka.
        </p>
        <NuxtLink
          to="/#harga"
          class="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200 font-bold underline underline-offset-4 ml-1 cursor-pointer transition-colors"
          @click="$emit('open-scholarship')"
        >
          <span>Ajukan Beasiswa</span>
          <ArrowRight class="w-3.5 h-3.5 text-gold-300" />
        </NuxtLink>
      </div>

      <button
        type="button"
        class="text-cream-200 hover:text-cream-50 p-1 rounded-full hover:bg-emerald-800/60 transition-colors shrink-0 cursor-pointer"
        aria-label="Tutup bar pengumuman"
        @click="isVisible = false"
      >
        <X class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
