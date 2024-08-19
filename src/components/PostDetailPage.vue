<template>
  <div class="post-detail">
    <img :src="car.image" :alt="car.title" class="post-detail-image" />
    <h1>{{ car.title }}</h1>
    <p>{{ car.summary }}</p>
    <p>{{ car.content }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostDetailPage',
  data() {
    return {
      car: {}
    };
  },
  created() {
    this.fetchCarDetails();
  },
  methods: {
    async fetchCarDetails() {
      try {
        const carId = this.$route.params.id;
        const response = await axios.get(`http://localhost:8000/cars/${carId}`);
        this.car = response.data;
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    }
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