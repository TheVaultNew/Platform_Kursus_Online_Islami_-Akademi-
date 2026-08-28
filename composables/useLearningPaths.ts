import { ref, computed } from 'vue';
import { LEARNING_PATHS_DATA, type LearningPath, type RoadmapNode } from '~/data/learningPathsData';

/**
 * Composable untuk mengelola alur belajar (Learning Path) visual dan interaktif.
 * Mengontrol pemilihan jalur keilmuan, pemilihan node jenjang, dan modal detail kurikulum.
 */
export function useLearningPaths() {
  // Jalur aktif yang sedang dipilih oleh pengguna (default: Jalur Fiqih)
  const activePathId = ref<string>('path-fiqih');

  // Node (langkah/level) yang sedang dipilih untuk melihat detail rincian kurikulum & sanad
  const selectedNode = ref<RoadmapNode | null>(null);

  // Status pembukaan modal/drawer detail node
  const isNodeModalOpen = ref<boolean>(false);

  // Daftar semua jalur belajar yang tersedia
  const allPaths = LEARNING_PATHS_DATA;

  // Data jalur belajar yang sedang aktif sesuai activePathId
  const currentPath = computed<LearningPath>(() => {
    return allPaths.find(p => p.id === activePathId.value) || allPaths[0];
  });

  // Fungsi untuk mengganti jalur belajar (misal dari Fiqih ke Bahasa Arab)
  const selectPath = (pathId: string) => {
    activePathId.value = pathId;
    // Otomatis pilih node pertama sebagai default preview
    if (currentPath.value.nodes.length > 0) {
      selectedNode.value = currentPath.value.nodes[0];
    }
  };

  // Fungsi saat pengguna mengklik salah satu node visual di roadmap
  const openNodeDetail = (node: RoadmapNode) => {
    selectedNode.value = node;
    isNodeModalOpen.value = true;
  };

  // Fungsi untuk menutup modal/drawer detail node
  const closeNodeDetail = () => {
    isNodeModalOpen.value = false;
  };

  // Inisialisasi awal node terpilih
  if (!selectedNode.value && currentPath.value.nodes.length > 0) {
    selectedNode.value = currentPath.value.nodes[0];
  }

  return {
    allPaths,
    activePathId,
    currentPath,
    selectedNode,
    isNodeModalOpen,
    selectPath,
    openNodeDetail,
    closeNodeDetail
  };
}
