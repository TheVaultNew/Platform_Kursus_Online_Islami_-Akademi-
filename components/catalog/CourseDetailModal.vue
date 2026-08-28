<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Course, CourseLesson } from '~/data/coursesData';
import {
  X,
  Star,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  ShieldAlert,
  Video,
  FileText,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Play,
  Share2,
  Check,
  Sparkles,
  Users,
  Scroll,
  Download
} from 'lucide-vue-next';
import KitabPdfModal from '~/components/catalog/KitabPdfModal.vue';

interface Props {
  isOpen: boolean;
  course: Course | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'enroll', course: Course): void;
}>();

// Active tab in modal: 'syllabus' | 'turats' | 'ikhtilaf' | 'instructor'
const activeTab = ref<'syllabus' | 'turats' | 'ikhtilaf' | 'instructor'>('syllabus');

// Expanded module IDs for the accordion
const openModuleIds = ref<string[]>([]);

// Active preview lesson for interactive preview player
const activePreviewLesson = ref<CourseLesson | null>(null);
const isPlayingPreview = ref(false);
const isPdfViewerOpen = ref(false);

// Watch for course changes to reset state and auto-open first module
watch(
  () => props.course,
  (newCourse) => {
    if (newCourse && newCourse.modules.length > 0) {
      openModuleIds.value = [newCourse.modules[0].id];
      // Default to first free preview lesson if any
      const freeLesson = newCourse.modules[0].lessons.find(l => l.isFreePreview);
      activePreviewLesson.value = freeLesson || newCourse.modules[0].lessons[0];
      isPlayingPreview.value = false;
      activeTab.value = 'syllabus';
    }
  },
  { immediate: true }
);

const toggleModule = (moduleId: string) => {
  if (openModuleIds.value.includes(moduleId)) {
    openModuleIds.value = openModuleIds.value.filter(id => id !== moduleId);
  } else {
    openModuleIds.value.push(moduleId);
  }
};

const expandAllModules = () => {
  if (props.course) {
    openModuleIds.value = props.course.modules.map(m => m.id);
  }
};

const collapseAllModules = () => {
  openModuleIds.value = [];
};

