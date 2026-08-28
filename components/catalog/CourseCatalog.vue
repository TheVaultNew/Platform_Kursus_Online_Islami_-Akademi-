<script setup lang="ts">
import { useCourses } from '~/composables/useCourses';
import type { Course } from '~/data/coursesData';
import CourseCard from './CourseCard.vue';
import CourseFilter from './CourseFilter.vue';
import CourseDetailModal from './CourseDetailModal.vue';
import { BookOpen, AlertCircle, Sparkles } from 'lucide-vue-next';

const {
  courses,
  filteredCourses,
  searchQuery,
  selectedCategory,
  selectedLevel,
  onlySanadCertified,
  sortBy,
  categories,
  levels,
  selectedCourse,
  isDetailModalOpen,
  openCourseDetail,
  closeCourseDetail,
  resetFilters
} = useCourses();

defineEmits<{
  (e: 'enroll-course', course: Course): void;
}>();
</script>

<template>
  <section id="katalog" class="py-20 lg:py-28 bg-cream-50 relative border-b border-cream-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-900/20">
          <BookOpen class="w-4 h-4 text-emerald-800" />
          <span>Eksplorasi Khazanah Keilmuan</span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 tracking-tight">
          Katalog Kursus <span class="text-gold-600 italic">Turats & Kontemporer</span>
        </h2>

        <p class="text-sm sm:text-base text-charcoal-700 font-light leading-relaxed">
          Koleksi lengkap materi Fiqih 4 Mazhab, Tafsir, Hadits, Bahasa Arab, Sirah, hingga Fiqih Muamalah Digital dengan referensi matan klasik dan bimbingan Asatidz bersanad.
        </p>
      </div>

      <!-- Filter Controls -->
      <div class="bg-cream-100/70 p-6 rounded-2xl border border-cream-300 shadow-sm">
        <CourseFilter
          v-model:search-query="searchQuery"
          v-model:selected-category="selectedCategory"
          v-model:selected-level="selectedLevel"
          v-model:only-sanad-certified="onlySanadCertified"
          v-model:sort-by="sortBy"
          :categories="categories"
          :levels="levels"
          :total-results="filteredCourses.length"
          @reset="resetFilters"
        />
      </div>

      <!-- Course Cards Grid -->
      <div
        v-if="filteredCourses.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <CourseCard
          v-for="course in filteredCourses"
          :key="course.id"
          :course="course"
          @view-detail="openCourseDetail(course)"
          @enroll="(c) => $emit('enroll-course', c)"
        />
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="text-center py-16 px-4 rounded-2xl bg-cream-100 border border-dashed border-cream-300 max-w-lg mx-auto space-y-4"
      >
        <div class="w-12 h-12 rounded-full bg-cream-200 text-charcoal-500 flex items-center justify-center mx-auto">
          <AlertCircle class="w-6 h-6" />
        </div>
        <div class="space-y-1">
          <h3 class="font-display text-lg font-bold text-emerald-950">Tidak Ditemukan Kursus yang Sesuai</h3>
          <p class="text-xs sm:text-sm text-charcoal-600 font-light">
            Coba ubah kata kunci pencarian Anda atau reset filter untuk melihat seluruh katalog.
          </p>
        </div>
        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-emerald-900 text-cream-50 text-xs font-medium cursor-pointer"
          @click="resetFilters"
        >
          Reset Semua Filter
        </button>
      </div>

    </div>

    <!-- Course Detail Modal -->
    <CourseDetailModal
      :is-open="isDetailModalOpen"
      :course="selectedCourse"
      @close="closeCourseDetail"
      @enroll="(c) => $emit('enroll-course', c)"
    />
  </section>
</template>
