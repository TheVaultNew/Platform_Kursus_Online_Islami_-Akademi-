<script setup lang="ts">
interface Props {
  variant?: 'emerald' | 'gold' | 'navy' | 'cream' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
}

withDefaults(defineProps<Props>(), {
  variant: 'emerald',
  size: 'sm'
});
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 font-medium rounded-full transition-colors"
    :class="[
      size === 'sm' ? 'px-2.5 py-0.5 text-xs' : '',
      size === 'md' ? 'px-3 py-1 text-xs' : '',
      size === 'lg' ? 'px-3.5 py-1.5 text-sm' : '',
      variant === 'emerald' ? 'bg-emerald-900 text-gold-400 border border-emerald-800' : '',
      variant === 'gold' ? 'bg-gold-500/15 text-gold-700 border border-gold-500/30' : '',
      variant === 'navy' ? 'bg-navy-900 text-cream-100 border border-navy-800' : '',
      variant === 'cream' ? 'bg-cream-200 text-charcoal-800 border border-cream-300' : '',
      variant === 'outline' ? 'bg-transparent text-emerald-900 border border-emerald-900/30' : '',
      variant === 'subtle' ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : ''
    ]"
  >
    <slot />
  </span>
</template>
