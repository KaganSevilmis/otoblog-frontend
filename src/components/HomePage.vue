<template>
  <div class="home">
    <SiteHeader />
    <div class="content">
      <PostList />
    </div>
  </div>
</template>

<script>
import PostList from './PostList.vue';
import SiteHeader from './SiteHeader.vue';

export default {
  name: 'HomePage',
  components: {
    PostList,
    SiteHeader,
  },
};
</script>


<style>

</style>
