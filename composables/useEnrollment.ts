import { ref } from 'vue';
import type { Course } from '~/data/coursesData';
import type { PricingPlan } from '~/data/pricingData';

export function useEnrollment() {
  const isEnrollModalOpen = ref(false);
  const isScholarshipModalOpen = ref(false);
  const isSuccessNotificationOpen = ref(false);
  const successMessage = ref('');

  const enrolledTarget = ref<{
    type: 'course' | 'plan';
    title: string;
    price: number;
  } | null>(null);

  const openCourseEnrollment = (course: Course) => {
    enrolledTarget.value = {
      type: 'course',
      title: course.title,
      price: course.price
    };
    isEnrollModalOpen.value = true;
  };

  const openPlanEnrollment = (plan: PricingPlan, isAnnual: boolean = true) => {
    enrolledTarget.value = {
      type: 'plan',
      title: `Paket ${plan.name} (${isAnnual ? 'Tahunan' : 'Bulanan'})`,
      price: isAnnual ? plan.priceAnnual : plan.priceMonthly
    };
    isEnrollModalOpen.value = true;
  };

  const openScholarshipApplication = () => {
    isScholarshipModalOpen.value = true;
  };

  const closeModals = () => {
    isEnrollModalOpen.value = false;
    isScholarshipModalOpen.value = false;
    enrolledTarget.value = null;
  };

  const submitEnrollment = (formData: { name: string; email: string; phone: string; paymentMethod: string }) => {
    // Simulasi sukses
    isEnrollModalOpen.value = false;
    successMessage.value = `Alhamdulillah! Pendaftaran untuk "${enrolledTarget.value?.title}" atas nama ${formData.name} berhasil disiapkan. Informasi akses dikirim ke ${formData.email}.`;
    isSuccessNotificationOpen.value = true;
    setTimeout(() => {
      isSuccessNotificationOpen.value = false;
    }, 6000);
  };

  const submitScholarship = (formData: { name: string; email: string; reason: string; category: string }) => {
    isScholarshipModalOpen.value = false;
    successMessage.value = `Jazakallahu khair ${formData.name}. Pengajuan beasiswa penuntut ilmu Anda telah kami terima. Tim musyrif akan memverifikasi dalam 2x24 jam kerja.`;
    isSuccessNotificationOpen.value = true;
    setTimeout(() => {
      isSuccessNotificationOpen.value = false;
    }, 6000);
  };

  return {
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
  };
}
