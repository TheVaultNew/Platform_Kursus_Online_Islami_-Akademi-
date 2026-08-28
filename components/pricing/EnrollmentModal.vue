<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import {
  X,
  Sparkles,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  QrCode,
  Building2,
  Clock,
  Download,
  MessageSquare,
  CheckCircle2,
  HelpCircle
} from 'lucide-vue-next';

interface Props {
  isOpen: boolean;
  target: {
    type: 'course' | 'plan';
    title: string;
    price: number;
  } | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', data: { name: string; email: string; phone: string; paymentMethod: string }): void;
}>();

// Step state: 1 = Form Pendaftaran, 2 = Checkout & Instruksi Pembayaran, 3 = Sukses / Akses Aktif
const currentStep = ref<1 | 2 | 3>(1);

const formData = ref({
  name: '',
  email: '',
  phone: '',
  paymentMethod: 'qris' as 'qris' | 'bva' | 'bsi' | 'cc'
});

const isProcessing = ref(false);
const isCopied = ref(false);
const orderId = ref('');
const orderDate = ref('');

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};

// Generate random invoice ID
const generateInvoice = () => {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  orderId.value = `DHA-${new Date().getFullYear()}-${randomNum}`;
  orderDate.value = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};

// Handle step 1 submit -> go to Step 2 (Checkout)
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

// Copy VA or Account Number to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2500);
};

// Finish checkout step -> Step 3
const completePayment = () => {
  isProcessing.value = true;
  setTimeout(() => {
    isProcessing.value = false;
    currentStep.value = 3;
    emit('submit', { ...formData.value });
  }, 800);
};

// Reset modal & form data
const resetForm = () => {
  currentStep.value = 1;
  formData.value = { name: '', email: '', phone: '', paymentMethod: 'qris' };
  isProcessing.value = false;
  isCopied.value = false;
  orderId.value = '';
};

const handleClose = () => {
  resetForm();
  emit('close');
};

// Auto reset whenever modal closes
watch(
  () => props.isOpen,
  (isOpen) => {
    if (!isOpen) {
      resetForm();
    }
  }
);

