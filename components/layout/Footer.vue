<script setup lang="ts">
import { ShieldCheck, BookOpen, Award, HeartHandshake, Mail, Phone, MapPin } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-emerald-950 text-cream-100 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden bg-arabesque-dark">
    <!-- Decorative Islamic Geometry Glow -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-0 left-10 w-80 h-80 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-850">
        
        <!-- Col 1: Brand & Philosophy -->
        <div class="lg:col-span-2 space-y-4">


          <p class="text-sm text-cream-200/80 leading-relaxed font-light">
            Platform kursus online Islam ilmiah yang menyambungkan generasi kontemporer dengan sanad keilmuan para ulama salafus shalih. Menghadirkan kurikulum berjenjang dari pemula hingga spesialisasi secara terstruktur.
          </p>

          <!-- Commitment to Wasathiyah & Ikhtilaf -->
          <div class="p-3.5 rounded-lg bg-emerald-900/60 border border-gold-500/20 text-xs text-cream-200 space-y-1.5">
            <div class="flex items-center gap-2 text-gold-400 font-medium">
              <ShieldCheck class="w-4 h-4 shrink-0" />
              <span>Komitmen Adab Ikhtilaf (Wasathiyah)</span>
            </div>
            <p class="text-[12px] text-cream-300/80 leading-normal">
              Seluruh kajian fiqih mengedepankan telaah komparatif 4 mazhab mu'tabar (Hanafi, Maliki, Syafi'i, Hanbali) dengan adab persaudaraan dan menghargai keragaman ijtihad ulama.
            </p>
          </div>
        </div>

        <!-- Col 2: Kurikulum & Jalur -->
        <div class="space-y-3.5">
          <h3 class="font-display text-base font-semibold text-gold-400 tracking-wide">Jalur Keilmuan</h3>
          <ul class="space-y-2 text-sm text-cream-200/80">
            <li><a href="#learning-path" class="hover:text-gold-300 transition-colors">Jalur Fiqih 4 Mazhab</a></li>
            <li><a href="#learning-path" class="hover:text-gold-300 transition-colors">Jalur Bahasa Arab Mustawa 1-4</a></li>
            <li><a href="#learning-path" class="hover:text-gold-300 transition-colors">Jalur Ulumul Qur'an & Tafsir</a></li>
            <li><a href="#learning-path" class="hover:text-gold-300 transition-colors">Jalur Hadits & Sanad Riwayah</a></li>
            <li><a href="#katalog" class="hover:text-gold-300 transition-colors">Fiqih Muamalah & Fintech Syariah</a></li>
            <li><a href="#katalog" class="hover:text-gold-300 transition-colors">Kaidah Ushul Fiqih Al-Waraqat</a></li>
          </ul>
        </div>

        <!-- Col 3: Fasilitas & Akademi -->
        <div class="space-y-3.5">
          <h3 class="font-display text-base font-semibold text-gold-400 tracking-wide">Fasilitas Santri</h3>
          <ul class="space-y-2 text-sm text-cream-200/80">
            <li><a href="#metode" class="hover:text-gold-300 transition-colors">Halaqah Live Interaktif</a></li>
            <li><a href="#pengajar" class="hover:text-gold-300 transition-colors">Silsilah Sanad Ijazah</a></li>
            <li><a href="#metode" class="hover:text-gold-300 transition-colors">Transkrip Matan & Kitab PDF</a></li>
            <li><a href="#metode" class="hover:text-gold-300 transition-colors">Bimbingan Musyrif Pribadi</a></li>
            <li><a href="#harga" class="hover:text-gold-300 transition-colors">Program Beasiswa 100%</a></li>
            <li><a href="#testimoni" class="hover:text-gold-300 transition-colors">Kisah Sukses Santri</a></li>
          </ul>
        </div>

        <!-- Col 4: Kontak & Sekretariat -->
        <div class="space-y-3.5">
          <h3 class="font-display text-base font-semibold text-gold-400 tracking-wide">Sekretariat Ma'had</h3>
          <div class="space-y-2.5 text-sm text-cream-200/80">
            <p class="flex items-start gap-2">
              <MapPin class="w-4 h-4 text-gold-400 shrink-0 mt-1" />
              <span>Kompleks Markaz Darul Hikmah, Jl. Mahad Tinggi No. 19, Cilandak, Jakarta Selatan</span>
            </p>
            <p class="flex items-center gap-2">
              <Mail class="w-4 h-4 text-gold-400 shrink-0" />
              <span>akademik@darulhikmah.ac.id</span>
            </p>
            <p class="flex items-center gap-2">
              <Phone class="w-4 h-4 text-gold-400 shrink-0" />
              <span>+62 812-9900-8822 (WhatsApp Musyrif)</span>
            </p>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/70">
        <p>© {{ new Date().getFullYear() }} Darul Hikmah Academy. Hak Cipta Dilindungi Undang-Undang.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-gold-400 transition-colors">Syarat & Ketentuan</a>
          <a href="#" class="hover:text-gold-400 transition-colors">Kebijakan Privasi</a>
          <a href="#" class="hover:text-gold-400 transition-colors">Panduan Adab Belajar</a>
          <span class="inline-flex items-center gap-1 text-gold-400/90 font-medium">
            <HeartHandshake class="w-3.5 h-3.5" />
            Wakaf Ilmu Berkelanjutan
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
