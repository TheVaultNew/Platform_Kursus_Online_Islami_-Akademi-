<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  Sparkles,
  User,
  Mail,
  Phone,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  QrCode,
  Building2,
  CreditCard,
  Clock,
  Download,
  MessageSquare,
  Award,
  HeartHandshake
} from 'lucide-vue-next';
import { COURSES_DATA } from '~/data/coursesData';

// SEO Meta
useHead({
  title: 'Pendaftaran Santri Baru — Darul Hikmah Academy',
  meta: [
    {
      name: 'description',
      content: 'Formulir pendaftaran resmi santri baru Darul Hikmah Academy. Pilih program kursus fiqih 4 mazhab, bahasa Arab, tafsir, atau ajukan beasiswa 100%.'
    }
  ]
});

// Step state: 1 = Form Pendaftaran, 2 = Checkout, 3 = Sukses
const currentStep = ref<1 | 2 | 3>(1);

const formData = ref({
  programType: 'course' as 'course' | 'annual' | 'scholarship',
  selectedCourseId: 'c-fiqih-01',
  name: '',
  email: '',
  phone: '',
  city: '',
  paymentMethod: 'qris' as 'qris' | 'bsi' | 'bva',
  scholarshipReason: ''
});

const isProcessing = ref(false);
const isCopied = ref(false);
const orderId = ref('');
const orderDate = ref('');

const selectedCourse = computed(() => {
  return COURSES_DATA.find(c => c.id === formData.value.selectedCourseId) || COURSES_DATA[0];
});

const calculatedPrice = computed(() => {
  if (formData.value.programType === 'scholarship') return 0;
  if (formData.value.programType === 'annual') return 1499000;
  return selectedCourse.value.price;
});

const formatPrice = (price: number) => {
  if (price === 0) return 'GRATIS (Beasiswa 100%)';
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};

// Generate Invoice
const generateInvoice = () => {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  orderId.value = `DHA-${new Date().getFullYear()}-${randomNum}`;
  orderDate.value = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};

// Proceed from Step 1 to Step 2
const proceedToCheckout = () => {
  if (!formData.value.name.trim() || !formData.value.email.trim() || !formData.value.phone.trim()) {
    alert('Mohon lengkapi Nama Lengkap, Email, dan Nomor WhatsApp Anda.');
    return;
  }

  isProcessing.value = true;
  generateInvoice();

  setTimeout(() => {
    isProcessing.value = false;
    currentStep.value = 2;
  }, 400);
};

// Copy VA Number
const copyToClipboard = (text: string) => {
  if (typeof navigator !== 'undefined') {
    navigator.clipboard.writeText(text);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2500);
  }
};

// Complete registration
const completeRegistration = () => {
  isProcessing.value = true;
  setTimeout(() => {
    isProcessing.value = false;
    currentStep.value = 3;
  }, 800);
};

// Auto reset form data
const resetForm = () => {
  formData.value = {
    programType: 'course',
    selectedCourseId: 'c-fiqih-01',
    name: '',
    email: '',
    phone: '',
    city: '',
    paymentMethod: 'qris',
    scholarshipReason: ''
  };
  orderId.value = '';
  isProcessing.value = false;
  isCopied.value = false;
  currentStep.value = 1;
};

const getVaNumber = computed(() => {
  if (formData.value.paymentMethod === 'bsi') return '711 2345 678';
  return '9881 2938 4810 2931';
});
</script>

