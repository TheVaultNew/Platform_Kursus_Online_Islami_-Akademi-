<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLearningPaths } from '~/composables/useLearningPaths';
import type { RoadmapNode } from '~/data/learningPathsData';
import RoadmapTrackSelector from './RoadmapTrackSelector.vue';
import RoadmapNodeModal from './RoadmapNodeModal.vue';
import { Compass, BookOpen, Clock, Award, CheckCircle2, ChevronRight, Sparkles, HelpCircle, Layers } from 'lucide-vue-next';

/**
 * =========================================================================
 * KOMPONEN VISUAL LEARNING PATH ROADMAP (JALUR KEILMUAN INTERAKTIF)
 * =========================================================================
 * Komponen ini merupakan fitur unggulan (signature) platform kursus Islam.
 * Menyediakan visualisasi jalur belajar dari tingkat pemula hingga lanjutan/sanad.
 * Menggunakan Vue Reactive State untuk pelacakan node yang diklik & track aktif.
 */

// Menginisialisasi state jalur belajar dari composable
const {
  allPaths,
  activePathId,
  currentPath,
  selectedNode,
  isNodeModalOpen,
  selectPath,
  openNodeDetail,
  closeNodeDetail
} = useLearningPaths();

// Emit event saat pengguna ingin mendaftar ke kursus terkait
const emit = defineEmits<{
  (e: 'enroll-course', courseId: string): void;
}>();

// State interaktif lokal: node yang sedang aktif dipratinjau di sidebar preview
const activePreviewNode = ref<RoadmapNode | null>(null);

// Mengatur node preview default saat jalur berubah
const previewNode = computed<RoadmapNode>(() => {
  if (activePreviewNode.value && currentPath.value.nodes.some(n => n.id === activePreviewNode.value?.id)) {
    return activePreviewNode.value;
  }
  return currentPath.value.nodes[0];
});

/**
 * Fungsi pembantu untuk memilih node dan membuka drawer detail materi
 * @param node - Objek RoadmapNode yang diklik oleh penuntut ilmu
 */
const handleNodeClick = (node: RoadmapNode) => {
  activePreviewNode.value = node;
  openNodeDetail(node);
};

/**
 * Fungsi untuk mengubah preview node saat hover / keyboard focus
 * @param node - Objek RoadmapNode
 */
const handleNodeHover = (node: RoadmapNode) => {
  activePreviewNode.value = node;
};

/**
 * Mengambil warna aksen berdasarkan status jenjang (Pondasi, Inti, Lanjutan, Capstone)
 */
const getNodeStatusStyles = (status: RoadmapNode['status'], isSelected: boolean) => {
  if (isSelected) {
    return {
      nodeBg: 'bg-gold-500 text-emerald-950 ring-4 ring-gold-400/40 shadow-gold-glow scale-110',
      badgeBg: 'bg-gold-500 text-emerald-950 font-bold',
      borderCard: 'border-gold-500 bg-cream-50 ring-2 ring-gold-500/30'
    };
  }

  switch (status) {
    case 'foundation':
      return {
        nodeBg: 'bg-emerald-800 text-gold-300 hover:bg-emerald-700',
        badgeBg: 'bg-emerald-900/10 text-emerald-900',
        borderCard: 'border-cream-300 hover:border-emerald-700 bg-cream-50/80'
      };
    case 'core':
      return {
        nodeBg: 'bg-navy-900 text-cream-100 hover:bg-navy-800',
        badgeBg: 'bg-navy-900/10 text-navy-900',
        borderCard: 'border-cream-300 hover:border-navy-700 bg-cream-50/80'
      };
    case 'advanced':
      return {
        nodeBg: 'bg-emerald-900 text-cream-50 hover:bg-emerald-850',
        badgeBg: 'bg-emerald-900/10 text-emerald-900',
        borderCard: 'border-cream-300 hover:border-emerald-900 bg-cream-50/80'
      };
    case 'capstone':
      return {
        nodeBg: 'bg-gradient-to-br from-gold-500 to-gold-600 text-emerald-950 hover:brightness-105',
        badgeBg: 'bg-gold-500/20 text-gold-800',
        borderCard: 'border-gold-500/40 hover:border-gold-500 bg-cream-50/90'
      };
  }
};
</script>

