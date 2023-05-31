<script >
import AppTitle from './components/AppTitle.vue'
import AppTitleCarousel from './components/AppTitleCarousel.vue';
import AppSection0 from './components/AppSection0.vue';
import AppSection1 from './components/AppSection1.vue';
import AppSection2 from './components/AppSection2.vue';
import AppSection3 from './components/AppSection3.vue';
import AppSection4 from './components/AppSection4.vue';
import AppSection5 from './components/AppSection5.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppTitle,
    AppTitleCarousel,
    AppSection0,
    AppSection1,
    AppSection2,
    AppSection3,
    AppSection4,
    AppSection5,
    AppFooter
  },
}
</script>


<template>
  <header>
    <AppTitle />
    <AppTitleCarousel />
  </header>
  <main>
    <AppSection0 />
    <AppSection1 />
    <AppSection2 />
    <AppSection3 />
    <AppSection4 />
    <AppSection5 />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style scoped>
AppTitle {
  background: rgba(218, 108, 110, 0.8);
}
</style>
