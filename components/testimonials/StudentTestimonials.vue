<script setup lang="ts">
import { TESTIMONIALS_DATA } from '~/data/testimonialsData';
import { Star, MessageSquareQuote, CheckCircle, Award } from 'lucide-vue-next';

const testimonials = TESTIMONIALS_DATA;
</script>

<template>
  <section id="testimoni" class="py-20 lg:py-28 bg-cream-50 relative border-b border-cream-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-900/20">
          <MessageSquareQuote class="w-4 h-4 text-emerald-800" />
          <span>Kisah & Pengalaman Nyata</span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 tracking-tight">
          Apa Kata <span class="text-gold-600 italic">Para Penuntut Ilmu?</span>
        </h2>

        <p class="text-sm sm:text-base text-charcoal-700 font-light leading-relaxed">
          Alumni dari kalangan santri, profesional, asatidz muda, hingga akademisi yang telah menempuh jalur keilmuan bersanad di Darul Hikmah Academy.
        </p>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="item in testimonials"
          :key="item.id"
          class="bg-cream-100/70 rounded-2xl p-7 sm:p-8 border border-cream-300 shadow-card hover:shadow-card-hover hover-lift flex flex-col justify-between space-y-6 group"
        >
          <div class="space-y-4">
            <!-- Stars & Tag -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <Star
                  v-for="s in item.rating"
                  :key="s"
                  class="w-4 h-4 fill-gold-500 text-gold-500"
                />
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-900/10 text-emerald-900 border border-emerald-900/20">
                {{ item.highlightTag }}
              </span>
            </div>

            <!-- Quote Text -->
            <blockquote class="text-sm sm:text-base text-charcoal-800 leading-relaxed font-light italic">
              "{{ item.quote }}"
            </blockquote>
          </div>

          <!-- Author Info -->
          <div class="pt-4 border-t border-cream-300 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <img
                :src="item.avatar"
                :alt="item.name"
                class="w-11 h-11 rounded-full object-cover border-2 border-gold-500/50 shrink-0"
              />
              <div>
                <h4 class="text-sm font-bold text-emerald-950">{{ item.name }}</h4>
                <p class="text-xs text-charcoal-600">{{ item.role }}</p>
              </div>
            </div>

            <div class="text-right hidden sm:block">
              <span class="text-[11px] text-charcoal-500 block">Jalur yang Ditempuh:</span>
              <span class="text-xs font-semibold text-emerald-900">{{ item.learningPathTaken }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
