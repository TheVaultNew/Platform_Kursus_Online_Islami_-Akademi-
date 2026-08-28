<script setup lang="ts">
import { ref } from 'vue';
import { INSTRUCTORS_DATA, type Instructor } from '~/data/instructorsData';
import SanadModal from './SanadModal.vue';
import { Award, Users, BookOpen, GraduationCap, ShieldCheck } from 'lucide-vue-next';

const instructors = INSTRUCTORS_DATA;
const selectedInstructor = ref<Instructor | null>(null);
const isSanadModalOpen = ref(false);

const openSanad = (ins: Instructor) => {
  selectedInstructor.value = ins;
  isSanadModalOpen.value = true;
};

const closeSanad = () => {
  isSanadModalOpen.value = false;
  selectedInstructor.value = null;
};
</script>

<template>
  <section id="pengajar" class="py-20 lg:py-28 bg-cream-100 relative border-b border-cream-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-900/20">
          <Award class="w-4 h-4 text-emerald-800" />
          <span>Kredibilitas Akademik & Sanad Keilmuan</span>
        </div>

        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 tracking-tight">
          Dewan Asatidz & <span class="text-gold-600 italic">Masyayikh Bersanad</span>
        </h2>

        <p class="text-sm sm:text-base text-charcoal-700 font-light leading-relaxed">
          Belajar langsung dari para pakar yang memadukan kedalaman ilmu turats klasik (*talaqqi bersanad*) dengan gelar doktoral dari universitas Islam terkemuka dunia.
        </p>
      </div>

      <!-- Grid Asatidz Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
        <div
          v-for="ins in instructors"
          :key="ins.id"
          class="bg-cream-50 rounded-2xl border border-cream-300 shadow-card hover:shadow-card-hover hover-lift flex flex-col justify-between overflow-hidden group"
        >
          <!-- Photo & Background Badge -->
          <div class="p-6 pb-4 space-y-4 text-center">
            <div class="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
              <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-500 to-emerald-900 p-0.5 shadow-md">
                <img
                  :src="ins.avatar"
                  :alt="ins.name"
                  class="w-full h-full rounded-full object-cover"
                />
              </div>
              <div
                class="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-emerald-900 border-2 border-cream-50 text-gold-400 flex items-center justify-center shadow-sm"
                title="Sanad Terverifikasi"
              >
                <ShieldCheck class="w-4 h-4" />
              </div>
            </div>

            <div class="space-y-1">
              <p class="text-xs text-charcoal-500 font-arabic">{{ ins.arabicName }}</p>
              <h3 class="font-display text-lg font-bold text-emerald-950 group-hover:text-emerald-850 transition-colors">
                {{ ins.name }}
              </h3>
              <p class="text-xs font-semibold text-gold-700">{{ ins.title }}</p>
            </div>

            <div class="p-2.5 rounded-lg bg-cream-100 border border-cream-200 text-xs text-charcoal-700 text-left space-y-1">
              <div class="flex items-start gap-1.5">
                <GraduationCap class="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                <span class="text-[11px] leading-snug">{{ ins.academicDegree }}</span>
              </div>
            </div>

            <p class="text-xs text-charcoal-600 line-clamp-3 text-left font-light leading-relaxed">
              {{ ins.bio }}
            </p>
          </div>

          <!-- Bottom Stats & Sanad CTA -->
          <div class="p-6 pt-3 border-t border-cream-200 bg-cream-100/60 space-y-3">
            <div class="flex items-center justify-between text-xs text-charcoal-600">
              <span class="flex items-center gap-1">
                <Users class="w-3 h-3 text-emerald-800" />
                {{ ins.totalStudents.toLocaleString('id-ID') }} Santri
              </span>
              <span class="flex items-center gap-1">
                <BookOpen class="w-3 h-3 text-emerald-800" />
                {{ ins.totalCourses }} Kursus
              </span>
            </div>

            <button
              type="button"
              class="w-full py-2 rounded-xl bg-emerald-900/10 hover:bg-emerald-900 hover:text-cream-50 text-emerald-900 text-xs font-semibold border border-emerald-900/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              @click="openSanad(ins)"
            >
              <Award class="w-3.5 h-3.5 text-gold-600" />
              <span>Lihat Silsilah Sanad ({{ ins.sanadChains.length }})</span>
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Sanad Modal -->
    <SanadModal
      :is-open="isSanadModalOpen"
      :instructor="selectedInstructor"
      @close="closeSanad"
    />
  </section>
</template>
