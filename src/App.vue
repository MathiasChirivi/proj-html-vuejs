<script >
import AppTitle from './components/AppTitle.vue'
import AppTitleCarousel from './components/AppTitleCarousel.vue';
import { headerLink } from './data/store';

export default {
  components: {
    AppTitle,
    AppTitleCarousel
  },
}
</script>


<template>
  <header>
    <AppTitle />
    <AppTitleCarousel />
  </header>
  <main>

  </main>
  <footer>

  </footer>
</template>

<style scoped>
header {
  background: rgba(218, 108, 110, 0.8);
}
</style>
