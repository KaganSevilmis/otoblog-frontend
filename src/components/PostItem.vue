<template>
  <div :class="['post-item', { 'featured-post': post.id === 1 || post.id === 2 }]" @click="$emit('click')">
    <img v-if="post.görseller && post.görseller.length > 0" :src="post.görseller[0]" :alt="getTitle() || 'Başlık Yok'" class="post-image" />
    <div class="post-content">
      <h1>{{ getTitle() || 'Başlık Yok' }}</h1>
      <p>{{ getSummary() || 'Özet Yok' }}</p>
    </div>
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
        // İlk iki post için özetin uzunluğunu artır
        return this.post.içerik ? this.post.içerik.substring(0, 200) + '...' : ''; // Uzunluğu 200 karaktere çıkardık
      }
      // Diğer postlar için varsayılan 100 karakter özet
      return this.post.içerik ? this.post.içerik.substring(0, 100) + '...' : '';
    }
  },
  mounted() {
    console.log('Post data:', JSON.stringify(this.post));
  }
};
</script>

<style>
/* Stil kurallarını kontrol edin */
.post-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-bottom: 20px; /* Postlar arasındaki boşluk */
}

/* İlk iki post için özel stil */
.featured-post .post-image {
  width: 100%;
  height: 400px; /* İlk iki postun görsel boyutunu arttırdık */
}

/* Diğer postlar için standart görsel yüksekliği */
.post-item:not(.featured-post) .post-image {
  width: 100%;
  height: 200px; /* Diğer postlar için yüksekliği sabitle */
  object-fit: cover; /* Görselin kapsama şekli */
}

.post-content {
  padding: 20px;
}

h1 {
  margin: 0;
  font-size: 1.5em; /* Başlık boyutunu uygun seviyede tutun */
}

p {
  margin-top: 10px;
  font-size: 1em; /* Özet yazısını uygun seviyede tutun */
}

/* 1. post ile diğer postlar arasındaki mesafeyi azalt */
.featured-post + .post-item {
 margin-top: 10px; /* Mesafeyi azaltın */
}
</style>