<template>
  <section id="learning-path" class="py-20 lg:py-28 bg-cream-100 relative overflow-hidden border-b border-cream-200">
    <!-- Ornamen Geometris Halus di Background -->
    <div class="absolute -top-24 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-24 left-0 w-96 h-96 bg-emerald-900/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
      
      <!-- Section Header Editorial -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-900/20">
          <Compass class="w-4 h-4 text-emerald-800" />
          <span>Kurikulum Berjenjang & Terstruktur</span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 tracking-tight leading-tight">
          Visual <span class="text-gold-600 italic">Learning Path</span> Roadmap
        </h2>

        <p class="text-sm sm:text-base text-charcoal-700 font-light leading-relaxed">
          Pilih jalur keilmuan spesifik Anda. Setiap jalur dirancang berjenjang dari kitab pondasi (*Ibtida'i*), kaidah dasar (*Mutawassith*), perbandingan mazhab (*Mutaqaddim*), hingga sertifikasi sanad keilmuan (*Takhassus*).
        </p>
      </div>

      <!-- Tab Selector Jalur Keilmuan -->
      <RoadmapTrackSelector
        :paths="allPaths"
        :active-path-id="activePathId"
        @select-path="selectPath"
      />

      <!-- Container Visual Jalur Roadmap & Panel Pratinjau Interaktif -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Kolom Kiri: Visual Pathway Nodes (8 Kolom) -->
        <div class="lg:col-span-8 bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-300 shadow-card space-y-8 relative">
          
          <!-- Banner Ringkasan Jalur Aktif -->
          <div class="p-5 rounded-xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-900 text-cream-50 space-y-2 border border-gold-500/30">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                Jalur Keilmuan Terpilih
              </span>
              <span class="text-xs text-cream-300 font-arabic">{{ currentPath.arabicTitle }}</span>
            </div>
            <h3 class="font-display text-xl sm:text-2xl font-bold text-cream-50">
              {{ currentPath.title }}
            </h3>
            <p class="text-xs sm:text-sm text-cream-200/90 font-light leading-relaxed">
              {{ currentPath.description }}
            </p>
            <div class="pt-2 flex flex-wrap items-center gap-4 text-xs text-gold-300 font-medium">
              <span class="flex items-center gap-1.5">
                <Layers class="w-4 h-4 text-gold-400" />
                {{ currentPath.nodes.length }} Tingkat Berurutan
              </span>
              <span class="flex items-center gap-1.5">
                <Clock class="w-4 h-4 text-gold-400" />
                Estimasi Waktu: {{ currentPath.totalDurationWeeks }} Pekan ({{ currentPath.totalEstimatedHours }} Jam)
              </span>
            </div>
          </div>

          <!-- Petunjuk Interaksi Pengguna -->
          <div class="flex items-center justify-between text-xs text-charcoal-600 px-1">
            <span class="flex items-center gap-1.5 font-medium text-emerald-900">
              <Sparkles class="w-3.5 h-3.5 text-gold-600" />
              Klik pada setiap kartu tahapan di bawah untuk melihat rincian silabus & prasyarat:
            </span>
            <span class="hidden sm:inline text-charcoal-500">Tahap 1 ➔ Tahap {{ currentPath.nodes.length }}</span>
          </div>

          <!-- Visual Step Nodes List -->
          <div class="relative space-y-6">
            
            <!-- Garis Penghubung Alur (Connecting Vertical Line) -->
            <div class="absolute top-8 bottom-8 left-6 sm:left-8 w-1 bg-gradient-to-b from-emerald-800 via-gold-500 to-emerald-900 rounded-full hidden sm:block opacity-40 pointer-events-none" />

            <!-- Loop Tiap Node Jenjang dalam Jalur -->
            <div
              v-for="(node, index) in currentPath.nodes"
              :key="node.id"
              class="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer group"
              :class="[
                getNodeStatusStyles(node.status, previewNode.id === node.id).borderCard,
                previewNode.id === node.id ? 'shadow-lg translate-x-1' : 'hover:shadow-md'
              ]"
              tabindex="0"
              role="button"
              :aria-label="`Pilih tahapan ${node.stepNumber}: ${node.title}`"
              @click="handleNodeClick(node)"
              @mouseenter="handleNodeHover(node)"
              @keydown.enter="handleNodeClick(node)"
              @keydown.space.prevent="handleNodeClick(node)"
            >
              
              <!-- Lingkaran Angka Node (Step Indicator) -->
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-display text-lg sm:text-xl font-bold shrink-0 transition-all duration-300 z-10 shadow-md"
                :class="getNodeStatusStyles(node.status, previewNode.id === node.id).nodeBg"
              >
                {{ node.stepNumber }}
              </div>

              <!-- Konten Utama Kartu Node -->
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                    :class="getNodeStatusStyles(node.status, previewNode.id === node.id).badgeBg"
                  >
                    {{ node.levelLabel }}
                  </span>
                  
                  <span
                    v-if="node.hasSanadExam"
                    class="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-700 bg-gold-500/15 px-2 py-0.5 rounded-full"
                  >
                    <Award class="w-3 h-3 text-gold-600" />
                    Ujian Ijazah Sanad
                  </span>

                  <span class="text-xs text-charcoal-500 ml-auto font-arabic hidden sm:inline">
                    {{ node.arabicTitle }}
                  </span>
                </div>

                <h4 class="font-display text-lg sm:text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                  {{ node.title }}
                </h4>

                <p class="text-xs sm:text-sm text-charcoal-700 line-clamp-2 font-light">
                  {{ node.subtitle }}
                </p>

                <!-- Metadata Singkat (Durasi & Kitab Turats Rujukan) -->
                <div class="pt-2 flex flex-wrap items-center gap-4 text-xs text-charcoal-600">
                  <span class="flex items-center gap-1 text-emerald-900 font-medium">
                    <Clock class="w-3.5 h-3.5 text-gold-600" />
                    {{ node.durationWeeks }} Pekan ({{ node.estimatedHours }} Jam)
                  </span>
                  <span class="flex items-center gap-1 text-charcoal-600">
                    <BookOpen class="w-3.5 h-3.5 text-emerald-800" />
                    Kitab: <strong>{{ node.turatsBook }}</strong>
                  </span>
                </div>
              </div>

              <!-- Tombol Aksi Chevron / Indikator Klik -->
              <div class="shrink-0 self-end sm:self-center">
                <div class="w-9 h-9 rounded-full bg-cream-200/80 group-hover:bg-emerald-900 group-hover:text-cream-50 text-emerald-900 flex items-center justify-center transition-colors">
                  <ChevronRight class="w-5 h-5" />
                </div>
              </div>

            </div>

          </div>

        </div>

        <!-- Kolom Kanan: Detail Drawer Preview & Panduan Capaian (4 Kolom) -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Sticky Card Detail Tahapan yang Sedang Dipilih -->
          <div class="sticky top-28 bg-cream-50 rounded-2xl p-6 border border-cream-300 shadow-card space-y-5">
            
            <div class="flex items-center justify-between border-b border-cream-200 pb-3">
              <span class="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles class="w-4 h-4 text-gold-600" />
                Pratinjau Tahapan
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-cream-200 text-charcoal-700 font-semibold">
                Tahap {{ previewNode.stepNumber }} dari {{ currentPath.nodes.length }}
              </span>
            </div>

            <!-- Judul & Deskripsi Preview -->
            <div class="space-y-2">
              <span class="text-xs font-semibold text-gold-700 uppercase tracking-wide block">
                {{ previewNode.levelLabel }}
              </span>
              <h4 class="font-display text-xl font-bold text-emerald-950">
                {{ previewNode.title }}
              </h4>
              <p class="text-xs text-charcoal-700 leading-relaxed font-light">
                {{ previewNode.subtitle }}
              </p>
            </div>

            <!-- Rujukan Kitab & Pengajar -->
            <div class="p-3.5 rounded-xl bg-cream-100 border border-cream-200 text-xs space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-charcoal-600">Kitab Rujukan:</span>
                <span class="font-semibold text-emerald-950 text-right">{{ previewNode.turatsBook }}</span>
              </div>
              <div class="flex items-center justify-between border-t border-cream-200 pt-2">
                <span class="text-charcoal-600">Pengampu:</span>
                <span class="font-semibold text-emerald-900">{{ previewNode.instructorName }}</span>
              </div>
            </div>

            <!-- Kompetensi yang Dicapai -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-emerald-950 uppercase tracking-wider block">
                Target Capaian:
              </span>
              <ul class="space-y-1.5 text-xs text-charcoal-800">
                <li
                  v-for="(comp, i) in previewNode.keyCompetencies.slice(0, 3)"
                  :key="i"
                  class="flex items-start gap-2"
                >
                  <CheckCircle2 class="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{{ comp }}</span>
                </li>
              </ul>
            </div>

            <!-- CTA Buka Modal Rincian Penuh -->
            <div class="pt-2 space-y-2">
              <button
                type="button"
                class="w-full py-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-sm font-medium shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                @click="openNodeDetail(previewNode)"
              >
                <span>Buka Silabus Lengkap</span>
                <ChevronRight class="w-4 h-4 text-gold-400" />
              </button>

              <p class="text-[11px] text-center text-charcoal-500">
                Tersedia sertifikasi & ujian sanad keilmuan setelah menyelesaikan tahapan ini.
              </p>
            </div>

          </div>

          <!-- Kotak Bantuan Tes Penempatan Level -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 to-navy-950 text-cream-100 border border-gold-500/30 space-y-3 shadow-md">
            <div class="flex items-center gap-2 text-gold-400 font-semibold text-xs uppercase tracking-wide">
              <HelpCircle class="w-4 h-4" />
              <span>Bingung Mulai Dari Mana?</span>
            </div>
            <p class="text-xs text-cream-200/90 leading-relaxed font-light">
              Ikuti <strong>Tes Penempatan Level (Tahdidul Mustawa)</strong> online gratis selama 10 menit untuk mengetahui tahapan yang paling sesuai dengan bekal keilmuan Anda saat ini.
            </p>
            <button
              type="button"
              class="w-full py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-emerald-950 font-bold text-xs shadow transition-colors cursor-pointer"
              @click="openNodeDetail(currentPath.nodes[0])"
            >
              Mulai Tes Penempatan Level Gratis
            </button>
          </div>

        </div>

      </div>

    </div>

    <!-- Modal Rincian Silabus Node Terpilih -->
    <RoadmapNodeModal
      :is-open="isNodeModalOpen"
      :node="selectedNode"
      @close="closeNodeDetail"
      @enroll-node="(node) => $emit('enroll-course', node.courseId)"
    />
  </section>
</template>