const selectPreviewLesson = (lesson: CourseLesson) => {
  activePreviewLesson.value = lesson;
  isPlayingPreview.value = true;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
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
        class="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 lg:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="`Silabus Lengkap: ${course.title}`"
      >
        <!-- Backdrop click -->
        <div class="fixed inset-0" @click="$emit('close')" />

        <!-- Modal Dialog Box -->
        <div
          class="relative w-full max-w-4xl bg-cream-50 rounded-3xl shadow-2xl border border-gold-500/40 overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col"
        >
          <!-- 1. Header Sticky Banner -->
          <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 p-5 sm:p-7 relative border-b border-gold-500/30 shrink-0">
            <button
              type="button"
              class="absolute top-4 right-4 p-2 rounded-full bg-emerald-900/80 text-cream-300 hover:text-cream-50 hover:bg-emerald-800 transition-colors cursor-pointer"
              aria-label="Tutup jendela silabus"
              @click="$emit('close')"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="space-y-2.5 max-w-2xl pr-8">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
                  {{ course.level }}
                </span>
                <span v-if="course.isSanadCertified" class="inline-flex items-center gap-1 text-xs text-gold-300 font-semibold bg-emerald-900/60 px-2.5 py-0.5 rounded-full border border-gold-500/30">
                  <Award class="w-3.5 h-3.5 text-gold-400" />
                  Sertifikasi Sanad Bersambung
                </span>
                <span class="text-xs text-cream-300 font-arabic hidden sm:inline">
                  {{ course.arabicTitle }}
                </span>
              </div>

              <h3 class="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug drop-shadow-sm">
                {{ course.title }}
              </h3>

              <p class="text-xs sm:text-sm text-cream-200/90 font-light line-clamp-2">
                {{ course.subtitle }}
              </p>
            </div>

            <!-- Quick Specs Row -->
            <div class="mt-4 pt-3.5 border-t border-emerald-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-cream-200">
              <div class="flex flex-wrap items-center gap-4 sm:gap-6">
                <div class="flex items-center gap-1 text-gold-400 font-semibold">
                  <Star class="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <span>{{ course.rating.toFixed(2) }} ({{ course.reviewsCount }} Santri)</span>
                </div>
                <div class="flex items-center gap-1">
                  <Clock class="w-3.5 h-3.5 text-gold-400" />
                  <span>{{ course.durationHours }} Jam Materi</span>
                </div>
                <div class="flex items-center gap-1">
                  <BookOpen class="w-3.5 h-3.5 text-gold-400" />
                  <span>{{ course.totalModules }} Modul ({{ course.totalLessons }} Sesi)</span>
                </div>
              </div>

              <div class="text-xs text-cream-300 font-medium hidden md:block">
                Kitab: <strong class="text-gold-300">{{ course.turatsBookReference }}</strong>
              </div>
            </div>
          </div>

          <!-- 2. Navigation Tabs (Mendatar) -->
          <div class="bg-cream-100 px-5 sm:px-7 border-b border-cream-300 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
            <button
              type="button"
              class="py-3 px-3.5 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              :class="activeTab === 'syllabus' ? 'border-emerald-900 text-emerald-950' : 'border-transparent text-charcoal-600 hover:text-emerald-900'"
              @click="activeTab = 'syllabus'"
            >
              <BookOpen class="w-4 h-4 text-emerald-800" />
              <span>Silabus & Kurikulum ({{ course.modules.length }} Modul)</span>
            </button>

            <button
              type="button"
              class="py-3 px-3.5 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              :class="activeTab === 'turats' ? 'border-emerald-900 text-emerald-950' : 'border-transparent text-charcoal-600 hover:text-emerald-900'"
              @click="activeTab = 'turats'"
            >
              <Scroll class="w-4 h-4 text-emerald-800" />
              <span>Kitab Turats & Rujukan</span>
            </button>

            <button
              v-if="course.ikhtilafNote"
              type="button"
              class="py-3 px-3.5 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              :class="activeTab === 'ikhtilaf' ? 'border-emerald-900 text-emerald-950' : 'border-transparent text-charcoal-600 hover:text-emerald-900'"
              @click="activeTab = 'ikhtilaf'"
            >
              <ShieldAlert class="w-4 h-4 text-emerald-800" />
              <span>Adab Ikhtilaf 4 Mazhab</span>
            </button>

            <button
              type="button"
              class="py-3 px-3.5 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              :class="activeTab === 'instructor' ? 'border-emerald-900 text-emerald-950' : 'border-transparent text-charcoal-600 hover:text-emerald-900'"
              @click="activeTab = 'instructor'"
            >
              <Users class="w-4 h-4 text-emerald-800" />
              <span>Pengampu & Target Capaian</span>
            </button>
          </div>

          <!-- 3. Tab Body Content (Scrollable) -->
          <div class="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
            
            <!-- TAB 1: SILABUS & KURIKULUM ACCORDION -->
            <div v-if="activeTab === 'syllabus'" class="space-y-5">
              
              <!-- Video Preview Simulator Box (Jika ada lesson preview aktif) -->
              <div
                v-if="activePreviewLesson"
                class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-emerald-950 text-cream-50 border border-gold-500/30 shadow-lg space-y-3"
              >
                <div class="flex items-center justify-between border-b border-emerald-850 pb-2 text-xs">
                  <span class="inline-flex items-center gap-1.5 text-gold-400 font-semibold uppercase tracking-wide">
                    <Video class="w-4 h-4" />
                    Pratinjau Sesi Terpilih: {{ activePreviewLesson.title }}
                  </span>
                  <span class="text-cream-300 font-medium">{{ activePreviewLesson.duration }}</span>
                </div>

                <div class="p-3.5 rounded-xl bg-emerald-900/60 border border-gold-500/20 text-xs text-cream-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <p class="font-arabic text-sm text-gold-300 text-right sm:text-left mb-1">
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • كِتَابُ الطَّهَارَةِ
                    </p>
                    <p class="text-cream-100/90 font-light">
                      Transkrip matan kitab dan penjelasan istinbath hukum disajikan dengan visualisasi bagan interaktif.
                    </p>
                  </div>

                  <span class="px-2.5 py-1 rounded bg-gold-500 text-emerald-950 text-xs font-bold shrink-0">
                    Akses Gratis Tersedia
                  </span>
                </div>
              </div>

              <!-- Accordion Control Bar -->
              <div class="flex items-center justify-between pt-1">
                <h4 class="font-display text-base sm:text-lg font-bold text-emerald-950">
                  Daftar Modul Silabus ({{ course.modules.length }} Bab)
                </h4>
                <div class="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    class="text-emerald-900 hover:text-gold-700 font-semibold cursor-pointer underline underline-offset-2"
                    @click="expandAllModules"
                  >
                    Buka Semua
                  </button>
                  <span class="text-charcoal-400">•</span>
                  <button
                    type="button"
                    class="text-charcoal-600 hover:text-emerald-900 font-semibold cursor-pointer underline underline-offset-2"
                    @click="collapseAllModules"
                  >
                    Tutup Semua
                  </button>
                </div>
              </div>

              <!-- Accordion Modules List -->
              <div class="space-y-3">
                <div
                  v-for="(module, mIdx) in course.modules"
                  :key="module.id"
                  class="rounded-2xl border transition-all duration-200 overflow-hidden"
                  :class="openModuleIds.includes(module.id) ? 'border-emerald-800 bg-cream-50 shadow-sm' : 'border-cream-300 bg-cream-100/70 hover:bg-cream-100'"
                >
                  <!-- Accordion Header Button -->
                  <button
                    type="button"
                    class="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer transition-colors focus-visible:outline-none"
                    @click="toggleModule(module.id)"
                  >
                    <div class="space-y-1 pr-4">
                      <div class="flex items-center gap-2">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-900/10 text-emerald-900">
                          Modul {{ mIdx + 1 }}
                        </span>
                        <span class="text-xs text-charcoal-500 font-medium">
                          {{ module.lessons.length }} Sesi Pembelajaran
                        </span>
                      </div>
                      <h5 class="font-display text-base font-bold text-emerald-950">
                        {{ module.title }}
                      </h5>
                      <p class="text-xs text-charcoal-600 font-light">
                        {{ module.description }}
                      </p>
                    </div>

                    <div class="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-emerald-900 shrink-0">
                      <ChevronUp v-if="openModuleIds.includes(module.id)" class="w-4 h-4" />
                      <ChevronDown v-else class="w-4 h-4" />
                    </div>
                  </button>

                  <!-- Accordion Lessons List -->
                  <div
                    v-if="openModuleIds.includes(module.id)"
                    class="p-4 pt-0 border-t border-cream-200/80 space-y-2 bg-cream-50"
                  >
                    <div
                      v-for="(lesson, lIdx) in module.lessons"
                      :key="lesson.id"
                      class="flex items-center justify-between p-3 rounded-xl border transition-all"
                      :class="activePreviewLesson?.id === lesson.id ? 'bg-emerald-900/10 border-emerald-800 ring-1 ring-emerald-800' : 'bg-cream-100/80 border-cream-300 hover:bg-cream-200/60'"
                    >
                      <div class="flex items-center gap-3">
                        <span class="w-6 h-6 rounded-full bg-cream-200 text-charcoal-700 text-xs font-semibold flex items-center justify-center shrink-0">
                          {{ lIdx + 1 }}
                        </span>
                        <div class="flex items-center gap-2">
                          <Video v-if="lesson.type === 'video'" class="w-4 h-4 text-emerald-800 shrink-0" />
                          <FileText v-else-if="lesson.type === 'reading'" class="w-4 h-4 text-navy-800 shrink-0" />
                          <HelpCircle v-else class="w-4 h-4 text-gold-600 shrink-0" />
                          <span class="text-xs sm:text-sm font-medium text-charcoal-900">{{ lesson.title }}</span>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 shrink-0">
                        <button
                          v-if="lesson.isFreePreview"
                          type="button"
                          class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-gold-500 text-emerald-950 hover:bg-gold-400 transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
                          @click="selectPreviewLesson(lesson)"
                        >
                          <Play class="w-3 h-3 fill-emerald-950" />
                          <span>Preview</span>
                        </button>
                        <span class="text-xs text-charcoal-500 font-medium">{{ lesson.duration }}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <!-- TAB 2: KITAB TURATS & RUJUKAN -->
            <div v-else-if="activeTab === 'turats'" class="space-y-5">
              <div class="p-5 rounded-2xl bg-cream-100 border border-cream-300 space-y-3">
                <div class="flex items-center gap-2 text-gold-700 font-bold text-xs uppercase tracking-wider">
                  <Scroll class="w-4 h-4" />
                  <span>Sanad Kitab Rujukan Utama</span>
                </div>
                <h4 class="font-display text-xl font-bold text-emerald-950">
                  {{ course.turatsBookReference }}
                </h4>
                <p class="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
                  Kajian ini menggunakan naskah tahqiq muktamad dengan metodologi syarah talaqqi bersanad. Setiap santri mendapatkan e-book matan berharakat, transliterasi, dan terjemahan komparatif resmi Ma'had.
                </p>
              </div>

              <!-- Fitur Kitab -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-4 rounded-xl bg-cream-100 border border-cream-200 text-xs space-y-1">
                  <span class="font-bold text-emerald-950 block">PDF Matan Lengkap</span>
                  <p class="text-charcoal-600">Dapat diunduh dan dicetak untuk catatan talaqqi.</p>
                </div>
                <div class="p-4 rounded-xl bg-cream-100 border border-cream-200 text-xs space-y-1">
                  <span class="font-bold text-emerald-950 block">I'rab & Kaidah Bahasa</span>
                  <p class="text-charcoal-600">Bedah struktur kalimat Arab dan tanda i'rab matan.</p>
                </div>
                <div class="p-4 rounded-xl bg-cream-100 border border-cream-200 text-xs space-y-1">
                  <span class="font-bold text-emerald-950 block">Hak Ijazah Sanad</span>
                  <p class="text-charcoal-600">Tersedia ujian kelulusan sanad muttashil.</p>
                </div>
              </div>

              <!-- CTA Buka PDF Viewer -->
              <div class="p-4 rounded-2xl bg-emerald-950 text-cream-50 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                <div class="space-y-0.5 text-center sm:text-left">
                  <h5 class="font-bold text-sm text-gold-300">Modul Kitab & Silabus PDF Siap Diakses</h5>
                  <p class="text-xs text-cream-200/90">Lihat lembar naskah matan berharakat, kurikulum per pertemuan, dan silsilah sanad.</p>
                </div>

                <button
                  type="button"
                  class="px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-emerald-950 font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
                  @click="isPdfViewerOpen = true"
                >
                  <FileText class="w-4 h-4 text-emerald-950" />
                  <span>Buka Modul Kitab PDF</span>
                </button>
              </div>
            </div>

            <!-- TAB 3: ADAB IKHTILAF 4 MAZHAB (LAMPIRAN C) -->
            <div v-else-if="activeTab === 'ikhtilaf'" class="space-y-4">
              <div class="p-5 sm:p-6 rounded-2xl bg-emerald-900/10 border border-emerald-800/30 text-emerald-950 space-y-3">
                <div class="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                  <ShieldAlert class="w-5 h-5 text-emerald-800 shrink-0" />
                  <span>Komitmen Adab Ikhtilaf & Keberagaman Madzhab Fiqih:</span>
                </div>
                <p class="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {{ course.ikhtilafNote }}
                </p>
              </div>

              <div class="p-4 rounded-xl bg-cream-100 border border-cream-300 text-xs text-charcoal-700 space-y-2">
                <span class="font-bold text-emerald-950 block uppercase tracking-wider">Prinsip Wasathiyah:</span>
                <p class="leading-relaxed">
                  Semua perbedaan pendapat cabang (*furu'iyyah*) dijelaskan dengan menyebutkan dalil masing-masing imam (Hanafi, Maliki, Syafi'i, dan Hanbali) demi menumbuhkan kelapangan dada dan ukhuwah Islamiyah antarsesama penuntut ilmu.
                </p>
              </div>
            </div>

            <!-- TAB 4: PENGAMPU & TARGET CAPAIAN -->
            <div v-else-if="activeTab === 'instructor'" class="space-y-5">
              <!-- Profil Dosen -->
              <div class="p-5 rounded-2xl bg-cream-100 border border-cream-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <img
                  :src="course.instructorAvatar"
                  :alt="course.instructorName"
                  class="w-16 h-16 rounded-full object-cover border-2 border-gold-500 shrink-0 shadow"
                />
                <div class="space-y-1">
                  <h4 class="font-display text-lg font-bold text-emerald-950">{{ course.instructorName }}</h4>
                  <p class="text-xs font-semibold text-gold-700">{{ course.instructorTitle }}</p>
                  <p class="text-xs text-charcoal-600">{{ course.instructorInstitution }}</p>
                </div>
              </div>

              <!-- Hasil Belajar -->
              <div class="space-y-3">
                <h5 class="font-display text-base font-bold text-emerald-950">Target Kompetensi yang Dikuasai:</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    v-for="(outcome, i) in course.learningOutcomes"
                    :key="i"
                    class="p-3 rounded-xl bg-cream-100 border border-cream-200 flex items-start gap-2 text-xs text-charcoal-800"
                  >
                    <CheckCircle2 class="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>{{ outcome }}</span>
                  </div>
                </div>
              </div>

              <!-- Prasyarat -->
              <div class="p-4 rounded-xl bg-cream-200/50 border border-cream-300 text-xs text-charcoal-700 space-y-1">
                <span class="font-bold text-emerald-950 block">Prasyarat Pembelajaran:</span>
                <p>{{ course.prerequisites.join(' • ') }}</p>
              </div>
            </div>

          </div>

          <!-- 4. Footer Sticky Actions Bar -->
          <div class="bg-cream-100 p-4 sm:p-6 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div>
              <span class="text-xs text-charcoal-500 line-through block">
                {{ formatPrice(course.originalPrice) }}
              </span>
              <div class="flex items-baseline gap-2">
                <span class="font-display text-2xl sm:text-3xl font-bold text-emerald-950">
                  {{ formatPrice(course.price) }}
                </span>
                <span class="text-xs text-charcoal-600 font-light">/ Akses Seumur Hidup</span>
              </div>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-charcoal-300 text-charcoal-700 hover:bg-cream-200 text-xs font-semibold transition-colors cursor-pointer"
                @click="$emit('close')"
              >
                Tutup
              </button>

              <button
                type="button"
                class="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                @click="$emit('enroll', course); $emit('close')"
              >
                <span>Daftar Kursus Sekarang</span>
                <ArrowRight class="w-4 h-4 text-gold-400" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Modal Modul Kitab PDF & Silabus -->
  <KitabPdfModal
    :is-open="isPdfViewerOpen"
    :course="course"
    @close="isPdfViewerOpen = false"
  />
</template>
