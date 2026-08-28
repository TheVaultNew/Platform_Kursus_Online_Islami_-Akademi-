<script setup lang="ts">
import { Search, Filter, RotateCcw, Award } from 'lucide-vue-next';

interface CategoryOption {
  id: string;
  label: string;
}

interface LevelOption {
  id: string;
  label: string;
}

interface Props {
  searchQuery: string;
  selectedCategory: string;
  selectedLevel: string;
  onlySanadCertified: boolean;
  sortBy: string;
  categories: CategoryOption[];
  levels: LevelOption[];
  totalResults: number;
}

defineProps<Props>();
defineEmits<{
  (e: 'update:searchQuery', val: string): void;
  (e: 'update:selectedCategory', val: string): void;
  (e: 'update:selectedLevel', val: string): void;
  (e: 'update:onlySanadCertified', val: boolean): void;
  (e: 'update:sortBy', val: string): void;
  (e: 'reset'): void;
}>();
</script>

<template>
  <div class="space-y-4 sm:space-y-6">
    <!-- Search Bar -->
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
        <Search class="w-4 h-4 text-emerald-900" />
      </div>
      <input
        :value="searchQuery"
        type="text"
        placeholder="Cari materi: Fiqih, Nahwu, Hadits, Tafsir, Sirah..."
        class="w-full pl-10 pr-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 placeholder:text-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800 shadow-sm"
        @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
      />
    </div>

    <!-- Sanad Toggle + Sort Row -->
    <div class="flex flex-wrap items-center gap-2 sm:gap-3">
      <!-- Sanad Toggle -->
      <label
        class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium cursor-pointer transition-colors"
        :class="onlySanadCertified ? 'bg-gold-500/20 border-gold-500 text-gold-900 font-semibold' : 'bg-cream-50 border-cream-300 text-charcoal-700 hover:bg-cream-200/60'"
      >
        <input
          type="checkbox"
          :checked="onlySanadCertified"
          class="rounded text-gold-600 focus:ring-gold-500 cursor-pointer"
          @change="$emit('update:onlySanadCertified', ($event.target as HTMLInputElement).checked)"
        />
        <Award class="w-3.5 h-3.5 text-gold-600" />
        <span>Hanya Bersanad</span>
      </label>

      <!-- Sorting Select -->
      <select
        :value="sortBy"
        class="px-3 py-2 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-800 shadow-sm cursor-pointer"
        @change="$emit('update:sortBy', ($event.target as HTMLSelectElement).value)"
      >
        <option value="popular">Paling Populer</option>
        <option value="rating">Rating Tertinggi</option>
        <option value="price-asc">Investasi: Rendah ke Tinggi</option>
        <option value="price-desc">Investasi: Tinggi ke Rendah</option>
      </select>
    </div>

    <!-- Category Pills Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
      <button
        v-for="cat in categories"
        :key="cat.id"
        type="button"
        class="px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0"
        :class="[
          selectedCategory === cat.id
            ? 'bg-emerald-900 text-cream-50 shadow-sm'
            : 'bg-cream-200/70 text-charcoal-700 hover:bg-cream-300/80 border border-cream-300'
        ]"
        @click="$emit('update:selectedCategory', cat.id)"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Level Filter Bar & Active Filter Counters -->
    <div class="pt-3 border-t border-cream-200 space-y-3">
      <!-- Level Filter Row with Flex Wrap -->
      <div class="flex flex-wrap items-center gap-2">
        <span class="font-bold text-emerald-950 flex items-center gap-1.5 shrink-0 text-xs">
          <Filter class="w-3.5 h-3.5 text-emerald-900" />
          Tingkat:
        </span>
        <div class="flex flex-wrap items-center gap-1.5">
          <button
            v-for="lvl in levels"
            :key="lvl.id"
            type="button"
            class="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer"
            :class="[
              selectedLevel === lvl.id
                ? 'bg-emerald-900 text-cream-50 font-bold shadow-sm'
                : 'bg-cream-200/70 text-charcoal-700 hover:bg-cream-300/80 border border-cream-300'
            ]"
            @click="$emit('update:selectedLevel', lvl.id)"
          >
            {{ lvl.label }}
          </button>
        </div>
      </div>

      <!-- Results Count & Reset Filter Button (Responsive Row) -->
      <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-cream-200/70 text-xs">
        <span class="text-charcoal-600 font-medium">
          Menampilkan <strong class="text-emerald-950 font-bold">{{ totalResults }}</strong> kursus
        </span>

        <button
          type="button"
          class="inline-flex items-center gap-1.5 text-charcoal-600 hover:text-emerald-900 font-semibold hover:underline cursor-pointer py-1 px-2 rounded-md hover:bg-cream-200/60 transition-colors"
          @click="$emit('reset')"
        >
          <RotateCcw class="w-3.5 h-3.5 text-emerald-900" />
          <span>Reset Filter</span>
        </button>
      </div>
    </div>
  </div>
</template>
