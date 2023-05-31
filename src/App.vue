<script >
import AppTitle from './components/AppTitle.vue'
import AppTitleCarousel from './components/AppTitleCarousel.vue';
import AppSection0 from './components/AppSection0.vue';
import AppSection1 from './components/AppSection1.vue';
import AppSection2 from './components/AppSection2.vue';
import AppSection3 from './components/AppSection3.vue';
import AppSection4 from './components/AppSection4.vue';

export default {
  components: {
    AppTitle,
    AppTitleCarousel,
    AppSection0,
    AppSection1,
    AppSection2,
    AppSection3,
    AppSection4
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
  </main>
  <footer>

  </footer>
</template>

<style scoped>
AppTitle {
  background: rgba(218, 108, 110, 0.8);
}
</style>
