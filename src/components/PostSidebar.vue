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
        { id: 3, title: 'Şanzıman Nedir? Şanzıman Neden Arızalanır?', summary: 'Benzin, dizel ya da elektrik, öncelikle motora bir enerji verir. Bu enerji çeşitli yöntemlerle ve parçalarla hareket enerjisine çevrilir ve böylece aracın hareket etmesi sağlanır. Şanzıman ya da diğer adıyla vites kutusu da enerjiyi tekerleklere ileten bu parçalardan biridir.', image: 'https://arabam-blog.mncdn.com/wp-content/uploads/2020/08/sanziman-gorseli.jpg' },
        { id: 5, title: 'Kilometresi (Km) Düşürülmüş Araç Nasıl Anlaşılır?', summary: 'Aracın kilometre sayacına müdahale edilerek, araç olduğundan daha az kilometreye indirilir.İkinci el araçlarda, aracı daha değerli göstermek amacıyla en sık başvurulan hilelerden biri araç kilometrelerini düşürmektir...', image: 'https://pratikaraba.com/userfiles/images/blog/gosterge-paneli/arac-gosterge-tamiri.jpg' },
        { id: 7, title: 'Araç Kliması ve Yakıt Tüketimi', summary: 'Yaz günlerinde, yolculuk esnasında klima kullanmak sürücülerin aklına ilk olarak yakıta etkisini getirmektedir. Sürücüler klima kullanmanın çok fazla yakıt harcayacağını düşünürler, yanlış bir düşünce olmasa da kontrollü kullanımda tahmin edilen kadar bir tüketim olmayacaktır.', image: 'https://sm.shbdn.com/assets/auto360/common/x_565_424_arac-klima-bakimi-nasil-yapilir-arac-klima-bakimi-nasil-yapilir.jpg' },
        { id: 9, title: 'ESP Nedir? Nasıl Çalışır?', summary: 'Otomotiv mühendisliğinin gelişen teknolojiyle birlikte kazandığı ivme, araç güvenlik sistemlerini de her geçen yıl ileri seviyelere taşıyor. Sürüş güvenliğini artıran bu sistemler, 2000’li yıllara damga vuran özelliklerle yeni nesil araçlara uygulanmaya devam ediyor. Sürücülerin araç ve yolla uyumlanmasını sağlayan ESP, yani “Electronic Stability Program” da otomotiv teknolojisinde fark yaratan donanımlardan biri.', image: 'https://blog.otomerkezi.net/wp-content/uploads/manevra-yapan-arabalar.jpg' },
        { id: 11, title: 'Araba Kullanmayı Öğrenirken Hayatınızı Kolaylaştıracak Tavsiyeler', summary: 'Araba kullanmayı öğrenmek, yeni bir sürücü için önemli bir kilometre taşıdır ve en unutulmaz deneyimlerden biri olabilir. Bununla birlikte, bugünlerde yollardaki tüm dikkat dağıtıcı şeyler göz önüne alındığında, deneyimli bir sürücünün bile sürüş sırasında odaklanmakta zorluk çekmesi oldukça normal. Bu nedenle, bu makaledeki sürüş becerilerinizi geliştirmenize yardımcı olacak etkili ipuçlarını keşfetmenin tam zamanı!', image: 'https://www.mapfre.com.tr/blog/media/2020/07/araba-kullanirken-stresi-azaltacak-yollar.jpg' },
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
