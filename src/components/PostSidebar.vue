<template>
  <div class="sidebar">
    <h3>EN ÇOK TIKLANANLAR</h3>
    <ul>
      <li v-for="car in cars" :key="car.id">
        <router-link :to="'/cars/' + car.id" class="cars-link">
          <PostItem :post="car" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  name: 'PostSidebar',
  components: {
    PostItem,
  },
  props: {
    cars: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.sidebar {
  width: 100%;
  max-height: 1050px; /* Maksimum yükseklik sınırı */
  background-color: #f4f4f4;
  padding: 15px; /* Daha kompakt padding */
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow-y: auto; /* İçeriği kaydırılabilir yapar */
}

.sidebar h3 {
  margin-top: 0;
  margin-bottom: 15px; /* Başlık ve içerik arasındaki boşluk */
  text-decoration: none; /* Başlık altı çizgisini kaldır */
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 15px; /* Daha küçük boşluk */
}

.post-link {
  text-decoration: none; /* Post link altı çizgisini kaldır */
}

.post-link:hover {
  text-decoration: none; /* Hover durumunda da altı çizgi olmasın */
}
</style>
