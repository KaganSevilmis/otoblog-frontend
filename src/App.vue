<template>
  <div id="app">
    <SiteHeader />
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router"
import SiteHeader from './components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    SiteHeader
  }
};
</script>

<style>
</style>