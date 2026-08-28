<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X, BookOpen, Compass, Award, BookMarked, Sparkles, UserCheck } from 'lucide-vue-next';

defineProps<{
  isScrolled?: boolean;
}>();

defineEmits<{
  (e: 'open-enrollment'): void;
}>();

const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Katalog Kursus', href: '/#katalog', icon: BookOpen },
  { name: 'Learning Path', href: '/#learning-path', icon: Compass, badge: 'Roadmap' },
  { name: 'Asatidz & Sanad', href: '/#pengajar', icon: Award },
  { name: 'Metode Belajar', href: '/#metode', icon: BookMarked },
  { name: 'Biaya & Beasiswa', href: '/#harga', icon: Sparkles },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full bg-cream-50/95 backdrop-blur-md border-b border-cream-200 shadow-sm"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Horizontal Mendatar Bar -->
      <div class="flex items-center justify-between h-18 sm:h-20 gap-4">
        
        <!-- Left: Logo & Brand (Mendatar / Single Horizontal Row) -->
        <NuxtLink to="/" class="flex items-center gap-3 shrink-0 group focus-visible:outline-none">
          <div class="w-10 h-10 rounded-xl bg-emerald-900 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-md group-hover:scale-105 transition-transform">
            <!-- Islamic Geometric Octagram Icon -->
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 2L15 5H19V9L22 12L19 15V19H15L12 22L9 19H5V15L2 12L5 9V5H9L12 2Z" />
              <circle cx="12" cy="12" r="3" fill="currentColor" fill-opacity="0.3" />
            </svg>
          </div>
          <div class="flex flex-col -space-y-1">
            <span class="font-display text-lg sm:text-xl font-bold tracking-tight text-emerald-950 leading-tight">
              Darul Hikmah
            </span>
            <span class="font-serif italic text-xs sm:text-sm text-gold-600 font-medium tracking-wider">
              Academy
            </span>
          </div>
        </NuxtLink>

        <!-- Center: Horizontal Navigation Links (Mendatar) -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="px-3 py-2 rounded-lg text-xs xl:text-sm font-medium text-charcoal-800 hover:text-emerald-900 hover:bg-emerald-900/5 transition-all flex items-center gap-1.5 whitespace-nowrap group"
          >
            <span>{{ link.name }}</span>
            <span
              v-if="link.badge"
              class="px-1.5 py-0.2 text-[10px] uppercase font-bold rounded bg-gold-500/20 text-gold-800 tracking-wider"
            >
              {{ link.badge }}
            </span>
          </NuxtLink>
        </nav>

        <!-- Right: Action Buttons -->
        <div class="flex items-center gap-2 shrink-0">
          <!-- Daftar link: hanya di sm+ -->
          <NuxtLink
            to="/register"
            class="hidden sm:inline-flex px-4 py-2 text-xs xl:text-sm font-bold text-emerald-900 hover:text-emerald-850 hover:bg-emerald-900/10 rounded-xl transition-colors whitespace-nowrap"
          >
            Daftar
          </NuxtLink>

          <!-- CTA Mulai Belajar: selalu tampil tapi di mobile lebih kecil -->
          <NuxtLink
            to="/login"
            class="hidden sm:flex px-4 xl:px-5 py-2.5 rounded-xl bg-emerald-900 text-cream-50 hover:bg-emerald-850 text-xs xl:text-sm font-semibold shadow-md shadow-emerald-950/15 hover:shadow-lg transition-all items-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <Sparkles class="w-4 h-4 text-gold-400 shrink-0" />
            <span>Mulai Belajar</span>
          </NuxtLink>

          <!-- Hamburger: hanya di < lg -->
          <button
            type="button"
            class="flex lg:hidden p-2 rounded-lg text-charcoal-700 hover:text-emerald-900 hover:bg-emerald-900/10 focus-visible:outline-none min-w-[40px] min-h-[40px] items-center justify-center"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Buka menu navigasi"
            @click="toggleMobileMenu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden bg-cream-50 border-b border-cream-200 px-4 pt-3 pb-6 space-y-2 shadow-xl"
      >
        <div class="space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium text-charcoal-800 hover:bg-emerald-900/10 hover:text-emerald-900 transition-colors"
            @click="closeMobileMenu"
          >
            <div class="flex items-center gap-2.5">
              <component :is="link.icon" class="w-4 h-4 text-emerald-800" />
              <span>{{ link.name }}</span>
            </div>
            <span
              v-if="link.badge"
              class="px-2 py-0.5 text-[10px] font-semibold rounded bg-gold-500/20 text-gold-700 uppercase"
            >
              {{ link.badge }}
            </span>
          </NuxtLink>
        </div>

        <div class="pt-3 border-t border-cream-200 space-y-2.5">
          <NuxtLink
            to="/register"
            class="w-full py-3 rounded-xl border-2 border-emerald-900 text-emerald-900 font-bold text-center block text-sm hover:bg-emerald-900/5 transition-colors"
            @click="closeMobileMenu"
          >
            Daftar Santri Baru
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="w-full py-3.5 rounded-xl bg-emerald-900 text-cream-50 font-semibold text-center flex items-center justify-center gap-2 shadow-lg text-sm hover:bg-emerald-850 transition-colors"
            @click="closeMobileMenu"
          >
            <Sparkles class="w-4 h-4 text-gold-400" />
            <span>Masuk Ruang Belajar</span>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
