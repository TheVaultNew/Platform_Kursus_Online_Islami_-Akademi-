import { describe, it, expect } from 'vitest';
import { COURSES_DATA } from '../data/coursesData';
import { LEARNING_PATHS_DATA } from '../data/learningPathsData';
import { INSTRUCTORS_DATA } from '../data/instructorsData';

describe('Darul Hikmah Academy - Data & Business Logic Tests', () => {
  
  describe('Katalog Kursus (Courses Data)', () => {
    it('memiliki daftar kursus yang valid dan tidak kosong', () => {
      expect(COURSES_DATA.length).toBeGreaterThan(0);
      expect(Array.isArray(COURSES_DATA)).toBe(true);
    });

    it('setiap kursus memiliki id, slug, judul, harga, dan referensi kitab turats', () => {
      COURSES_DATA.forEach(course => {
        expect(course.id).toBeDefined();
        expect(course.slug).toBeDefined();
        expect(course.title.length).toBeGreaterThan(5);
        expect(course.price).toBeGreaterThan(0);
        expect(course.turatsBookReference).toBeDefined();
        expect(course.modules.length).toBeGreaterThan(0);
      });
    });

    it('mematuhi Lampiran C: kursus fiqih komparatif memiliki ikhtilafNote untuk menghormati 4 mazhab', () => {
      const fiqihCourses = COURSES_DATA.filter(c => c.category === 'fiqih');
      expect(fiqihCourses.length).toBeGreaterThan(0);
      
      const compFiqih = fiqihCourses.find(c => c.slug.includes('fiqih-ibadah-komparatif-4-mazhab'));
      expect(compFiqih).toBeDefined();
      expect(compFiqih?.ikhtilafNote).toBeDefined();
      expect(compFiqih?.ikhtilafNote).toContain('ADAB IKHTILAF');
    });
  });

  describe('Visual Learning Path Roadmap', () => {
    it('memiliki 4 jalur keilmuan utama (Fiqih, Bahasa Arab, Tafsir, Hadits)', () => {
      expect(LEARNING_PATHS_DATA.length).toBe(4);
      const categories = LEARNING_PATHS_DATA.map(p => p.category);
      expect(categories).toContain('fiqih');
      expect(categories).toContain('bahasa-arab');
      expect(categories).toContain('tafsir');
      expect(categories).toContain('hadits');
    });

    it('setiap jalur memiliki node berjenjang berurutan dari step 1 s/d selesai', () => {
      LEARNING_PATHS_DATA.forEach(path => {
        expect(path.nodes.length).toBeGreaterThanOrEqual(3);
        path.nodes.forEach((node, index) => {
          expect(node.stepNumber).toBe(index + 1);
          expect(node.turatsBook).toBeDefined();
          expect(node.keyCompetencies.length).toBeGreaterThan(0);
          expect(node.syllabusOverview.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('Dewan Asatidz & Sanad Keilmuan', () => {
    it('setiap ustadz memiliki gelar akademik dan sanad bersambung yang valid', () => {
      INSTRUCTORS_DATA.forEach(ins => {
        expect(ins.name).toBeDefined();
        expect(ins.institution).toBeDefined();
        expect(ins.sanadChains.length).toBeGreaterThan(0);
        ins.sanadChains.forEach(chain => {
          expect(chain.highestAuthority).toBeDefined();
          expect(chain.bookName).toBeDefined();
        });
      });
    });
  });

  describe('Filter & Sorting Logic Simulation', () => {
    it('dapat memfilter kursus berdasarkan kategori fiqih', () => {
      const fiqihOnly = COURSES_DATA.filter(c => c.category === 'fiqih');
      expect(fiqihOnly.every(c => c.category === 'fiqih')).toBe(true);
    });

    it('dapat memfilter kursus yang bersanad (isSanadCertified)', () => {
      const sanadOnly = COURSES_DATA.filter(c => c.isSanadCertified);
      expect(sanadOnly.every(c => c.isSanadCertified)).toBe(true);
    });

    it('dapat mengurutkan kursus berdasarkan rating tertinggi', () => {
      const sorted = [...COURSES_DATA].sort((a, b) => b.rating - a.rating);
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].rating).toBeGreaterThanOrEqual(sorted[i + 1].rating);
      }
    });
  });

});