const getVaNumber = computed(() => {
  switch (formData.value.paymentMethod) {
    case 'bva':
      return '9881 2938 4810 2931';
    case 'bsi':
      return '711 2345 678';
    default:
      return '9881 2938 4810 2931';
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && target"
        class="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 lg:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="`Fitur Checkout ${target.title}`"
      >
        <div class="fixed inset-0" @click="handleClose" />

        <div
          class="relative w-full max-w-xl bg-cream-50 rounded-3xl shadow-2xl border border-gold-500/40 overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col"
        >
          <!-- Header Banner with Steps Progress -->
          <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-950 text-cream-50 p-5 sm:p-6 relative border-b border-gold-500/30 shrink-0">
            <button
              type="button"
              class="absolute top-4 right-4 p-2 rounded-full bg-emerald-900/80 text-cream-300 hover:text-cream-50 hover:bg-emerald-800 transition-colors cursor-pointer"
              aria-label="Tutup form"
              @click="handleClose"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="space-y-2 max-w-md pr-6">
              <div class="flex items-center gap-2">
                <!-- Step 1 Badge -->
                <span
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors"
                  :class="currentStep === 1 ? 'bg-gold-400 text-emerald-950 shadow' : 'bg-emerald-900/80 text-cream-200'"
                >
                  1. Data Santri
                </span>
                <span class="text-cream-400">➔</span>
                <!-- Step 2 Badge -->
                <span
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors"
                  :class="currentStep === 2 ? 'bg-gold-400 text-emerald-950 shadow' : 'bg-emerald-900/80 text-cream-200'"
                >
                  2. Checkout Pembayaran
                </span>
                <span class="text-cream-400">➔</span>
                <!-- Step 3 Badge -->
                <span
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors"
                  :class="currentStep === 3 ? 'bg-gold-400 text-emerald-950 shadow' : 'bg-emerald-900/80 text-cream-200'"
                >
                  3. Selesai
                </span>
              </div>

              <h3 class="font-display text-xl sm:text-2xl font-bold text-cream-50 leading-snug">
                <span v-if="currentStep === 1">Pendaftaran & Data Santri</span>
                <span v-else-if="currentStep === 2">Fitur Checkout & Pembayaran</span>
                <span v-else>Pendaftaran Berhasil!</span>
              </h3>

              <p class="text-xs text-cream-200/90 font-light truncate">
                {{ target.title }} • <strong class="text-gold-300 font-bold">{{ formatPrice(target.price) }}</strong>
              </p>
            </div>
          </div>

          <!-- ========================================================= -->
          <!-- STEP 1: FORM PENDAFTARAN AWAL                            -->
          <!-- ========================================================= -->
          <div v-if="currentStep === 1" class="p-5 sm:p-7 space-y-4 overflow-y-auto flex-1">
            <form class="space-y-4" @submit.prevent="proceedToCheckout">
              
              <div class="space-y-1.5">
                <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Nama Lengkap & Gelar (Tercetak di Ijazah Sanad / Sertifikat) *
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Ihsan, S.T."
                  class="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Alamat Email Aktif (Untuk Akun Portal Belajar) *
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="email.anda@domain.com"
                  class="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Nomor WhatsApp (Grup Halaqah & Notifikasi) *
                </label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  class="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>

              <!-- Pilihan Metode Pembayaran -->
              <div class="space-y-2 pt-1">
                <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Pilih Metode Pembayaran
                </label>
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  
                  <!-- QRIS -->
                  <label
                    class="p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                    :class="formData.paymentMethod === 'qris' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow-md' : 'bg-cream-100 border-cream-300 text-charcoal-800 hover:bg-cream-200/70'"
                  >
                    <input v-model="formData.paymentMethod" type="radio" value="qris" class="sr-only" />
                    <QrCode class="w-5 h-5 mb-1" :class="formData.paymentMethod === 'qris' ? 'text-gold-400' : 'text-emerald-900'" />
                    <span class="text-xs font-bold">QRIS Instan</span>
                    <span class="text-[10px] opacity-80">BCA / GoPay / OVO</span>
                  </label>

                  <!-- BSI / Bank Syariah -->
                  <label
                    class="p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                    :class="formData.paymentMethod === 'bsi' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow-md' : 'bg-cream-100 border-cream-300 text-charcoal-800 hover:bg-cream-200/70'"
                  >
                    <input v-model="formData.paymentMethod" type="radio" value="bsi" class="sr-only" />
                    <Building2 class="w-5 h-5 mb-1" :class="formData.paymentMethod === 'bsi' ? 'text-gold-400' : 'text-emerald-900'" />
                    <span class="text-xs font-bold">Bank Syariah (BSI)</span>
                    <span class="text-[10px] opacity-80">Transfer Manual/ATM</span>
                  </label>

                  <!-- Virtual Account -->
                  <label
                    class="p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                    :class="formData.paymentMethod === 'bva' ? 'bg-emerald-900 text-cream-50 border-emerald-900 ring-2 ring-gold-400 font-bold shadow-md' : 'bg-cream-100 border-cream-300 text-charcoal-800 hover:bg-cream-200/70'"
                  >
                    <input v-model="formData.paymentMethod" type="radio" value="bva" class="sr-only" />
                    <CreditCard class="w-5 h-5 mb-1" :class="formData.paymentMethod === 'bva' ? 'text-gold-400' : 'text-emerald-900'" />
                    <span class="text-xs font-bold">Virtual Account</span>
                    <span class="text-[10px] opacity-80">Mandiri / BRI / BCA</span>
                  </label>

                </div>
              </div>

              <div class="p-3 rounded-xl bg-cream-100 border border-cream-200 text-xs text-charcoal-700 flex items-center gap-2">
                <ShieldCheck class="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Transaksi syariah aman, terenkripsi, dan bergaransi 14 hari uang kembali.</span>
              </div>

              <!-- Action Submit to Step 2 (Checkout) -->
              <div class="pt-3 border-t border-cream-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  class="px-4 py-2.5 rounded-xl border border-charcoal-300 text-charcoal-700 hover:bg-cream-200 text-xs font-semibold cursor-pointer"
                  @click="handleClose"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  :disabled="isProcessing"
                  class="px-7 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 active:scale-95"
                >
                  <span v-if="!isProcessing">Lanjutkan Pembayaran</span>
                  <span v-else>Mempersiapkan Checkout...</span>
                  <ArrowRight class="w-4 h-4 text-gold-400" />
                </button>
              </div>

            </form>
          </div>

          <!-- ========================================================= -->
          <!-- STEP 2: FITUR CHECKOUT & INSTRUKSI PEMBAYARAN LANGSUNG   -->
          <!-- ========================================================= -->
          <div v-else-if="currentStep === 2" class="p-5 sm:p-7 space-y-5 overflow-y-auto flex-1">
            
            <!-- Invoice Header Bar -->
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

            <!-- Rincian Pesanan & Total Bayar -->
            <div class="p-4 rounded-2xl bg-cream-100/90 border border-cream-300 space-y-2 text-xs">
              <div class="flex items-center justify-between pb-2 border-b border-cream-200">
                <span class="text-charcoal-600">Santri Terdaftar:</span>
                <span class="font-bold text-emerald-950">{{ formData.name }} ({{ formData.email }})</span>
              </div>
              <div class="flex items-center justify-between pb-2 border-b border-cream-200">
                <span class="text-charcoal-600">Program / Kursus:</span>
                <span class="font-bold text-emerald-950">{{ target.title }}</span>
              </div>
              <div class="flex items-center justify-between pt-1 text-sm font-bold text-emerald-950">
                <span>Total Investasi Pendidikan:</span>
                <span class="font-display text-lg text-emerald-900">{{ formatPrice(target.price) }}</span>
              </div>
            </div>

            <!-- TAMPILAN SESUAI METODE BAYAR: -->

            <!-- 1. TAMPILAN QRIS INSTAN -->
            <div v-if="formData.paymentMethod === 'qris'" class="p-5 rounded-2xl bg-cream-100 border border-gold-500/40 text-center space-y-4">
              <div class="space-y-1">
                <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 font-bold text-[11px] uppercase tracking-wider shadow-sm">
                  QRIS Pembayaran Standar Bank Indonesia
                </span>
                <h4 class="font-display text-base font-bold text-emerald-950 pt-2">
                  Pindai QR Code di Bawah Ini:
                </h4>
                <p class="text-xs text-charcoal-600">
                  Buka aplikasi mobile banking (BCA, BSI, Mandiri) atau e-wallet (GoPay, OVO, ShopeePay, Dana).
                </p>
              </div>

              <!-- Mockup Visual Barcode QRIS Resmi -->
              <div class="inline-block p-4 bg-white rounded-2xl border-2 border-emerald-900 shadow-md">
                <div class="w-44 h-44 bg-charcoal-900 rounded-lg p-2 flex flex-col items-center justify-between text-white relative">
                  <!-- QR Pattern SVG Simulated Graphic -->
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
                    <path d="M40 35H60V42H40Z" fill="#1B4D3E" />
                    <path d="M35 55H65V62H35Z" fill="#1B4D3E" />
                    <path d="M45 70H55V85H45Z" fill="#1B4D3E" />
                  </svg>
                  <span class="text-[9px] font-bold text-gold-400 uppercase tracking-widest -mt-4 bg-emerald-950 px-2 py-0.5 rounded">
                    DARUL HIKMAH
                  </span>
                </div>
              </div>

              <div class="flex items-center justify-center gap-2 text-xs">
                <button
                  type="button"
                  class="px-4 py-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-charcoal-800 font-semibold flex items-center gap-1.5 cursor-pointer"
                  @click="copyToClipboard(orderId)"
                >
                  <Download class="w-3.5 h-3.5" />
                  <span>Simpan Gambar QRIS</span>
                </button>
              </div>
            </div>

            <!-- 2. TAMPILAN BANK SYARIAH (BSI) / VIRTUAL ACCOUNT -->
            <div v-else class="p-5 rounded-2xl bg-cream-100 border border-gold-500/40 space-y-4">
              <div class="space-y-1 text-center sm:text-left">
                <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 font-bold text-[11px] uppercase tracking-wider shadow-sm">
                  {{ formData.paymentMethod === 'bsi' ? 'Rekening Bank Syariah Indonesia (BSI)' : 'Nomor Virtual Account' }}
                </span>
                <h4 class="font-display text-base font-bold text-emerald-950 pt-2">
                  Silakan Transfer ke Nomor Berikut:
                </h4>
              </div>

              <!-- Box Nomor Rekening / VA -->
              <div class="p-4 rounded-xl bg-cream-50 border border-cream-300 flex items-center justify-between gap-3 shadow-inner">
                <div class="space-y-0.5">
                  <span class="text-[10px] uppercase font-bold text-charcoal-500">
                    {{ formData.paymentMethod === 'bsi' ? 'Nomor Rekening BSI' : 'Nomor Virtual Account' }}
                  </span>
                  <p class="font-mono text-lg sm:text-xl font-bold text-emerald-950 tracking-wider">
                    {{ getVaNumber }}
                  </p>
                  <p class="text-[11px] text-charcoal-600">a.n. <strong>Yayasan Darul Hikmah Akademi</strong></p>
                </div>

                <button
                  type="button"
                  class="px-3.5 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow transition-all active:scale-95 shrink-0"
                  @click="copyToClipboard(getVaNumber)"
                >
                  <Check v-if="isCopied" class="w-4 h-4 text-gold-400" />
                  <Copy v-else class="w-4 h-4" />
                  <span>{{ isCopied ? 'Tersalin!' : 'Salin Nomor' }}</span>
                </button>
              </div>

              <!-- Panduan Singkat Transfer -->
              <div class="text-xs text-charcoal-700 space-y-1.5 pl-1">
                <p class="font-bold text-emerald-950">Petunjuk Pembayaran:</p>
                <ol class="list-decimal list-inside space-y-1 text-charcoal-600 font-light">
                  <li>Buka aplikasi BSI Mobile / M-Banking / ATM Anda.</li>
                  <li>Pilih menu <strong>Transfer Antar Bank / Pembayaran Virtual Account</strong>.</li>
                  <li>Masukkan nominal tepat <strong>{{ formatPrice(target.price) }}</strong>.</li>
                  <li>Simpan bukti transfer dan klik tombol verifikasi di bawah.</li>
                </ol>
              </div>
            </div>

            <!-- Tombol Konfirmasi Selesai & WhatsApp Admin -->
            <div class="space-y-2 pt-2 border-t border-cream-200">
              <button
                type="button"
                :disabled="isProcessing"
                class="w-full py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                @click="completePayment"
              >
                <CheckCircle2 class="w-4 h-4 text-gold-400" />
                <span v-if="!isProcessing">Saya Sudah Bayar (Verifikasi Otomatis)</span>
                <span v-else>Memverifikasi Pembayaran...</span>
              </button>

              <div class="flex items-center justify-between gap-3 text-xs pt-1">
                <button
                  type="button"
                  class="text-charcoal-600 hover:text-emerald-900 flex items-center gap-1 font-semibold cursor-pointer"
                  @click="currentStep = 1"
                >
                  <ArrowLeft class="w-3.5 h-3.5" />
                  <span>Kembali ke Data Santri</span>
                </button>

                <a
                  :href="`https://wa.me/6281299008822?text=Assalamu'alaikum%20Admin,%20saya%20sudah%20melakukan%20pembayaran%20untuk%20invoice%20${orderId}%20atas%20nama%20${encodeURIComponent(formData.name)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-emerald-900 hover:text-gold-700 font-bold flex items-center gap-1 cursor-pointer underline"
                >
                  <MessageSquare class="w-3.5 h-3.5" />
                  <span>Konfirmasi via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          <!-- ========================================================= -->
          <!-- STEP 3: SUKSES & AKSES KELAS DIAKTIFKAN                   -->
          <!-- ========================================================= -->
          <div v-else class="p-6 sm:p-8 space-y-6 text-center overflow-y-auto flex-1">
            <div class="w-16 h-16 rounded-full bg-emerald-900 text-gold-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 class="w-10 h-10" />
            </div>

            <div class="space-y-2">
              <span class="px-3 py-1 rounded-full bg-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-wider">
                Alhamdulillah • Pendaftaran Berhasil
              </span>
              <h3 class="font-display text-2xl font-bold text-emerald-950">
                Ahlan wa Sahlan, {{ formData.name }}!
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light max-w-md mx-auto">
                Akses pembelajaran untuk <strong class="text-emerald-950 font-semibold">{{ target.title }}</strong> telah diaktifkan. Bukti pendaftaran dan link login portal telah dikirimkan ke <strong class="text-emerald-950">{{ formData.email }}</strong>.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-cream-100 border border-cream-300 text-xs text-left space-y-2 max-w-md mx-auto">
              <div class="flex items-center justify-between">
                <span class="text-charcoal-600">Nomor Registrasi:</span>
                <span class="font-mono font-bold text-emerald-950">{{ orderId }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-charcoal-600">Grup Halaqah:</span>
                <span class="font-semibold text-emerald-900">WhatsApp & Telegram Ikhwan/Akhwat</span>
              </div>
            </div>

            <div class="pt-2">
              <button
                type="button"
                class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 font-bold text-sm shadow-md transition-all cursor-pointer"
                @click="handleClose"
              >
                Masuk ke Ruang Belajar Santri
              </button>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
