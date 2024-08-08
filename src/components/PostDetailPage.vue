<template>
  <div class="post-detail">
    <img :src="post.image" :alt="post.title" class="post-detail-image" />
    <h1>{{ post.title }}</h1>
    <p>{{ post.summary }}</p>
    <p>{{ post.content }}</p> <!-- Varsayılan içerik alanı -->
  </div>
</template>

<script>
export default {
  name: 'PostDetailPage',
  data() {
    return {
      post: {}
    };
  },
  created() {
    const postId = this.$route.params.id;
    // Örnek veri, gerçek veri kaynağınızdan fetch yapabilirsiniz
    const posts = [
      { id: 1, title: 'Araba Park Etme Teknikleri Rehberi', summary: 'Sürüş deneyiminiz boyunca aracınızı farklı yerlere ve farklı pozisyonlara park etmeniz gerekecektir.', content: 'Detaylı içerik burada.', image: 'https://png.pngtree.com/thumb_back/fw800/background/20230816/pngtree-a-line-of-cars-in-an-inground-parking-lot-image_13059211.jpg' },
      { id: 2, title: 'Post 2', summary: 'Bir araç için lastik satın almak zor bir iş olabilir. Aşınma derecelendirmeleri, hız derecelendirmeleri, sıcaklık önerileri ve boyutları arasında, belirli bir araç ve coğrafi bölge için hangi lastiğin en uygun olduğunu belirlemek zordur.', content: 'Content of Post 2', image: 'https://jantdunyasi.com/cdn/shop/articles/dort-mevsim-lastik-v1_1024x1024.jpg?v=1701378848' },
      { id: 3, title: 'Post 3', summary: 'Summary of Post 3', content: 'Content of Post 3', image: 'path/to/image3.jpg' }
    ];
    this.post = posts.find(post => post.id == postId);
  }
};
</script>

<style>
.post-detail {
  width: 80%;
  margin: auto;
  text-align: center;
}

.post-detail-image {
  width: 100%;
  height: 400px; /* Görsel yüksekliği */
  object-fit: cover; /* Görselin uygun şekilde kesilmesi */
}

h1 {
  margin: 20px 0;
}

p {
  margin: 10px 0;
}
</style>