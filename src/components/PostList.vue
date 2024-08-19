<template>
  <div class="post-list">
    <div v-if="loading">Yükleniyor...</div>
    <div v-else>
      <div class="main-content">
        <div class="featured-post">
          <PostItem v-if="featuredPost1" :post="featuredPost1" />
          <PostItem v-if="featuredPost2" :post="featuredPost2" />
        </div>
        <div class="sidebar-container">
          <PostSidebar :cars="additionalPosts" />
        </div>
      </div>
      <div class="additional-posts">
        <div class="post-grid">
          <PostItem v-for="car in additionalPosts" :key="car.id" :post="car" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import PostItem from './PostItem.vue';
import PostSidebar from './PostSidebar.vue';

export default {
  name: 'PostList',
  components: {
    PostItem,
    PostSidebar
  },
  data() {
    return {
      featuredPost1: null,
      featuredPost2: null,
      additionalPosts: [],
      loading: true,
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:8000/cars'); // Proxy ayarı nedeniyle tam URL'yi belirtmenize gerek yok
        console.log('Veri başarıyla alındı:', response.data); // Yanıtı kontrol et
        
        // Yanıtın bir dizi olduğunu doğrula
        if (Array.isArray(response.data)) {
          this.additionalPosts = response.data;

          // Featured posts olarak ilk iki postu seçin (örnek olarak)
          this.featuredPost1 = this.additionalPosts[0] || null;
          this.featuredPost2 = this.additionalPosts[1] || null;
        } else {
          console.error('Beklenen veri formatı sağlanamadı:', response.data);
        }
      } catch (error) {
        console.error('Veri çekme hatası:', error.response ? error.response.data : error.message);
      } finally {
        this.loading = false;
      }
    },  
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 65px;
  box-sizing: border-box;
}

.main-content {
  display: flex;
  gap: 20px;
}

.featured-post {
  display: flex;
  flex-direction: column;
  flex: 2; /* İlk post genişliği */
}

.sidebar-container {
  flex: 1; /* Sidebar genişliği */
  min-width: 50px; /* Sidebar minimum genişliği */
}

.additional-posts {
  margin-top: 20px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* 3'er 3'er sıralama */
  gap: 20px;
}
</style>
