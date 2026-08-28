<script setup lang="ts">
import type { Instructor } from '~/data/instructorsData';
import { X, Award, Scroll, CheckCircle2, ShieldCheck } from 'lucide-vue-next';

interface Props {
  isOpen: boolean;
  instructor: Instructor | null;
}

defineProps<Props>();
defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && instructor"
        class="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="`Silsilah Sanad ${instructor.name}`"
      >
        <div class="fixed inset-0" @click="$emit('close')" />

        <div
          class="relative w-full max-w-2xl bg-cream-50 rounded-2xl shadow-2xl border border-gold-500/40 overflow-hidden z-10 my-8"
        >
          <!-- Header -->
          <div class="bg-gradient-to-r from-emerald-950 via-navy-950 to-emerald-950 text-cream-50 p-6 sm:p-7 relative border-b border-gold-500/30">
            <button
              type="button"
              class="absolute top-5 right-5 p-1.5 rounded-full bg-emerald-900/80 text-cream-300 hover:text-cream-50 hover:bg-emerald-800 transition-colors"
              aria-label="Tutup jendela sanad"
              @click="$emit('close')"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="flex items-center gap-4">
              <img
                :src="instructor.avatar"
                :alt="instructor.name"
                class="w-14 h-14 rounded-full object-cover border-2 border-gold-400 shrink-0 shadow-md"
              />
              <div class="space-y-1">
                <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-400 uppercase tracking-wide">
                  <ShieldCheck class="w-3.5 h-3.5" />
                  Silsilah Sanad Keilmuan Terverifikasi
                </span>
                <h3 class="font-display text-xl sm:text-2xl font-bold text-cream-50">
                  {{ instructor.name }}
                </h3>
                <p class="text-xs text-cream-200 font-light">{{ instructor.institution }}</p>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 sm:p-7 space-y-6 max-h-[60vh] overflow-y-auto">
            
            <div class="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-xs text-charcoal-800 flex items-start gap-2.5">
              <Scroll class="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
              <span>
                Seluruh ijazah keilmuan ditransmisikan melalui metode <strong>Sama' wa Qira'ah (Mendengar & Membaca Langsung)</strong> di hadapan para Masyayikh kibar di Al-Azhar, Makkah, Madinah, dan Tarim.
              </span>
            </div>

            <!-- Sanad Chains List -->
            <div class="space-y-4">
              <h4 class="font-display text-base font-bold text-emerald-950 flex items-center gap-2">
                <Award class="w-4 h-4 text-gold-600" />
                <span>Rantai Sanad Kitab-Kitab Turats Utama:</span>
              </h4>

              <div
                v-for="(chain, idx) in instructor.sanadChains"
                :key="idx"
                class="p-4 rounded-xl bg-cream-100 border border-cream-300 space-y-2.5"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                    {{ chain.discipline }}
                  </span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-900/10 text-emerald-900">
                    {{ chain.ijazahType }} • {{ chain.yearReceived }}
                  </span>
                </div>

                <h5 class="text-sm font-bold text-emerald-950">
                  {{ chain.bookName }}
                </h5>

                <p class="text-xs text-charcoal-700 leading-relaxed font-light">
                  {{ chain.chainSummary }}
                </p>

                <div class="pt-1.5 border-t border-cream-200 flex items-center justify-between text-[11px] text-charcoal-600">
                  <span>Puncak Transmisi Sanad:</span>
                  <span class="font-semibold text-emerald-900">{{ chain.highestAuthority }}</span>
                </div>
              </div>
            </div>

            <!-- Asatidz Quote -->
            <blockquote class="p-4 rounded-xl bg-emerald-950 text-cream-100 text-xs sm:text-sm font-serif italic border-l-4 border-gold-500 leading-relaxed">
              "{{ instructor.featuredQuote }}"
            </blockquote>

          </div>

          <!-- Footer -->
          <div class="bg-cream-100 p-4 border-t border-cream-300 text-right">
            <button
              type="button"
              class="px-5 py-2 rounded-lg bg-emerald-900 text-cream-50 hover:bg-emerald-850 text-xs font-medium cursor-pointer"
              @click="$emit('close')"
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
