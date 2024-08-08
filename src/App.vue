<template>
  <div id="app">
    <HomePage />
    <router-view /> <!-- Bu, mevcut rotanın içeriğini render eder -->
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage, // HomePage bileşenini tanımlayın
  },
};
</script>

<style>

</style>