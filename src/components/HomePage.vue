<template>
  <div class="home">
    <SiteHeader />
    <div class="content">
      <PostList @posts-loaded="updatePosts" />
      <PostSidebar :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from './PostList.vue';
import PostSidebar from './PostSidebar.vue';
import SiteHeader from './SiteHeader.vue';

export default {
  name: 'HomePage',
  components: {
    PostList,
    PostSidebar,
    SiteHeader,
  },
  data() {
    return {
      posts: []
    }
  },
  created(){
    console.log("Component Yüklendi")
  },
  methods: {
    updatePosts(posts) {
      this.posts = posts;
    }
  }
};
</script>

<style>
.home {
  background-image: url('https://get.wallhere.com/photo/render-car-black-cars-vehicle-1667851.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  filter: brightness(0.9) contrast(1.2) saturate(1.2); /* Parlaklık azaltıldı */
}

.content {
  padding: 20px;
  background-color: transparent; /* Arka planı şeffaf yapıyoruz */
}
</style>