<template>
  <div v-fade-scroll class="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full selection:bg-gold-500/30 selection:text-emerald-950 font-sans">
    
    <!-- Step Tracker Bar -->
    <div class="mb-8 p-3.5 sm:p-5 rounded-3xl bg-cream-50 border border-cream-300 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs sm:text-sm">
      <!-- Step Indicator: Responsive Progress Steps -->
      <div class="flex items-center gap-1 sm:gap-2">
        <!-- Step 1 -->
        <div class="flex items-center gap-1.5 min-w-0">
          <span
            class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 transition-colors"
            :class="currentStep === 1 ? 'bg-emerald-900 text-cream-50 shadow' : currentStep > 1 ? 'bg-emerald-700 text-gold-300' : 'bg-cream-200 text-charcoal-700'"
          >
            {{ currentStep > 1 ? '✓' : '1' }}
          </span>
          <span
            class="text-[11px] sm:text-xs font-bold transition-colors whitespace-nowrap"
            :class="currentStep === 1 ? 'text-emerald-950 font-extrabold' : currentStep > 1 ? 'text-emerald-800' : 'text-charcoal-500'"
          >
            <span class="hidden sm:inline">Data &amp; Pilihan Program</span>
            <span class="sm:hidden">Data &amp; Program</span>
          </span>
        </div>

        <!-- Arrow 1→2 -->
        <span class="text-charcoal-400 text-xs shrink-0">›</span>

        <!-- Step 2 -->
        <div class="flex items-center gap-1.5 min-w-0">
          <span
            class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 transition-colors"
            :class="currentStep === 2 ? 'bg-emerald-900 text-cream-50 shadow' : currentStep > 2 ? 'bg-emerald-700 text-gold-300' : 'bg-cream-200 text-charcoal-700'"
          >
            {{ currentStep > 2 ? '✓' : '2' }}
          </span>
          <span
            class="text-[11px] sm:text-xs font-bold transition-colors whitespace-nowrap"
            :class="currentStep === 2 ? 'text-emerald-950 font-extrabold' : currentStep > 2 ? 'text-emerald-800' : 'text-charcoal-500'"
          >
            <span class="hidden sm:inline">Checkout Pembayaran</span>
            <span class="sm:hidden">Checkout</span>
          </span>
        </div>

        <!-- Arrow 2→3 -->
        <span class="text-charcoal-400 text-xs shrink-0">›</span>

        <!-- Step 3 -->
        <div class="flex items-center gap-1.5 min-w-0">
          <span
            class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 transition-colors"
            :class="currentStep === 3 ? 'bg-emerald-900 text-cream-50 shadow' : 'bg-cream-200 text-charcoal-700'"
          >
            {{ currentStep === 3 ? '✓' : '3' }}
          </span>
          <span
            class="text-[11px] sm:text-xs font-bold transition-colors whitespace-nowrap"
            :class="currentStep === 3 ? 'text-emerald-950 font-extrabold' : 'text-charcoal-500'"
          >
            <span class="hidden sm:inline">Akses Aktif</span>
            <span class="sm:hidden">Aktif</span>
          </span>
        </div>
      </div>

      <!-- Login Link -->
      <NuxtLink
        to="/login"
        class="text-emerald-900 font-bold hover:text-gold-700 underline text-xs pt-2.5 md:pt-0 border-t md:border-t-0 border-cream-200/80 inline-flex items-center gap-1 transition-colors"
      >
        <span>Sudah pernah daftar? Masuk ke Mulai Belajar</span>
        <span class="text-gold-600 font-bold">→</span>
      </NuxtLink>
    </div>

    <!-- ========================================================= -->
    <!-- STEP 1: FORMULIR PENDAFTARAN SANTRI BARU                  -->
    <!-- ========================================================= -->
    <div v-if="currentStep === 1" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left: Form Input -->
      <div class="lg:col-span-8 bg-cream-50 p-6 sm:p-9 rounded-3xl border border-cream-300 shadow-xl space-y-6">
        
        <div class="space-y-1.5 border-b border-cream-300 pb-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-3.5 h-3.5" />
            <span>Pendaftaran Santri Baru</span>
          </div>
          <h1 class="font-display text-2xl sm:text-3xl font-bold text-emerald-950">
            Formulir Pendaftaran Akademi
          </h1>
          <p class="text-xs sm:text-sm text-charcoal-600">
            Lengkapi identitas Anda untuk penerbitan akun portal santri dan silsilah sanad keilmuan.
          </p>
        </div>

        <form class="space-y-5" @submit.prevent="proceedToCheckout">
          
          <!-- Pilihan Jalur Program -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
              1. Pilih Jalur Pendaftaran *
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label
                class="p-3.5 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all"
                :class="formData.programType === 'course' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow-md' : 'bg-cream-100 border-cream-300 text-charcoal-800 hover:bg-cream-200'"
              >
                <input v-model="formData.programType" type="radio" value="course" class="sr-only" />
                <div class="space-y-1">
                  <span class="text-xs font-bold block">Kursus Satuan</span>
                  <span class="text-[11px] opacity-80 block">Pilih 1 materi kajian spesifik</span>
                </div>
                <span class="text-xs text-gold-400 font-bold mt-2">Mulai Rp 249rb</span>
              </label>

              <label
                class="p-3.5 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all"
                :class="formData.programType === 'annual' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow-md' : 'bg-cream-100 border-cream-300 text-charcoal-800 hover:bg-cream-200'"
              >
                <input v-model="formData.programType" type="radio" value="annual" class="sr-only" />
                <div class="space-y-1">
                  <span class="text-xs font-bold block">Paket Tahunan</span>
                  <span class="text-[11px] opacity-80 block">Akses seluruh kursus 1 tahun</span>
                </div>
                <span class="text-xs text-gold-400 font-bold mt-2">Rp 1.499.000 / thn</span>
              </label>

              <label
                class="p-3.5 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all"
                :class="formData.programType === 'scholarship' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow-md' : 'bg-cream-100 border-cream-300 text-charcoal-800 hover:bg-cream-200'"
              >
                <input v-model="formData.programType" type="radio" value="scholarship" class="sr-only" />
                <div class="space-y-1">
                  <span class="text-xs font-bold block">Beasiswa 100%</span>
                  <span class="text-[11px] opacity-80 block">Khusus dhuafa & hafidz Qur'an</span>
                </div>
                <span class="text-xs text-gold-400 font-bold mt-2">GRATIS 100%</span>
              </label>
            </div>
          </div>

          <!-- Dropdown Pilihan Kursus jika pilih kursus satuan -->
          <div v-if="formData.programType === 'course'" class="space-y-1.5">
            <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
              Pilih Materi Kursus yang Ingin Dipelajari *
            </label>
            <select
              v-model="formData.selectedCourseId"
              class="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-800"
            >
              <option v-for="course in COURSES_DATA" :key="course.id" :value="course.id">
                {{ course.title }} — {{ formatPrice(course.price) }}
              </option>
            </select>
          </div>

          <!-- Input Identitas Santri -->
          <div class="space-y-4 pt-2">
            <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider border-b border-cream-300 pb-1">
              2. Data Pribadi Santri
            </label>

            <div class="space-y-1.5">
              <label class="block text-xs font-medium text-charcoal-800">
                Nama Lengkap & Gelar (Tercetak di Ijazah Sanad) *
              </label>
              <div class="relative">
                <User class="w-4 h-4 text-emerald-900 absolute left-3.5 top-3.5" />
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Ihsan, S.T."
                  class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div class="space-y-1.5">
                <label class="block text-xs font-medium text-charcoal-800">
                  Alamat Email Aktif (Akun Belajar) *
                </label>
                <div class="relative">
                  <Mail class="w-4 h-4 text-emerald-900 absolute left-3.5 top-3.5" />
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    placeholder="email@anda.com"
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-medium text-charcoal-800">
                  Nomor WhatsApp Aktif *
                </label>
                <div class="relative">
                  <Phone class="w-4 h-4 text-emerald-900 absolute left-3.5 top-3.5" />
                  <input
                    v-model="formData.phone"
                    type="tel"
                    required
                    placeholder="081234567890"
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Pilihan Metode Bayar (jika bukan beasiswa) -->
          <div v-if="formData.programType !== 'scholarship'" class="space-y-2 pt-2">
            <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
              3. Pilih Metode Pembayaran
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <label
                class="p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                :class="formData.paymentMethod === 'qris' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow' : 'bg-cream-100 border-cream-300 text-charcoal-700'"
              >
                <input v-model="formData.paymentMethod" type="radio" value="qris" class="sr-only" />
                <QrCode class="w-4 h-4 mb-1" :class="formData.paymentMethod === 'qris' ? 'text-gold-400' : 'text-emerald-900'" />
                <span class="text-xs font-bold">QRIS Instan</span>
              </label>

              <label
                class="p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                :class="formData.paymentMethod === 'bsi' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow' : 'bg-cream-100 border-cream-300 text-charcoal-700'"
              >
                <input v-model="formData.paymentMethod" type="radio" value="bsi" class="sr-only" />
                <Building2 class="w-4 h-4 mb-1" :class="formData.paymentMethod === 'bsi' ? 'text-gold-400' : 'text-emerald-900'" />
                <span class="text-xs font-bold">Bank BSI</span>
              </label>

              <label
                class="p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                :class="formData.paymentMethod === 'bva' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow' : 'bg-cream-100 border-cream-300 text-charcoal-700'"
              >
                <input v-model="formData.paymentMethod" type="radio" value="bva" class="sr-only" />
                <CreditCard class="w-4 h-4 mb-1" :class="formData.paymentMethod === 'bva' ? 'text-gold-400' : 'text-emerald-900'" />
                <span class="text-xs font-bold">Virtual Account</span>
              </label>
            </div>
          </div>

          <!-- Submit Button Action Row -->
          <div class="pt-4 border-t border-cream-300 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
            <NuxtLink
              to="/"
              class="text-xs font-semibold text-charcoal-700 hover:text-emerald-900 text-center sm:text-left py-2 sm:py-0 px-3 sm:px-0 rounded-xl hover:bg-cream-200/60 sm:hover:bg-transparent transition-colors inline-flex items-center justify-center sm:justify-start gap-1"
            >
              <span>←</span>
              <span>Batal &amp; Kembali</span>
            </NuxtLink>

            <button
              type="submit"
              :disabled="isProcessing"
              class="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <span v-if="!isProcessing">Lanjutkan ke Pembayaran</span>
              <span v-else>Mempersiapkan Checkout...</span>
              <ArrowRight class="w-4 h-4 text-gold-400 shrink-0" />
            </button>
          </div>

        </form>

      </div>

      <!-- Right: Summary Sidebar Card with High Contrast -->
      <div class="lg:col-span-4 bg-gradient-to-br from-emerald-950 via-emerald-900 to-navy-950 text-white p-6 sm:p-7 rounded-3xl border-2 border-gold-400/70 shadow-2xl space-y-5 relative overflow-hidden bg-arabesque-dark">
        <div class="absolute -right-12 -top-12 w-44 h-44 bg-gold-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div class="space-y-2.5">
          <span class="px-3.5 py-1 rounded-full bg-gold-400 text-emerald-950 text-xs font-bold uppercase tracking-wider shadow-md inline-block">
            Ringkasan Investasi
          </span>
          <h3 class="font-display text-xl font-extrabold text-white leading-snug drop-shadow-sm">
            {{ formData.programType === 'annual' ? 'Paket Santri Tahunan' : (formData.programType === 'scholarship' ? 'Beasiswa Penuh 100%' : selectedCourse.title) }}
          </h3>
        </div>

        <!-- Investment Details Box -->
        <div class="p-4 rounded-2xl bg-emerald-900/95 border border-gold-400/50 space-y-3 text-xs shadow-inner">
          <div class="flex items-center justify-between">
            <span class="text-white font-medium">Jenis Pendaftaran:</span>
            <span class="px-2.5 py-0.5 rounded-full bg-gold-400 text-emerald-950 font-bold text-[11px] uppercase tracking-wider shadow-sm">
              {{ formData.programType === 'annual' ? 'Tahunan' : (formData.programType === 'scholarship' ? 'Beasiswa' : 'Kursus Satuan') }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-white font-medium">Sertifikat Sanad:</span>
            <span class="text-gold-300 font-bold flex items-center gap-1 text-xs">
              <CheckCircle2 class="w-3.5 h-3.5 text-gold-400" />
              <span>Termasuk Ijazah</span>
            </span>
          </div>

          <div class="pt-2.5 border-t border-emerald-800 flex items-baseline justify-between">
            <span class="text-white font-bold text-sm">Total Investasi:</span>
            <span class="font-display text-2xl font-extrabold text-gold-300 drop-shadow">
              {{ formatPrice(calculatedPrice) }}
            </span>
          </div>
        </div>

        <!-- High-contrast Benefits List -->
        <div class="space-y-2.5 text-xs text-white font-medium">
          <div class="p-3 rounded-xl bg-emerald-900/90 border border-gold-400/40 flex items-center gap-3 shadow-sm">
            <CheckCircle2 class="w-4 h-4 text-gold-400 shrink-0" />
            <span class="text-white">Akses video materi rekaman selamanya</span>
          </div>

          <div class="p-3 rounded-xl bg-emerald-900/90 border border-gold-400/40 flex items-center gap-3 shadow-sm">
            <CheckCircle2 class="w-4 h-4 text-gold-400 shrink-0" />
            <span class="text-white">Halaqah live mingguan bersama Asatidz</span>
          </div>

          <div class="p-3 rounded-xl bg-emerald-900/90 border border-gold-400/40 flex items-center gap-3 shadow-sm">
            <ShieldCheck class="w-4 h-4 text-gold-400 shrink-0" />
            <span class="text-white">Garansi 14 hari uang kembali tanpa syarat</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ========================================================= -->
    <!-- STEP 2: FITUR CHECKOUT & INSTRUKSI PEMBAYARAN LANGSUNG   -->
    <!-- ========================================================= -->
    <div v-else-if="currentStep === 2" class="max-w-2xl mx-auto bg-cream-50 p-6 sm:p-9 rounded-3xl border border-cream-300 shadow-2xl space-y-6">
      
      <!-- Invoice Header -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-cream-100 to-cream-200 border border-cream-300 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div>
          <span class="text-charcoal-500 block text-[10px] uppercase font-bold tracking-wider">Nomor Tagihan (Invoice):</span>
          <span class="font-mono font-bold text-emerald-950 text-sm">{{ orderId }}</span>
        </div>

        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-900 font-semibold">
          <Clock class="w-3.5 h-3.5 text-gold-700" />
          <span>Batas Waktu: <strong>23:59:45</strong></span>
        </div>
      </div>

      <!-- Detail Pesanan -->
      <div class="p-4 rounded-2xl bg-cream-100 border border-cream-300 space-y-2 text-xs">
        <div class="flex items-center justify-between pb-2 border-b border-cream-200">
          <span class="text-charcoal-600">Santri:</span>
          <span class="font-bold text-emerald-950">{{ formData.name }} ({{ formData.email }})</span>
        </div>
        <div class="flex items-center justify-between pb-2 border-b border-cream-200">
          <span class="text-charcoal-600">Program:</span>
          <span class="font-bold text-emerald-950">{{ formData.programType === 'annual' ? 'Paket Tahunan Akademi' : selectedCourse.title }}</span>
        </div>
        <div class="flex items-center justify-between pt-1 text-sm font-bold text-emerald-950">
          <span>Total Pembayaran:</span>
          <span class="font-display text-lg text-emerald-900">{{ formatPrice(calculatedPrice) }}</span>
        </div>
      </div>

      <!-- Tampilan Metode Bayar: QRIS atau BSI / VA -->
      <div v-if="formData.paymentMethod === 'qris' && formData.programType !== 'scholarship'" class="p-6 rounded-2xl bg-cream-100 border border-gold-500/40 text-center space-y-4">
        <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 font-bold text-[11px] uppercase tracking-wider">
          QRIS Standar Bank Indonesia
        </span>
        <h4 class="font-display text-base font-bold text-emerald-950 pt-2">
          Pindai QR Code di Bawah Ini:
        </h4>

        <!-- Mockup QR Code -->
        <div class="inline-block p-4 bg-white rounded-2xl border-2 border-emerald-900 shadow-md">
          <div class="w-44 h-44 bg-charcoal-900 rounded-lg p-2 flex flex-col items-center justify-between text-white relative">
            <svg class="w-full h-full text-white" viewBox="0 0 100 100" fill="currentColor">
              <rect x="5" y="5" width="25" height="25" fill="#1B4D3E" />
              <rect x="9" y="9" width="17" height="17" fill="white" />
              <rect x="13" y="13" width="9" height="9" fill="#1B4D3E" />
              <rect x="70" y="5" width="25" height="25" fill="#1B4D3E" />
              <rect x="74" y="9" width="17" height="17" fill="white" />
              <rect x="78" y="13" width="9" height="9" fill="#1B4D3E" />
              <rect x="5" y="70" width="25" height="25" fill="#1B4D3E" />
              <rect x="9" y="74" width="17" height="17" fill="white" />
              <rect x="13" y="78" width="9" height="9" fill="#1B4D3E" />
              <circle cx="50" cy="50" r="10" fill="#C9A227" />
            </svg>
            <span class="text-[9px] font-bold text-gold-400 uppercase tracking-widest -mt-4 bg-emerald-950 px-2 py-0.5 rounded">
              DARUL HIKMAH
            </span>
          </div>
        </div>
      </div>

      <div v-else-if="formData.programType !== 'scholarship'" class="p-5 rounded-2xl bg-cream-100 border border-gold-500/40 space-y-4">
        <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 font-bold text-[11px] uppercase tracking-wider">
          {{ formData.paymentMethod === 'bsi' ? 'Rekening Bank Syariah Indonesia (BSI)' : 'Nomor Virtual Account' }}
        </span>
        
        <div class="p-4 rounded-xl bg-cream-50 border border-cream-300 flex items-center justify-between gap-3 shadow-inner">
          <div class="space-y-0.5">
            <span class="text-[10px] uppercase font-bold text-charcoal-500">Nomor Rekening / VA:</span>
            <p class="font-mono text-xl font-bold text-emerald-950">{{ getVaNumber }}</p>
            <p class="text-xs text-charcoal-600">a.n. <strong>Yayasan Darul Hikmah Akademi</strong></p>
          </div>

          <button
            type="button"
            class="px-4 py-2 rounded-xl bg-emerald-900 text-cream-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            @click="copyToClipboard(getVaNumber)"
          >
            <Check v-if="isCopied" class="w-4 h-4 text-gold-400" />
            <Copy v-else class="w-4 h-4" />
            <span>{{ isCopied ? 'Tersalin!' : 'Salin' }}</span>
          </button>
        </div>
      </div>

      <div v-else class="p-5 rounded-2xl bg-cream-100 border border-gold-500/40 text-center space-y-2">
        <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 font-bold text-xs uppercase">
          Program Wakaf Beasiswa 100%
        </span>
        <p class="text-xs text-charcoal-700 pt-2">
          Pendaftaran Anda didanai penuh oleh Infaq & Wakaf Muhsinin. Tidak ada biaya yang perlu dibayarkan.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-3 pt-3 border-t border-cream-200">
        <button
          type="button"
          :disabled="isProcessing"
          class="w-full py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
          @click="completeRegistration"
        >
          <CheckCircle2 class="w-4 h-4 text-gold-400" />
          <span v-if="!isProcessing">Saya Sudah Bayar (Aktivasi Akses)</span>
          <span v-else>Memverifikasi Pendaftaran...</span>
        </button>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs pt-1">
          <button
            type="button"
            class="text-charcoal-600 hover:text-emerald-900 font-semibold cursor-pointer py-1.5 px-3 rounded-lg hover:bg-cream-200/60 w-full sm:w-auto text-center sm:text-left transition-colors"
            @click="currentStep = 1"
          >
            ← Ubah Data Pendaftaran
          </button>

          <a
            :href="`https://wa.me/6281299008822?text=Assalamu'alaikum%20Admin,%20saya%20sudah%20mendaftar%20invoice%20${orderId}%20atas%20nama%20${encodeURIComponent(formData.name)}`"
            target="_blank"
            rel="noopener noreferrer"
            class="text-emerald-900 font-bold underline flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg hover:bg-emerald-900/5 w-full sm:w-auto text-center transition-colors"
          >
            <MessageSquare class="w-3.5 h-3.5" />
            <span>Konfirmasi WhatsApp Admin</span>
          </a>
        </div>
      </div>

    </div>

    <!-- ========================================================= -->
    <!-- STEP 3: PENDAFTARAN SELESAI & AKSES DIAKTIFKAN            -->
    <!-- ========================================================= -->
    <div v-else class="max-w-xl mx-auto bg-cream-50 p-8 sm:p-10 rounded-3xl border border-cream-300 shadow-2xl text-center space-y-6">
      <div class="w-16 h-16 rounded-full bg-emerald-900 text-gold-400 flex items-center justify-center mx-auto shadow-lg">
        <CheckCircle2 class="w-10 h-10" />
      </div>

      <div class="space-y-2">
        <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-wider">
          Alhamdulillah • Pendaftaran Berhasil
        </span>
        <h2 class="font-display text-2xl sm:text-3xl font-bold text-emerald-950">
          Ahlan wa Sahlan, {{ formData.name }}!
        </h2>
        <p class="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
          Akun santri Anda telah terdaftar dengan Nomor Induk Santri (NIS): <strong class="text-emerald-950 font-mono">{{ orderId }}</strong>. Bukti invoice dan link login ruang belajar telah dikirimkan ke <strong class="text-emerald-950">{{ formData.email }}</strong>.
        </p>
      </div>

      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <NuxtLink
          to="/login"
          class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 font-bold text-sm shadow-md transition-all text-center"
        >
          Masuk ke Ruang Belajar Santri
        </NuxtLink>

        <button
          type="button"
          class="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-emerald-900 text-emerald-900 hover:bg-cream-200 text-sm font-semibold transition-colors cursor-pointer text-center"
          @click="resetForm"
        >
          + Daftar Santri / Program Lain
        </button>

        <NuxtLink
          to="/"
          class="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-charcoal-300 text-charcoal-700 hover:bg-cream-200 text-sm font-semibold transition-colors text-center"
        >
          Kembali ke Beranda
        </NuxtLink>
      </div>
    </div>

  </div>
</template>
