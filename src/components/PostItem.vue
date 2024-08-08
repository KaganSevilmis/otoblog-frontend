<template>
  <div :class="['post-item', { 'featured-post': post.id === 1 }]" @click="$emit('click')">
    <img :src="post.image" :alt="post.title" class="post-image" />
    <div class="post-content">
      <h1>{{ post.title }}</h1>
      <p>{{ post.summary }}</p>
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
        title: '',
        summary: '',
        image: ''
      })
    }
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
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-bottom: 0px; /* Postlar arasındaki boşluk */
}

/* 1. post için özel stil */
.featured-post .post-image {
  width: 100%;
  height: 500px; /* 1. postun görsel boyutunu bozmadan tut */
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
