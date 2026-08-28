export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade-scroll', {
    mounted(el: HTMLElement & { _scrollObserver?: IntersectionObserver }) {
      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

      el.classList.add('scroll-fade-init');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('scroll-fade-visible');
            } else {
              el.classList.remove('scroll-fade-visible');
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      observer.observe(el);
      el._scrollObserver = observer;
    },
    unmounted(el: HTMLElement & { _scrollObserver?: IntersectionObserver }) {
      if (el._scrollObserver) {
        el._scrollObserver.disconnect();
      }
    },
    getSSRProps() {
      return {};
    }
  });
});
