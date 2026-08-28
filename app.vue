<script setup lang="ts">
import TopNotificationBar from '~/components/layout/TopNotificationBar.vue';
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';
import { useEnrollment } from '~/composables/useEnrollment';
import ScholarshipModal from '~/components/pricing/ScholarshipModal.vue';
import EnrollmentModal from '~/components/pricing/EnrollmentModal.vue';
import NotificationToast from '~/components/common/NotificationToast.vue';

const {
  isEnrollModalOpen,
  isScholarshipModalOpen,
  isSuccessNotificationOpen,
  successMessage,
  enrolledTarget,
  openPlanEnrollment,
  openScholarshipApplication,
  closeModals,
  submitEnrollment,
  submitScholarship
} = useEnrollment();

const handleNavbarEnroll = () => {
  openPlanEnrollment({
    id: 'plan-pro',
    name: 'Santri Akademi',
    arabicName: 'طالب العلم',
    tagline: 'Paket Populer',
    priceMonthly: 199000,
    priceAnnual: 1499000,
    originalAnnualPrice: 2388000,
    isPopular: true,
    features: [],
    ctaText: 'Daftar',
    ctaAction: 'pro'
  }, true);
};
</script>

<template>
  <div class="min-h-screen bg-cream-100 flex flex-col selection:bg-emerald-900 selection:text-gold-300">
    <!-- Top Announcement Bar -->
    <TopNotificationBar
      @open-scholarship="openScholarshipApplication"
    />

    <!-- Main Navigation Bar -->
    <Navbar
      @open-enrollment="handleNavbarEnroll"
    />

    <!-- Main Page View Content -->
    <div class="flex-1">
      <NuxtPage />
    </div>

    <!-- Global Footer -->
    <Footer />

    <!-- Global Enrollment Modal Triggered from Navbar -->
    <EnrollmentModal
      :is-open="isEnrollModalOpen"
      :target="enrolledTarget"
      @close="closeModals"
      @submit="submitEnrollment"
    />

    <!-- Global Scholarship Modal Triggered from Top Bar -->
    <ScholarshipModal
      :is-open="isScholarshipModalOpen"
      @close="closeModals"
      @submit="submitScholarship"
    />

    <!-- Global Toast Notification -->
    <NotificationToast
      :show="isSuccessNotificationOpen"
      :message="successMessage"
      @close="isSuccessNotificationOpen = false"
    />
  </div>
</template>
