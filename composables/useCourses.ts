import { ref, computed } from 'vue';
import { COURSES_DATA, type Course } from '~/data/coursesData';

export function useCourses() {
  const searchQuery = ref('');
  const selectedCategory = ref<string>('all');
  const selectedLevel = ref<string>('all');
  const selectedFormat = ref<string>('all');
  const onlySanadCertified = ref(false);
  const sortBy = ref<'popular' | 'rating' | 'price-asc' | 'price-desc'>('popular');

  const selectedCourse = ref<Course | null>(null);
  const isDetailModalOpen = ref(false);

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'fiqih', label: 'Fiqih 4 Mazhab' },
    { id: 'bahasa-arab', label: 'Bahasa Arab' },
    { id: 'tafsir', label: 'Ulumul Qur\'an & Tafsir' },
    { id: 'hadits', label: 'Hadits & Sanad' },
    { id: 'sirah', label: 'Sirah & Peradaban' },
    { id: 'aqidah', label: 'Aqidah' },
    { id: 'muamalah', label: 'Muamalah & Fintech' }
  ];

  const levels = [
    { id: 'all', label: 'Semua Level' },
    { id: 'pemula', label: 'Pemula (Ibtida\'i)' },
    { id: 'menengah', label: 'Menengah (Mutawassith)' },
    { id: 'lanjutan', label: 'Lanjutan (Mutaqaddim)' }
  ];

  const filteredCourses = computed(() => {
    let result = [...COURSES_DATA];

    // Filter kategori
    if (selectedCategory.value !== 'all') {
      result = result.filter(c => c.category === selectedCategory.value);
    }

    // Filter level
    if (selectedLevel.value !== 'all') {
      result = result.filter(c => c.levelKey === selectedLevel.value);
    }

    // Filter sanad certified
    if (onlySanadCertified.value) {
      result = result.filter(c => c.isSanadCertified);
    }

    // Filter keyword pencarian
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim();
      result = result.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.arabicTitle.includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.instructorName.toLowerCase().includes(q) ||
        c.categoryName.toLowerCase().includes(q) ||
        c.turatsBookReference.toLowerCase().includes(q)
      );
    }

    // Pengurutan (Sorting)
    if (sortBy.value === 'popular') {
      result.sort((a, b) => b.enrolledCount - a.enrolledCount);
    } else if (sortBy.value === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy.value === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy.value === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  });

  const openCourseDetail = (course: Course) => {
    selectedCourse.value = course;
    isDetailModalOpen.value = true;
  };

  const closeCourseDetail = () => {
    isDetailModalOpen.value = false;
    selectedCourse.value = null;
  };

  const resetFilters = () => {
    searchQuery.value = '';
    selectedCategory.value = 'all';
    selectedLevel.value = 'all';
    selectedFormat.value = 'all';
    onlySanadCertified.value = false;
    sortBy.value = 'popular';
  };

  return {
    courses: COURSES_DATA,
    filteredCourses,
    searchQuery,
    selectedCategory,
    selectedLevel,
    selectedFormat,
    onlySanadCertified,
    sortBy,
    categories,
    levels,
    selectedCourse,
    isDetailModalOpen,
    openCourseDetail,
    closeCourseDetail,
    resetFilters
  };
}
