<script setup lang="ts">
import { useEnrollment } from '~/composables/useEnrollment';
import type { Course } from '~/data/coursesData';
import type { PricingPlan } from '~/data/pricingData';
import { COURSES_DATA } from '~/data/coursesData';

// Import komponen-komponen halaman utama
import HeroEditorial from '~/components/hero/HeroEditorial.vue';
import LearningPathRoadmap from '~/components/roadmap/LearningPathRoadmap.vue';
import CourseCatalog from '~/components/catalog/CourseCatalog.vue';
import InstructorSection from '~/components/instructors/InstructorSection.vue';
import LearningMethodology from '~/components/methodology/LearningMethodology.vue';
import StudentTestimonials from '~/components/testimonials/StudentTestimonials.vue';
import StudentShowcase from '~/components/students/StudentShowcase.vue';
import PricingSection from '~/components/pricing/PricingSection.vue';
import IkhtilafPolicyCard from '~/components/ikhtilaf/IkhtilafPolicyCard.vue';
import EnrollmentModal from '~/components/pricing/EnrollmentModal.vue';
import ScholarshipModal from '~/components/pricing/ScholarshipModal.vue';
import NotificationToast from '~/components/common/NotificationToast.vue';

const {
  isEnrollModalOpen,
  isScholarshipModalOpen,
  isSuccessNotificationOpen,
  successMessage,
  enrolledTarget,
  openCourseEnrollment,
  openPlanEnrollment,
  openScholarshipApplication,
  closeModals,
  submitEnrollment,
  submitScholarship
} = useEnrollment();

// Handler untuk pencarian dari Hero
const handleHeroSearch = (query: string) => {
  const catalogElement = document.getElementById('katalog');
  if (catalogElement) {
    catalogElement.scrollIntoView({ behavior: 'smooth' });
  }
};

// Handler untuk eksplorasi pathway
const scrollToLearningPath = () => {
  const pathElement = document.getElementById('learning-path');
  if (pathElement) {
    pathElement.scrollIntoView({ behavior: 'smooth' });
  }
};

// Handler pendaftaran dari node roadmap
const handleEnrollNode = (courseId: string) => {
  const foundCourse = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];
  openCourseEnrollment(foundCourse);
};

// Setup JSON-LD Course & Educational Organization Schema untuk SEO
useHead({
  title: 'Darul Hikmah Academy - Platform Kursus Online Islami Bersanad',
  meta: [
    {
      name: 'description',
      content: 'Belajar Fiqih 4 Mazhab, Nahwu, Bahasa Arab, Tafsir, dan Hadits secara terstruktur dari pemula hingga bersanad di Darul Hikmah Academy.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'EducationalOrganization',
            '@id': 'https://darulhikmah.ac.id/#organization',
            name: 'Darul Hikmah Academy',
            url: 'https://darulhikmah.ac.id',
            logo: 'https://darulhikmah.ac.id/logo.png',
            description: 'Platform kursus online Islam ilmiah yang menyambungkan generasi kontemporer dengan sanad keilmuan para ulama salafus shalih.',
            sameAs: [
              'https://instagram.com/darulhikmah.academy',
              'https://youtube.com/@darulhikmah'
            ]
          },
          ...COURSES_DATA.map(course => ({
            '@type': 'Course',
            '@id': `https://darulhikmah.ac.id/kursus/${course.slug}`,
            name: course.title,
            description: course.shortDescription,
            provider: {
              '@type': 'Organization',
              name: 'Darul Hikmah Academy',
              sameAs: 'https://darulhikmah.ac.id'
            },
            instructor: {
              '@type': 'Person',
              name: course.instructorName,
              jobTitle: course.instructorTitle
            },
            offers: {
              '@type': 'Offer',
              price: course.price,
              priceCurrency: 'IDR',
              category: 'Paid',
              availability: 'https://schema.org/InStock'
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: `PT${course.durationHours}H`
            }
          }))
        ]
      })
    }
  ]
});
</script>

<template>
  <main>
    <!-- 1. Hero Editorial Section -->
    <HeroEditorial
      v-fade-scroll
      @search="handleHeroSearch"
      @explore-paths="scrollToLearningPath"
      @open-enrollment="openPlanEnrollment({ id: 'plan-pro', name: 'Santri Akademi', arabicName: 'طالب العلم', tagline: 'Paket Populer', priceMonthly: 199000, priceAnnual: 1499000, originalAnnualPrice: 2388000, isPopular: true, features: [], ctaText: 'Daftar', ctaAction: 'pro' }, true)"
    />

    <!-- 2. Signature Visual Learning Path Roadmap (Indonesian Comments Included) -->
    <LearningPathRoadmap
      v-fade-scroll
      @enroll-course="handleEnrollNode"
    />

    <!-- 3. Course Catalog with Multi-Filter & Modals -->
    <CourseCatalog
      v-fade-scroll
      @enroll-course="openCourseEnrollment"
    />

    <!-- 4. Pricing, Subscription & Scholarship Banner (Pilihan Paket Belajar) -->
    <PricingSection
      v-fade-scroll
      @select-plan="openPlanEnrollment"
      @open-scholarship="openScholarshipApplication"
    />

    <!-- 5. Instructors & Sanad Credential Section -->
    <InstructorSection v-fade-scroll />

    <!-- 6. Pedagogical Methodology -->
    <LearningMethodology v-fade-scroll />

    <!-- 7. Kepatuhan Lampiran C: Piagam Adab Ikhtilaf & Wasathiyah Fiqih -->
    <IkhtilafPolicyCard v-fade-scroll />

    <!-- 8. Karya dan Prestasi Siswa Santri -->
    <StudentShowcase v-fade-scroll />

    <!-- 9. Student Testimonials (Apa Kata Para Penuntut Ilmu?) -->
    <StudentTestimonials v-fade-scroll />

    <!-- Enrollment Modal -->
    <EnrollmentModal
      :is-open="isEnrollModalOpen"
      :target="enrolledTarget"
      @close="closeModals"
      @submit="submitEnrollment"
    />

    <!-- Scholarship Modal -->
    <ScholarshipModal
      :is-open="isScholarshipModalOpen"
      @close="closeModals"
      @submit="submitScholarship"
    />

    <!-- Notification Toast -->
    <NotificationToast
      :show="isSuccessNotificationOpen"
      :message="successMessage"
      @close="isSuccessNotificationOpen = false"
    />
  </main>
</template>
