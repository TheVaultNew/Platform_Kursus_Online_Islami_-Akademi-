<script setup lang="ts">
import { CheckCircle, X } from 'lucide-vue-next';

interface Props {
  show: boolean;
  message: string;
}

defineProps<Props>();
defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      role="alert"
      aria-live="assertive"
      class="fixed bottom-6 right-6 z-50 max-w-md w-full bg-emerald-950 text-cream-50 rounded-xl shadow-2xl border border-gold-500/40 p-4 flex items-start gap-3"
    >
      <div class="p-1 rounded-full bg-gold-500/20 text-gold-400 shrink-0 mt-0.5">
        <CheckCircle class="w-5 h-5" />
      </div>
      <div class="flex-1 text-sm leading-relaxed text-cream-100">
        {{ message }}
      </div>
      <button
        type="button"
        class="text-cream-300 hover:text-cream-50 p-1 transition-colors"
        aria-label="Tutup notifikasi"
        @click="$emit('close')"
      >
        <X class="w-4 h-4" />
      </button>
    </div>
  </Transition>
</template>
