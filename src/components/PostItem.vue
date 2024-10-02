<template>
  <div :class="['post-item', { 'featured-post': post.id === 1 || post.id === 2 }]">
    <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="no-underline">
      <img v-if="post.görseller && post.görseller.length > 0" :src="post.görseller[0]" :alt="getTitle() || 'Başlık Yok'" class="post-image" />
      <div class="post-content">
        <h1>{{ getTitle() || 'Başlık Yok' }}</h1>
        <p>{{ getSummary() || 'Özet Yok' }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        başlıklar: [],
        içerik: '',
        görseller: []
      })
    }
  },
  methods: {
    getTitle() {
      return this.post.başlıklar && this.post.başlıklar.length > 0 ? this.post.başlıklar[0] : '';
    },
    getSummary() {
      if (this.post.id === 1 || this.post.id === 2) {
        return this.post.içerik ? this.post.içerik.substring(0, 200) + '...' : ''; // Uzunluğu 200 karaktere çıkardık
      }
      return this.post.içerik ? this.post.içerik.substring(0, 100) + '...' : ''; // Diğer postlar için varsayılan 100 karakter özet
    }
  },
  mounted() {
    console.log('Post data:', JSON.stringify(this.post));
  }
};
</script>

<style>
.post-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7); /* Yarı saydam siyah arka plan */
  color: #f5f5f5; /* Açık gri/yumuşak beyaz yazı rengi */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Daha belirgin gölge */
  margin-bottom: 20px;
}

.featured-post .post-image {
  width: 100%;
  height: 400px;
}

.post-item:not(.featured-post) .post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 20px;
}

h1 {
  margin: 0;
  font-size: 1.5em;
  color: #f5f5f5; /* Açık gri/yumuşak beyaz yazı rengi */
}

p {
  margin-top: 10px;
  font-size: 1em;
  color: #f5f5f5; /* Açık gri/yumuşak beyaz yazı rengi */
}

.featured-post + .post-item {
  margin-top: 10px;
}

/* Altı çizili olanları kaldırmak için */
.no-underline {
  text-decoration: none;
}

.no-underline:hover,
.no-underline:focus,
.no-underline:active {
  text-decoration: none;
}
</style>
