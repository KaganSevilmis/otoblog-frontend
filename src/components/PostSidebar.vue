<template>
  <div class="sidebar">
    <h3>FAYDALI BİLGİLER</h3>
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
  },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  background-color: #f4f4f4;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh; /* Sidebar'ın maksimum yüksekliği */
  overflow-y: auto; /* Kaydırılabilir olmasını sağlar */
}

.sidebar h3 {
  margin-top: 0;
  margin-bottom: 15px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 15px;
}

.cars-link {
  text-decoration: none;
  color: black;
}

.cars-link:hover {
  text-decoration: none;
  color: #333;
}

/* Özelleştirilmiş stil */
.post-sidebar {
  max-height: 100vh; /* PostDetailPage için özel yükseklik */
}
</style>
