<script setup lang="ts">
import { ref } from 'vue';
import {
  X,
  Download,
  BookOpen,
  FileText,
  CheckCircle2,
  Award,
  ShieldCheck,
  Printer,
  ZoomIn,
  ZoomOut,
  Copy,
  Check,
  Sparkles
} from 'lucide-vue-next';
import type { Course } from '~/data/coursesData';

interface Props {
  isOpen: boolean;
  course: Course | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const zoomLevel = ref(100);
const isDownloading = ref(false);
const isDownloaded = ref(false);
const isCopied = ref(false);

const handleDownload = () => {
  isDownloading.value = true;
  setTimeout(() => {
    isDownloading.value = false;
    isDownloaded.value = true;
    setTimeout(() => {
      isDownloaded.value = false;
    }, 4000);
  }, 1000);
};

const handleCopyText = (text: string) => {
  if (typeof navigator !== 'undefined') {
    navigator.clipboard.writeText(text);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2500);
  }
};
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
        v-if="isOpen && course"
        class="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="`Modul Kitab PDF & Silabus: ${course.title}`"
      >
        <!-- Modal Backdrop Click -->
        <div class="fixed inset-0" @click="$emit('close')" />

        <!-- Modal Container (Document Viewer) -->
        <div
          class="relative w-full max-w-4xl bg-cream-50 rounded-3xl shadow-2xl border border-gold-500/40 overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col"
        >
          <!-- Top Header Bar -->
          <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 p-4 sm:p-6 relative border-b border-gold-500/30 flex items-center justify-between gap-4 shrink-0">
            <div class="space-y-1 pr-6">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-gold-400 text-emerald-950 text-[10px] font-bold uppercase tracking-wider shadow">
                  Modul PDF Resmi Santri
                </span>
                <span class="text-xs text-gold-300 font-mono hidden sm:inline">
                  Tahqiq Turats & Silabus Terstruktur
                </span>
              </div>

              <h3 class="font-display text-lg sm:text-xl font-bold text-cream-50 leading-snug">
                {{ course.title }}
              </h3>

              <p class="text-xs text-cream-200/90 font-light truncate">
                Rujukan: <strong class="text-gold-300">{{ course.turatsBookReference }}</strong> • Pengampu: {{ course.instructorName }}
              </p>
            </div>

            <!-- Header Quick Actions -->
            <div class="flex items-center gap-2 shrink-0">
              <button
                type="button"
                :disabled="isDownloading"
                class="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-emerald-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                @click="handleDownload"
              >
                <Download class="w-4 h-4" />
                <span class="hidden sm:inline">{{ isDownloading ? 'Mengunduh...' : (isDownloaded ? 'Tersimpan!' : 'Download PDF') }}</span>
              </button>

              <button
                type="button"
                class="p-2 rounded-full bg-emerald-900/80 text-cream-300 hover:text-cream-50 hover:bg-emerald-800 transition-colors cursor-pointer"
                aria-label="Tutup jendela modul"
                @click="$emit('close')"
              >
                <X class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- PDF Viewer Control Strip -->
          <div class="bg-cream-200/80 px-4 sm:px-6 py-2 border-b border-cream-300 flex items-center justify-between gap-3 text-xs text-charcoal-700 shrink-0">
            <div class="flex items-center gap-2">
              <FileText class="w-4 h-4 text-emerald-900" />
              <span class="font-medium">Naskah Digital Matan & Silabus Akademik</span>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-[11px] text-charcoal-500 font-mono hidden sm:inline">Skala: {{ zoomLevel }}%</span>
              <button
                type="button"
                class="p-1 rounded bg-cream-100 hover:bg-cream-300 text-charcoal-700 transition-colors cursor-pointer"
                title="Perkecil Teks"
                @click="zoomLevel = Math.max(80, zoomLevel - 10)"
              >
                <ZoomOut class="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                class="p-1 rounded bg-cream-100 hover:bg-cream-300 text-charcoal-700 transition-colors cursor-pointer"
                title="Perbesar Teks"
                @click="zoomLevel = Math.min(130, zoomLevel + 10)"
              >
                <ZoomIn class="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <!-- Download Notification Banner jika sukses -->
          <div
            v-if="isDownloaded"
            class="bg-emerald-900 text-gold-300 px-4 py-2 text-xs font-semibold flex items-center justify-center gap-2 border-b border-gold-500/30 transition-all shrink-0"
          >
            <CheckCircle2 class="w-4 h-4 text-gold-400" />
            <span>Alhamdulillah! File PDF modul & silabus "{{ course.title }}" telah berhasil diunduh.</span>
          </div>

          <!-- Document Sheet (Scrollable) -->
          <div
            class="p-6 sm:p-10 overflow-y-auto flex-1 bg-cream-100 space-y-8 transition-all"
            :style="{ fontSize: `${zoomLevel}%` }"
          >
            <!-- Sheet Page 1: Cover & Header Akademik -->
            <div class="bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-cream-300 space-y-6 max-w-3xl mx-auto">
              
              <div class="text-center border-b-2 border-emerald-900 pb-6 space-y-2">
                <p class="font-arabic text-xl sm:text-2xl text-emerald-950 font-bold leading-relaxed">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <h4 class="font-display text-xl sm:text-2xl font-bold text-emerald-950">
                  DARUL HIKMAH ACADEMY
                </h4>
                <p class="text-xs uppercase font-bold text-gold-800 tracking-widest">
                  Silabus Kurikulum & Naskah Matan Kitab Turats
                </p>
              </div>

              <!-- Metadata Box -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-cream-50 border border-cream-300 text-xs">
                <div class="space-y-1">
                  <span class="text-charcoal-500 block uppercase font-bold text-[10px]">Mata Pelajaran:</span>
                  <span class="font-bold text-emerald-950">{{ course.title }}</span>
                </div>
                <div class="space-y-1">
                  <span class="text-charcoal-500 block uppercase font-bold text-[10px]">Kitab Rujukan Pokok:</span>
                  <span class="font-bold text-emerald-950">{{ course.turatsBookReference }}</span>
                </div>
                <div class="space-y-1">
                  <span class="text-charcoal-500 block uppercase font-bold text-[10px]">Pengampu Materi:</span>
                  <span class="font-bold text-emerald-950">{{ course.instructorName }} ({{ course.instructorInstitution }})</span>
                </div>
                <div class="space-y-1">
                  <span class="text-charcoal-500 block uppercase font-bold text-[10px]">Status Ijazah Sanad:</span>
                  <span class="font-bold text-gold-800">{{ course.isSanadCertified ? 'Bersanad Mu\'tashil' : 'Sertifikat Akademik' }}</span>
                </div>
              </div>

              <!-- Deskripsi Komprehensif -->
              <div class="space-y-2 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                <h5 class="font-bold text-emerald-950 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Sparkles class="w-4 h-4 text-gold-600" />
                  <span>Deskripsi & Urgensi Pembelajaran:</span>
                </h5>
                <p>{{ course.fullDescription }}</p>
              </div>

              <!-- Target Capaian Kompetensi -->
              <div class="space-y-2.5">
                <h5 class="font-bold text-emerald-950 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Award class="w-4 h-4 text-gold-600" />
                  <span>Target Capaian Pembelajaran (Learning Outcomes):</span>
                </h5>
                <ul class="space-y-2 text-xs sm:text-sm text-charcoal-800">
                  <li
                    v-for="(outcome, idx) in course.learningOutcomes"
                    :key="idx"
                    class="flex items-start gap-2"
                  >
                    <CheckCircle2 class="w-4 h-4 text-emerald-900 shrink-0 mt-0.5" />
                    <span>{{ outcome }}</span>
                  </li>
                </ul>
              </div>

              <!-- Adab Ikhtilaf Note (Kepatuhan Lampiran C) jika ada -->
              <div
                v-if="course.ikhtilafNote"
                class="p-4 rounded-xl bg-emerald-900/10 border border-emerald-900/30 text-xs text-charcoal-800 space-y-1.5"
              >
                <div class="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck class="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Pedoman Adab Ikhtilaf & Fiqih Muqaran 4 Mazhab:</span>
                </div>
                <p class="leading-relaxed">{{ course.ikhtilafNote }}</p>
              </div>

            </div>

            <!-- Sheet Page 2: Rincian Silabus Modul & Naskah Matan Turats -->
            <div class="bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-cream-300 space-y-6 max-w-3xl mx-auto">
              
              <div class="border-b border-cream-300 pb-3 flex items-center justify-between">
                <h4 class="font-display text-lg font-bold text-emerald-950 flex items-center gap-2">
                  <BookOpen class="w-5 h-5 text-gold-600" />
                  <span>Rincian Silabus & Jadwal Modul Pembelajaran</span>
                </h4>
                <span class="text-xs text-charcoal-500 font-mono">{{ course.modules.length }} Modul • {{ course.totalLessons }} Sesi</span>
              </div>

              <!-- Modul List -->
              <div class="space-y-4">
                <div
                  v-for="(mod, mIdx) in course.modules"
                  :key="mod.id"
                  class="p-4 rounded-xl bg-cream-50 border border-cream-300 space-y-3"
                >
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <span class="px-2 py-0.5 rounded bg-emerald-900 text-cream-50 font-bold text-[10px] uppercase">
                        Modul {{ mIdx + 1 }}
                      </span>
                      <h5 class="font-bold text-emerald-950 text-sm sm:text-base mt-1">
                        {{ mod.title }}
                      </h5>
                    </div>
                  </div>

                  <p class="text-xs text-charcoal-600 font-light">
                    {{ mod.description }}
                  </p>

                  <!-- Sesi Pembelajaran -->
                  <div class="space-y-1.5 pt-1 border-t border-cream-200">
                    <div
                      v-for="(les, lIdx) in mod.lessons"
                      :key="les.id"
                      class="flex items-center justify-between p-2 rounded-lg bg-white border border-cream-200 text-xs"
                    >
                      <div class="flex items-center gap-2">
                        <span class="w-5 h-5 rounded-full bg-cream-200 text-charcoal-700 flex items-center justify-center text-[10px] font-bold">
                          {{ lIdx + 1 }}
                        </span>
                        <span class="font-medium text-charcoal-900">{{ les.title }}</span>
                      </div>
                      <span class="text-charcoal-500 font-mono text-[11px]">{{ les.duration }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- Bottom Sticky Footer Actions -->
          <div class="bg-cream-50 p-4 sm:p-5 border-t border-cream-300 flex items-center justify-between gap-3 shrink-0">
            <button
              type="button"
              class="px-5 py-2.5 rounded-xl border border-charcoal-300 text-charcoal-700 hover:bg-cream-200 text-xs font-semibold transition-colors cursor-pointer"
              @click="$emit('close')"
            >
              Tutup
            </button>

            <div class="flex items-center gap-3">
              <button
                type="button"
                :disabled="isDownloading"
                class="px-6 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                @click="handleDownload"
              >
                <Download class="w-4 h-4 text-gold-400" />
                <span>{{ isDownloading ? 'Sedang Mengunduh...' : 'Download Dokumen Modul PDF' }}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
