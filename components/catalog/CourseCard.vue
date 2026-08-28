<script setup lang="ts">
import type { Course } from '~/data/coursesData';
import { Star, Clock, BookOpen, Award, Users, ArrowRight } from 'lucide-vue-next';

interface Props {
  course: Course;
}

defineProps<Props>();
defineEmits<{
  (e: 'view-detail', course: Course): void;
  (e: 'enroll', course: Course): void;
}>();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};
</script>

<template>
  <div
    class="bg-cream-50 rounded-2xl border border-cream-300 shadow-card hover:shadow-card-hover hover:border-emerald-700/50 hover-lift flex flex-col justify-between overflow-hidden group"
  >
    <!-- Top Header Badge & Arabic Callout -->
    <div class="p-6 pb-4 space-y-3.5">
      <div class="flex items-center justify-between gap-2">
        <span
          class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
          :class="[
            course.levelKey === 'pemula' ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' : '',
            course.levelKey === 'menengah' ? 'bg-navy-900/10 text-navy-900 border border-navy-900/20' : '',
            course.levelKey === 'lanjutan' ? 'bg-gold-500/20 text-gold-800 border border-gold-500/30' : ''
          ]"
        >
          {{ course.level }}
        </span>

        <span
          v-if="course.isSanadCertified"
          class="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-700 bg-gold-500/15 px-2 py-0.5 rounded-full border border-gold-500/30"
          title="Tersedia Ijazah Sanad Bersambung"
        >
          <Award class="w-3.5 h-3.5 text-gold-600" />
          Bersanad
        </span>
      </div>

      <p class="text-xs text-charcoal-500 font-arabic text-right -mb-1">{{ course.arabicTitle }}</p>

      <h3 class="font-display text-xl font-extrabold text-emerald-950 group-hover:text-emerald-800 transition-colors leading-snug">
        <a href="javascript:void(0)" class="text-emerald-950 hover:text-emerald-850" @click="$emit('view-detail', course)">
          {{ course.title }}
        </a>
      </h3>

      <p class="text-xs sm:text-sm text-charcoal-700 font-light line-clamp-2 leading-relaxed">
        {{ course.shortDescription }}
      </p>

      <!-- Reference Book Pill -->
      <div class="p-2.5 rounded-lg bg-cream-100 border border-cream-200/80 text-xs text-charcoal-700 flex items-center gap-2">
        <BookOpen class="w-3.5 h-3.5 text-emerald-800 shrink-0" />
        <span class="truncate">Kitab: <strong>{{ course.turatsBookReference }}</strong></span>
      </div>
    </div>

    <!-- Instructor & Specs -->
    <div class="px-6 py-3 border-t border-cream-200/80 bg-cream-100/50 space-y-3">
      <div class="flex items-center gap-3">
        <img
          :src="course.instructorAvatar"
          :alt="course.instructorName"
          class="w-9 h-9 rounded-full object-cover border border-gold-500/40 shrink-0"
        />
        <div class="min-w-0">
          <p class="text-xs font-semibold text-emerald-950 truncate">{{ course.instructorName }}</p>
          <p class="text-[11px] text-charcoal-600 truncate">{{ course.instructorInstitution }}</p>
        </div>
      </div>

      <div class="flex items-center justify-between text-xs text-charcoal-600 pt-1">
        <div class="flex items-center gap-1 font-semibold text-emerald-950">
          <Star class="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          <span>{{ course.rating.toFixed(2) }}</span>
          <span class="text-[11px] font-normal text-charcoal-500">({{ course.reviewsCount }})</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="flex items-center gap-1">
            <Clock class="w-3 h-3 text-emerald-800" />
            {{ course.durationHours }} Jam
          </span>
          <span class="flex items-center gap-1">
            <Users class="w-3 h-3 text-emerald-800" />
            {{ course.enrolledCount }} Santri
          </span>
        </div>
      </div>
    </div>

    <!-- Pricing & Action CTA -->
    <div class="p-6 pt-4 border-t border-cream-200 flex items-center justify-between gap-3 bg-cream-50">
      <div>
        <span class="text-[11px] text-charcoal-500 line-through block -mb-0.5">
          {{ formatPrice(course.originalPrice) }}
        </span>
        <span class="font-display text-lg font-bold text-emerald-950">
          {{ formatPrice(course.price) }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="px-3.5 py-2 rounded-lg border border-emerald-900/30 text-emerald-900 hover:bg-emerald-900/10 text-xs font-medium transition-colors cursor-pointer"
          @click="$emit('view-detail', course)"
        >
          Silabus
        </button>

        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-xs font-medium shadow-sm transition-all flex items-center gap-1 cursor-pointer active:scale-95"
          @click="$emit('enroll', course)"
        >
          <span>Daftar</span>
          <ArrowRight class="w-3.5 h-3.5 text-gold-400" />
        </button>
      </div>
    </div>
  </div>
</template>
