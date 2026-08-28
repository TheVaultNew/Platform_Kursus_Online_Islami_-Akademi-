<script setup lang="ts">
import type { RoadmapNode } from '~/data/learningPathsData';
import { X, BookOpen, CheckCircle2, Clock, Award, ShieldAlert, ArrowRight, Sparkles, Scroll } from 'lucide-vue-next';

interface Props {
  isOpen: boolean;
  node: RoadmapNode | null;
}

defineProps<Props>();
defineEmits<{
  (e: 'close'): void;
  (e: 'enroll-node', node: RoadmapNode): void;
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
        v-if="isOpen && node"
        class="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 lg:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="`Rincian Kurikulum: ${node.title}`"
      >
        <!-- Modal Backdrop Click -->
        <div class="fixed inset-0" @click="$emit('close')" />

        <!-- Modal Content Container -->
        <div
          class="relative w-full max-w-2xl bg-cream-50 rounded-3xl shadow-2xl border border-gold-500/40 overflow-hidden z-10 my-4 max-h-[90vh] flex flex-col"
        >
          <!-- Header Banner -->
          <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 p-5 sm:p-7 relative border-b border-gold-500/30 shrink-0">
            <button
              type="button"
              class="absolute top-4 right-4 p-2 rounded-full bg-emerald-900/80 text-cream-300 hover:text-cream-50 hover:bg-emerald-800 transition-colors cursor-pointer"
              aria-label="Tutup jendela rincian materi"
              @click="$emit('close')"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="space-y-2 pr-8">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
                  {{ node.levelLabel }}
                </span>
                <span v-if="node.hasSanadExam" class="inline-flex items-center gap-1 text-xs text-gold-300 font-semibold bg-emerald-900/60 px-2 py-0.5 rounded-full border border-gold-500/30">
                  <Award class="w-3.5 h-3.5 text-gold-400" />
                  Ujian Bersanad
                </span>
              </div>

              <p class="text-xs text-cream-300 font-arabic text-right">{{ node.arabicTitle }}</p>

              <h3 class="font-display text-xl sm:text-2xl font-bold text-cream-50 leading-snug">
                {{ node.title }}
              </h3>

              <p class="text-xs sm:text-sm text-cream-200/90 font-light">
                {{ node.subtitle }}
              </p>
            </div>

            <!-- Quick Specs Pill -->
            <div class="mt-4 pt-3 border-t border-emerald-800/80 flex flex-wrap items-center gap-4 text-xs text-cream-200">
              <div class="flex items-center gap-1.5">
                <Clock class="w-4 h-4 text-gold-400" />
                <span>{{ node.durationWeeks }} Pekan (±{{ node.estimatedHours }} Jam Belajar)</span>
              </div>
              <div class="flex items-center gap-1.5">
                <BookOpen class="w-4 h-4 text-gold-400" />
                <span>Rujukan: <strong>{{ node.turatsBook }}</strong></span>
              </div>
            </div>
          </div>

          <!-- Body Content (Scrollable) -->
          <div class="p-5 sm:p-7 space-y-6 overflow-y-auto flex-1">
            
            <!-- Adab Ikhtilaf Note (Kepatuhan Lampiran C) jika ada -->
            <div
              v-if="node.ikhtilafAdabNote"
              class="p-4 rounded-2xl bg-emerald-900/10 border border-emerald-800/30 text-emerald-950 text-xs sm:text-sm space-y-1.5"
            >
              <div class="flex items-center gap-2 font-bold text-emerald-900">
                <ShieldAlert class="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Pedoman Keberagaman & Adab Perbedaan Mazhab:</span>
              </div>
              <p class="text-charcoal-700 leading-relaxed">
                {{ node.ikhtilafAdabNote }}
              </p>
            </div>

            <!-- Target Kompetensi Capaian -->
            <div class="space-y-3">
              <h4 class="font-display text-base font-bold text-emerald-950 flex items-center gap-2">
                <Sparkles class="w-4 h-4 text-gold-600" />
                <span>Target Kompetensi yang Dikuasai:</span>
              </h4>
              <ul class="space-y-2 text-xs sm:text-sm text-charcoal-800">
                <li
                  v-for="(comp, idx) in node.keyCompetencies"
                  :key="idx"
                  class="flex items-start gap-2.5"
                >
                  <CheckCircle2 class="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{{ comp }}</span>
                </li>
              </ul>
            </div>

            <!-- Ringkasan Silabus Per Bab -->
            <div class="space-y-3">
              <h4 class="font-display text-base font-bold text-emerald-950 flex items-center gap-2">
                <BookOpen class="w-4 h-4 text-gold-600" />
                <span>Silabus & Struktur Materi:</span>
              </h4>
              <div class="space-y-2">
                <div
                  v-for="(syl, idx) in node.syllabusOverview"
                  :key="idx"
                  class="p-3 rounded-xl bg-cream-100 border border-cream-300 text-xs sm:text-sm text-charcoal-800 flex items-center gap-2.5 font-medium"
                >
                  <span class="w-5 h-5 rounded-full bg-emerald-900 text-cream-50 flex items-center justify-center text-xs shrink-0 font-bold">
                    {{ idx + 1 }}
                  </span>
                  <span>{{ syl }}</span>
                </div>
              </div>
            </div>

            <!-- Prasyarat & Asatidz -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div class="p-3.5 rounded-xl bg-cream-200/60 border border-cream-300">
                <span class="text-[11px] font-bold text-charcoal-600 uppercase tracking-wider block mb-1">Prasyarat Kelayakan:</span>
                <p class="text-xs text-charcoal-800">{{ node.prerequisites.join(', ') }}</p>
              </div>

              <div class="p-3.5 rounded-xl bg-cream-200/60 border border-cream-300">
                <span class="text-[11px] font-bold text-charcoal-600 uppercase tracking-wider block mb-1">Pengampu Materi:</span>
                <p class="text-xs font-bold text-emerald-950">{{ node.instructorName }}</p>
              </div>
            </div>

            <!-- Sertifikasi Sanad Box (jika ada) -->
            <div
              v-if="node.hasSanadExam && node.sanadDegreeName"
              class="p-4 rounded-xl bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent border border-gold-500/40 flex items-center justify-between gap-3"
            >
              <div class="space-y-0.5">
                <span class="text-[10px] font-bold uppercase text-gold-800 tracking-wider">Ijazah Kelulusan Jenjang:</span>
                <p class="text-sm font-bold text-emerald-950">{{ node.sanadDegreeName }}</p>
              </div>
              <Award class="w-7 h-7 text-gold-600 shrink-0" />
            </div>

          </div>

          <!-- Footer Actions -->
          <div class="bg-cream-100 p-4 sm:p-5 border-t border-cream-300 flex items-center justify-between gap-3 shrink-0">
            <button
              type="button"
              class="px-4 py-2.5 rounded-xl border border-charcoal-300 text-charcoal-700 hover:bg-cream-200 text-xs font-semibold transition-colors cursor-pointer"
              @click="$emit('close')"
            >
              Tutup
            </button>

            <button
              type="button"
              class="px-6 py-2.5 rounded-xl bg-emerald-900 text-cream-50 hover:bg-emerald-850 text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              @click="$emit('enroll-node', node); $emit('close')"
            >
              <span>Pelajari Jenjang Ini</span>
              <ArrowRight class="w-4 h-4 text-gold-400" />
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
