<script setup lang="ts">
import type { LearningPath } from '~/data/learningPathsData';
import { Scale, BookOpen, Sparkles, ScrollText } from 'lucide-vue-next';

interface Props {
  paths: LearningPath[];
  activePathId: string;
}

defineProps<Props>();
defineEmits<{
  (e: 'select-path', id: string): void;
}>();

// Pemetaan ikon jalur keilmuan
const getPathIcon = (category: string) => {
  switch (category) {
    case 'fiqih':
      return Scale;
    case 'bahasa-arab':
      return BookOpen;
    case 'tafsir':
      return Sparkles;
    case 'hadits':
      return ScrollText;
    default:
      return BookOpen;
  }
};
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 p-1.5 rounded-2xl bg-cream-200/70 border border-cream-300 max-w-4xl mx-auto shadow-inner">
    <button
      v-for="path in paths"
      :key="path.id"
      type="button"
      role="tab"
      :aria-selected="activePathId === path.id"
      class="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-left flex-1 min-w-[200px] justify-center sm:justify-start"
      :class="[
        activePathId === path.id
          ? 'bg-emerald-900 text-cream-50 shadow-md shadow-emerald-950/20 scale-[1.02] border border-gold-500/40'
          : 'text-charcoal-700 hover:text-emerald-900 hover:bg-cream-100/80 bg-cream-50/60'
      ]"
      @click="$emit('select-path', path.id)"
    >
      <div
        class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
        :class="activePathId === path.id ? 'bg-gold-500 text-emerald-950 font-bold' : 'bg-cream-300/80 text-emerald-900'"
      >
        <component :is="getPathIcon(path.category)" class="w-4 h-4" />
      </div>

      <div class="truncate">
        <span class="block truncate leading-tight">{{ path.title }}</span>
        <span
          class="text-[11px] font-normal"
          :class="activePathId === path.id ? 'text-gold-300' : 'text-charcoal-500'"
        >
          {{ path.nodes.length }} Tingkat • {{ path.totalDurationWeeks }} Pekan
        </span>
      </div>
    </button>
  </div>
</template>
