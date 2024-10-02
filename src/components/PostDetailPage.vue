<template>
  <div class="post-detail-page">
    <SiteHeader />
    <div class="content-container">
      <div class="main-content">
        <div v-if="car">
          <!-- Başlık ve ilk görsel -->
          <div class="header-section">
            <h1>{{ car.başlıklar[0] }}</h1>
            <!-- İlk başlığın altına içerik ve başlıkların altına görseller yerleştirilecektir -->
            <div v-if="car.id === 16" class="content-section">
              <div v-html="car.içerik"></div>
              <div v-for="(baslik, index) in car.başlıklar.slice(1)" :key="index">
                <h3>{{ baslik }}</h3>
                <img v-if="car.görseller[index]" :src="car.görseller[index]" class="inline-image" />
              </div>
            </div>
            <!-- Diğer ID'ler için düzen -->
            <img v-if="car.id !== 16 && car.görseller.length > 0" :src="car.görseller[0]" class="top-image" :alt="car.başlıklar[0]" />
          </div>

          <!-- İçerik ve başlıklar/görseller -->
          <div v-if="car.başlıklar && car.başlıklar.length > 0">
            <div v-if="car.id !== 16">
              <div class="content-section" v-html="formattedContent"></div>
              <div v-for="(baslik, index) in car.başlıklar.slice(1)" :key="index">
                <h3>{{ baslik }}</h3>
                <img v-if="car.görseller[index + 1]" :src="car.görseller[index + 1]" class="inline-image" />
              </div>
            </div>
          </div>

          <!-- Yorum formu -->
          <CommentForm :car="car" @car-updated="updateCar" />

          <!-- Düzenleme Formu -->
          <div v-if="isEditing" class="edit-form">
            <input v-model="car.başlıklar[0]" placeholder="Başlık" />
            <textarea v-model="car.içerik" placeholder="İçerik"></textarea>
            <button @click="saveChanges">Kaydet</button>
          </div>
          <button @click="isEditing = !isEditing">{{ isEditing ? 'İptal' : 'Düzenle' }}</button>

          <!-- Yorumları Listeleme ve Silme Butonları -->
          <div v-if="car.yorumlar && car.yorumlar.length > 0">
            <div v-for="comment in car.yorumlar" :key="comment.id" class="comment">
              <p>{{ comment.içerik }}</p>
              <button @click="deleteComment(comment.id)">Sil</button>
            </div>
          </div>
        </div>
        <div v-else>
          Yükleniyor...
        </div>
      </div>

      <!-- Sağ taraftaki Sidebar -->
      <div class="sidebar-container">
        <PostSidebar :cars="filteredCars" class="custom-sidebar" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import SiteHeader from './SiteHeader.vue';
import CommentForm from './CommentForm.vue';
import PostSidebar from './PostSidebar.vue';

export default {
  name: 'PostDetailPage',
  components: {
    SiteHeader,
    CommentForm,
    PostSidebar,
  },
  data() {
    return {
      car: null,
      cars: [], // Tüm arabaları saklayacak dizi
      isEditing: false,
    };
  },
  computed: {
    formattedContent() {
      if (this.car && this.car.içerik && this.car.id !== 16 && this.car.id !== 23) {
        const content = this.car.içerik;
        const headings = this.car.başlıklar.slice(1);
        const images = this.car.görseller.slice(1);

        let formattedContent = content;
        
        // İçeriği düzenle
        headings.forEach((heading, index) => {
          const image = images[index] ? `<img src="${images[index]}" class="inline-image" />` : '';
          if (index === 1) {
            formattedContent = formattedContent.replace(new RegExp(`\\[${heading}\\]`, 'g'), `${heading} ${image}`);
          } else if (index > 1) {
            formattedContent = formattedContent.replace(new RegExp(`\\[${heading}\\]`, 'g'), `${heading} ${image}`);
          }
        });

        return formattedContent;
      }
      return this.car ? this.car.içerik : '';
    },
    filteredCars() {
      // Diğer arabalardan car.id'ye sahip olanları filtrele
      return this.cars.filter(car => car.id !== this.car.id);
    }
  },
  methods: {
    async fetchCarDetails() {
      try {
        const carId = this.$route.params.id;
        const response = await axios.get(`http://localhost:8000/cars/${carId}`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.car = response.data;
        console.log('Fetched car details:', this.car); // Veriyi kontrol et
      } catch (error) {
        console.error('Car details could not be fetched:', error);
      }
    },
    async fetchAllCars() {
      try {
        const response = await axios.get('http://localhost:8000/cars', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.cars = response.data;
      } catch (error) {
        console.error('All cars could not be fetched:', error);
      }
    },
    async deleteComment(commentId) {
      try {
        await axios.delete(`http://localhost:8000/yorumlar/${commentId}`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.car.yorumlar = this.car.yorumlar.filter(comment => comment.id !== commentId);
      } catch (error) {
        console.error('Comment could not be deleted:', error);
      }
    },
    async updateCar(updatedCar) {
      this.car = updatedCar;
      await this.fetchCarDetails(); // Verileri güncellediğimizde detayları yeniden yükle
    },
    async saveChanges() {
      try {
        const response = await axios.put(`http://localhost:8000/cars/${this.car.id}`, this.car, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        if (response.status === 200) {
          this.car = response.data;
          this.isEditing = false;
        }
      } catch (error) {
        console.error('Error updating car:', error);
      }
    }
  },
  mounted() {
    this.fetchCarDetails();
    this.fetchAllCars(); // Bu metodun var olduğundan emin olun
  },
  watch: {
    '$route.params.id'() {
      this.fetchCarDetails();
    }
  }
};
</script>

<style scoped>
.post-detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  min-height: 100vh;
  position: relative;
}

.content-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.main-content {
  width: 70%;
}

.sidebar-container {
  width: 25%;
  margin-left: 20px;
}

.header-section {
  margin-bottom: 20px;
}

.top-image {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
}

.content-section {
  margin: 20px 0;
}

.inline-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;
}

h1 {
  margin: 20px 0;
  color: black; /* İlk başlığın rengini siyah yap */
}

p {
  margin: 10px 0;
  text-align: left;
}

.edit-form input, .edit-form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.edit-form button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.edit-form button:hover {
  background-color: #0056b3;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.comment {
  margin-bottom: 20px;
}

.comment button {
  margin-top: 10px;
}
</style>
