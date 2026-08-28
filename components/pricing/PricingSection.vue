<script setup lang="ts">
import { ref } from 'vue';
import { PRICING_PLANS_DATA, type PricingPlan } from '~/data/pricingData';
import ScholarshipBanner from './ScholarshipBanner.vue';
import { Check, X as CloseIcon, Sparkles, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-vue-next';

const isAnnual = ref(true);
const plans = PRICING_PLANS_DATA;

defineEmits<{
  (e: 'select-plan', plan: PricingPlan, isAnnual: boolean): void;
  (e: 'open-scholarship'): void;
}>();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};
</script>

<template>
  <section id="harga" class="py-20 lg:py-28 bg-cream-100 relative border-b border-cream-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-900/20">
          <Sparkles class="w-4 h-4 text-emerald-800" />
          <span>Investasi Pendidikan Syar'i Transparan</span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 tracking-tight">
          Pilihan Paket Belajar & <span class="text-gold-600 italic">Pendaftaran Santri</span>
        </h2>

        <p class="text-sm sm:text-base text-charcoal-700 font-light leading-relaxed">
          Biaya pendidikan digunakan untuk operasional rekaman studio, bimbingan asatidz, penyusunan matan turats, dan program beasiswa penuntut ilmu dhuafa.
        </p>

        <!-- Annual / Monthly Toggle -->
        <div class="flex items-center justify-center gap-3 pt-4">
          <span
            class="text-sm font-medium transition-colors"
            :class="!isAnnual ? 'text-emerald-950 font-bold' : 'text-charcoal-500'"
          >
            Iuran Bulanan
          </span>

          <button
            type="button"
            class="relative w-14 h-8 rounded-full bg-emerald-900 p-1 transition-colors focus-visible:outline-none cursor-pointer"
            role="switch"
            :aria-checked="isAnnual"
            @click="isAnnual = !isAnnual"
          >
            <div
              class="w-6 h-6 rounded-full bg-gold-400 transition-transform duration-200"
              :class="isAnnual ? 'translate-x-6' : 'translate-x-0'"
            />
          </button>

          <span
            class="text-sm font-medium transition-colors flex items-center gap-1.5"
            :class="isAnnual ? 'text-emerald-950 font-bold' : 'text-charcoal-500'"
          >
            <span>Paket Tahunan</span>
            <span class="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-800 font-bold text-[10px] uppercase">
              Hemat s/d 40%
            </span>
          </span>
        </div>
      </div>

      <!-- Pricing Plans Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="bg-cream-50 rounded-3xl border hover-lift p-8 flex flex-col justify-between relative"
          :class="[
            plan.isPopular
              ? 'border-gold-500 ring-2 ring-gold-500/30 shadow-card-hover bg-gradient-to-b from-cream-50 via-cream-50 to-gold-500/5 lg:-translate-y-2'
              : 'border-cream-300 shadow-card hover:shadow-card-hover'
          ]"
        >
          <!-- Popular Ribbon Badge -->
          <div
            v-if="plan.badge"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-emerald-950 font-bold text-xs shadow-md uppercase tracking-wider"
          >
            {{ plan.badge }}
          </div>

          <!-- Top Plan Info -->
          <div class="space-y-6">
            <div class="space-y-1">
              <span class="text-xs text-charcoal-500 font-arabic">{{ plan.arabicName }}</span>
              <h3 class="font-display text-2xl font-bold text-emerald-950">{{ plan.name }}</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">{{ plan.tagline }}</p>
            </div>

            <!-- Price Display -->
            <div class="pt-2 border-t border-cream-200">
              <div v-if="plan.priceMonthly === 0">
                <span class="text-xs text-charcoal-500 line-through block">
                  {{ formatPrice(plan.originalAnnualPrice) }}
                </span>
                <span class="font-display text-3xl sm:text-4xl font-bold text-emerald-950">
                  {{ formatPrice(plan.priceAnnual) }}
                </span>
                <span class="text-xs text-charcoal-600 font-medium block mt-0.5">/ Akses Seumur Hidup & Infaq</span>
              </div>

              <div v-else>
                <div v-if="isAnnual">
                  <span class="text-xs text-charcoal-500 line-through block">
                    {{ formatPrice(plan.originalAnnualPrice) }}
                  </span>
                  <div class="flex items-baseline gap-1">
                    <span class="font-display text-3xl sm:text-4xl font-bold text-emerald-950">
                      {{ formatPrice(plan.priceAnnual) }}
                    </span>
                    <span class="text-xs text-charcoal-600">/ Tahun</span>
                  </div>
                  <span class="text-[11px] text-emerald-800 font-semibold block mt-0.5">
                    Setara {{ formatPrice(Math.round(plan.priceAnnual / 12)) }} per bulan
                  </span>
                </div>

                <div v-else>
                  <div class="flex items-baseline gap-1">
                    <span class="font-display text-3xl sm:text-4xl font-bold text-emerald-950">
                      {{ formatPrice(plan.priceMonthly) }}
                    </span>
                    <span class="text-xs text-charcoal-600">/ Bulan</span>
                  </div>
                  <span class="text-[11px] text-charcoal-500 block mt-0.5">
                    Bisa dibatalkan kapan saja
                  </span>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <div class="space-y-3 pt-2">
              <span class="text-xs font-bold text-emerald-950 uppercase tracking-wider block">Fasilitas yang Didapatkan:</span>
              <ul class="space-y-2.5">
                <li
                  v-for="(feature, idx) in plan.features"
                  :key="idx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm"
                  :class="feature.included ? 'text-charcoal-800' : 'text-charcoal-400 line-through'"
                >
                  <div
                    class="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    :class="feature.included ? 'bg-emerald-900/15 text-emerald-900' : 'bg-charcoal-200 text-charcoal-400'"
                  >
                    <Check v-if="feature.included" class="w-3 h-3" />
                    <CloseIcon v-else class="w-3 h-3" />
                  </div>
                  <span>{{ feature.title }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Button Action -->
          <div class="pt-8">
            <button
              type="button"
              class="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2 active:scale-95"
              :class="[
                plan.isPopular
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-emerald-950 hover:brightness-105 shadow-gold-500/25'
                  : 'bg-emerald-900 text-cream-50 hover:bg-emerald-850'
              ]"
              @click="$emit('select-plan', plan, isAnnual)"
            >
              <span>{{ plan.ctaText }}</span>
              <ArrowRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- 14 Days Guarantee Note -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left p-4 rounded-2xl bg-cream-50 border border-cream-300 max-w-2xl mx-auto text-xs text-charcoal-700">
        <ShieldCheck class="w-6 h-6 text-emerald-800 shrink-0" />
        <span>
          <strong>Garansi 14 Hari Uang Kembali Tanpa Syarat:</strong> Jika Anda merasa materi kajian tidak sesuai dengan ekspektasi, dana investasi Anda kami kembalikan 100% secara utuh.
        </span>
      </div>

      <!-- Scholarship 100% Free Banner -->
      <ScholarshipBanner
        @apply-scholarship="$emit('open-scholarship')"
      />

    </div>
  </section>
</template>
