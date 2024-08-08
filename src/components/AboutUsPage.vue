<template>
  <div class="about">
    <SiteHeader />
    <div class="content">
      <h1>Hakkımızda</h1>
      <p>Bu sayfada şirketimiz ve misyonumuz hakkında bilgi bulabilirsiniz.</p>
    </div>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader.vue';

export default {
  name: 'AboutUsPage',
  components: {
    SiteHeader,
  },
};
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
}

.content {
  padding: 20px;
  text-align: center;
}
</style>
