<template>
  <div class="sidebar">
    <h3>EN ÇOK TIKLANANLAR</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/post/' + post.id" class="post-link">
          <PostItem :post="post" />
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
  data() {
    return {
      posts: [
        { id: 4, title: 'Dünyanın En Pahalı 15 Arabası', summary: 'Otomobil bir tutku, fantastik bir dünyadır. Geçmişten günümüze gelen ve her sene kullanıcısını kendine hayran bırakan markalar tarafından gelişen, değişen bir dünyadır. Otomotiv dünyasında, kullanıcılar kendi bütçelerine göre farklı marka modellerdeki tutkularına erişebilmektedirler. Peki her gün binlercesini yollarda gördüğümüz bu araçların, dünya üzerindeki en pahalı modelleri nelerdir? Hep beraber bu sorunun cevabını araçlar ve fiyatlarıyla inceleyelim...', image: 'https://media.cnn.com/api/v1/images/stellar/prod/160301104845-chiron-2.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_447' },
        { id: 3, title: 'Post 3', summary: 'Summary of Post 2', image: 'path/to/image2.jpg' },
        { id: 5, title: 'Post 5', summary: 'Summary of Post 3', image: 'path/to/image3.jpg' },
        { id: 7, title: 'Post 7', summary: 'Summary of Post 4', image: 'path/to/image4.jpg' },
        { id: 9, title: 'Post 9', summary: 'Summary of Post 4', image: 'path/to/image4.jpg' },
        { id: 11, title: 'Post 11', summary: 'Summary of Post 4', image: 'path/to/image4.jpg' },
      ],
    };
  },
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
