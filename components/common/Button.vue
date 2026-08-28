<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  block?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  block: false
});

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
    :class="[
      block ? 'w-full' : '',
      size === 'sm' ? 'px-3.5 py-1.5 text-xs gap-1.5' : '',
      size === 'md' ? 'px-5 py-2.5 text-sm gap-2' : '',
      size === 'lg' ? 'px-6 py-3 text-base gap-2.5 shadow-md' : '',
      variant === 'primary' ? 'bg-emerald-900 text-cream-50 hover:bg-emerald-850 shadow-emerald-950/20 hover:shadow-lg' : '',
      variant === 'secondary' ? 'bg-navy-900 text-cream-50 hover:bg-navy-800 shadow-navy-950/20 hover:shadow-lg' : '',
      variant === 'gold' ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-emerald-950 font-semibold hover:brightness-105 shadow-gold-500/25 hover:shadow-gold-glow' : '',
      variant === 'outline' ? 'border border-emerald-900/30 text-emerald-900 hover:bg-emerald-900/5' : '',
      variant === 'ghost' ? 'text-charcoal-700 hover:text-emerald-900 hover:bg-emerald-900/5' : ''
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
