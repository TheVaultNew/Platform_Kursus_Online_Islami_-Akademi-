<script setup lang="ts">
import { ref, watch } from 'vue';
import { X, Sparkles, HeartHandshake, ArrowRight } from 'lucide-vue-next';

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', data: { name: string; email: string; category: string; reason: string }): void;
}>();

const formData = ref({
  name: '',
  email: '',
  category: 'santri',
  reason: ''
});

const isSubmitting = ref(false);

const resetForm = () => {
  formData.value = { name: '', email: '', category: 'santri', reason: '' };
  isSubmitting.value = false;
};

const handleClose = () => {
  resetForm();
  emit('close');
};

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.reason) {
    alert('Mohon lengkapi formulir pengajuan beasiswa Anda.');
    return;
  }

  isSubmitting.value = true;
  setTimeout(() => {
    emit('submit', { ...formData.value });
    resetForm();
  }, 600);
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
        v-if="isOpen"
        class="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Pengajuan Beasiswa Penuntut Ilmu"
      >
        <div class="fixed inset-0" @click="handleClose" />

        <div
          class="relative w-full max-w-lg bg-cream-50 rounded-2xl shadow-2xl border border-gold-500/40 overflow-hidden z-10 my-8"
        >
          <!-- Header -->
          <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-navy-900 text-cream-50 p-6 relative border-b border-gold-500/30">
            <button
              type="button"
              class="absolute top-5 right-5 p-1.5 rounded-full bg-emerald-900/80 text-cream-300 hover:text-cream-50 hover:bg-emerald-800 transition-colors"
              aria-label="Tutup formulir beasiswa"
              @click="handleClose"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="space-y-1">
              <div class="flex items-center gap-1.5 text-xs text-gold-400 font-semibold uppercase tracking-wider">
                <Sparkles class="w-4 h-4" />
                <span>Program Wakaf & Infaq Pendidikan</span>
              </div>
              <h3 class="font-display text-xl font-bold text-cream-50">
                Pengajuan Beasiswa Penuntut Ilmu 100%
              </h3>
              <p class="text-xs text-cream-200 font-light">
                Insya Allah biaya pendidikan Anda dibiayai penuh oleh para Muhsinin.
              </p>
            </div>
          </div>

          <!-- Form Body -->
          <form class="p-6 space-y-4" @submit.prevent="handleSubmit">
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Nama Lengkap *
              </label>
              <input
                v-model="formData.name"
                type="text"
                required
                placeholder="Nama Anda"
                class="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
              />
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Alamat Email Aktif *
              </label>
              <input
                v-model="formData.email"
                type="email"
                required
                placeholder="email.anda@domain.com"
                class="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
              />
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Kategori Pemohon Beasiswa
              </label>
              <select
                v-model="formData.category"
                class="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
              >
                <option value="santri">Santri Pondok Pesantren / Mahasiswa Syariah</option>
                <option value="hafizh">Penghafal Al-Qur'an (Hafizh / Hafizhah)</option>
                <option value="asatidz">Guru / Asatidz di Daerah Pelosok</option>
                <option value="dhuafa">Dhuafa / Yatim Berkeinginan Belajar</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Alasan & Komitmen Belajar *
              </label>
              <textarea
                v-model="formData.reason"
                required
                rows="3"
                placeholder="Ceritakan latar belakang Anda dan komitmen menyelesaikan pembelajaran..."
                class="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800 resize-none"
              />
            </div>

            <div class="pt-2 flex items-center gap-2 text-xs text-charcoal-600">
              <HeartHandshake class="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Verifikasi dilakukan oleh dewan musyrif dengan asas kejujuran dan amanah.</span>
            </div>

            <!-- Footer Buttons -->
            <div class="pt-3 border-t border-cream-200 flex items-center justify-end gap-3">
              <button
                type="button"
                class="px-4 py-2.5 rounded-xl border border-charcoal-300 text-charcoal-700 hover:bg-cream-200 text-xs font-medium cursor-pointer"
                @click="$emit('close')"
              >
                Batal
              </button>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="px-6 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-cream-50 text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <span v-if="!isSubmitting">Kirim Pengajuan</span>
                <span v-else>Mengirim...</span>
                <ArrowRight class="w-3.5 h-3.5 text-gold-400" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
