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
    class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 text-xs sm:text-sm py-2 sm:py-2.5 px-3 sm:px-4 border-b border-gold-400/40 shadow-sm"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
      <!-- Notification Content -->
      <div class="flex items-center gap-2 min-w-0 flex-1 justify-center sm:justify-start">
        <!-- Badge (always visible) -->
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold-400 text-emerald-950 font-bold text-[10px] sm:text-[11px] tracking-wide uppercase shadow-sm shrink-0">
          <Sparkles class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-950" />
          <span class="hidden xs:inline">Beasiswa</span> 100%
        </span>

        <!-- Text (truncate on xs, full on sm+) -->
        <p class="font-medium text-cream-50 text-xs sm:text-sm truncate hidden sm:block">
          Pendaftaran Program Beasiswa Penuntut Ilmu Dhuafa &amp; Penghafal Qur'an Angkatan VII Telah Dibuka.
        </p>
        <p class="font-medium text-cream-50 text-xs sm:hidden truncate">
          Beasiswa Angkatan VII Telah Dibuka.
        </p>

        <!-- CTA Link -->
        <NuxtLink
          to="/#harga"
          class="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200 font-bold underline underline-offset-4 cursor-pointer transition-colors shrink-0 text-xs sm:text-sm"
          @click="$emit('open-scholarship')"
        >
          <span class="hidden sm:inline">Ajukan Beasiswa</span>
          <span class="sm:hidden">Ajukan</span>
          <ArrowRight class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-300" />
        </NuxtLink>
      </div>

      <!-- Close Button -->
      <button
        type="button"
        class="text-cream-200 hover:text-cream-50 p-1 rounded-full hover:bg-emerald-800/60 transition-colors shrink-0 cursor-pointer min-w-[28px] min-h-[28px] flex items-center justify-center"
        aria-label="Tutup bar pengumuman"
        @click="isVisible = false"
      >
        <X class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>
    </div>
  </div>
</template>
