<template>
  <div class="post-list">
    <div class="main-content">
      <div class="featured-post">
        <PostItem :post="featuredPost1" />
        <PostItem :post="featuredPost2" />
      </div>
      <div class="sidebar-container">
        <PostSidebar />
      </div>
    </div>
    <div class="additional-posts">
      <div class="post-grid">
        <PostItem v-for="post in additionalPosts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
import PostSidebar from './PostSidebar.vue';

export default {
  name: 'PostList',
  components: {
    PostItem,
    PostSidebar
  },
  data() {
    return {
      featuredPost1: {
        id: 1,
        title: 'Araba Park Etme Teknikleri Rehberi',
        summary: 'Sürüş deneyiminiz boyunca aracınızı farklı yerlere ve farklı pozisyonlara park etmeniz gerekecektir. Bir garaja, otoparka, yol kenarına veya başka bir yere park etmeniz gerekebilir. Bu, aracınızı park etmeniz gereken alana göre ayarlamanız gerekeceği anlamına gelir. Tüm park yerleri aynı olmayacak ve hedefe ulaşmak için farklı park etme becerileri sergilemeniz gerekecek.',
        image: 'https://png.pngtree.com/thumb_back/fw800/background/20230816/pngtree-a-line-of-cars-in-an-inground-parking-lot-image_13059211.jpg'
      },
      featuredPost2: {
        id: 2,
        title: '4 Mevsim Lastik Nedir? Yaz Lastiği İle Arasındaki Fark Nedir',
        summary: 'Bir araç için lastik satın almak zor bir iş olabilir. Aşınma derecelendirmeleri, hız derecelendirmeleri, sıcaklık önerileri ve boyutları arasında, belirli bir araç ve coğrafi bölge için hangi lastiğin en uygun olduğunu belirlemek zordur.1970’lerin sonlarına kadar, dünyanın birçok yerindeki sürücüler, havalar soğuduğunda lastik değiştirme yüküyle karşı karşıya kaldılar...',
        image: 'https://jantdunyasi.com/cdn/shop/articles/dort-mevsim-lastik-v1_1024x1024.jpg?v=1701378848'
      },
      additionalPosts: [
        { id: 3, title: 'Apple Carplay Nedir?', summary: 'Apple CarPlay, iPhone kullanıcıları için tasarlanmış bir otomobil entegrasyon platformudur. Bu akıllı sistem, sürücülere yardımcı olurken aynı zamanda güvenli bir deneyim sunar...', image: 'https://blog.otomerkezi.net/wp-content/uploads/apple-carplay-nedir-1-1140x912.jpg' },
        { id: 4, title: 'Dünyanın En Pahalı 15 Arabası', summary: 'Otomobil bir tutku, fantastik bir dünyadır. Geçmişten günümüze gelen ve her sene kullanıcısını kendine hayran bırakan markalar tarafından gelişen, değişen bir dünyadır. Otomotiv dünyasında, kullanıcılar kendi bütçelerine göre farklı marka modellerdeki tutkularına erişebilmektedirler. Peki her gün binlercesini yollarda gördüğümüz bu araçların, dünya üzerindeki en pahalı modelleri nelerdir? Hep beraber bu sorunun cevabını araçlar ve fiyatlarıyla inceleyelim...', image: 'https://media.cnn.com/api/v1/images/stellar/prod/160301104845-chiron-2.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_447' },
        { id: 5, title: 'Kilometresi (Km) Düşürülmüş Araç Nasıl Anlaşılır?', summary: 'Aracın kilometre sayacına müdahale edilerek, araç olduğundan daha az kilometreye indirilir.İkinci el araçlarda, aracı daha değerli göstermek amacıyla en sık başvurulan hilelerden biri araç kilometrelerini düşürmektir...',image: 'https://pratikaraba.com/userfiles/images/blog/gosterge-paneli/arac-gosterge-tamiri.jpg' },
        { id: 6, title: 'Motorlu Araçlar Hakkında Teknik Bilgiler', summary: 'Genel anlamıyla yakıttan elde edilen enerjiyi mekanik enerjiye çeviren makineye motor denir. Araba motorlar kullandıkları yakıt tiplerine göre ayrıştırılabilirler. Bunlar, benzinli motor, dizel motor ve LPG’li motor olarak ayırabiliriz. Motorları yakıt tipine göre ayırdığımız gibi başka unsurlara göre de ayırabiliriz...',image: 'https://img.ulusal.com.tr/rcman/Cw1280h720q95gc/storage/files/images/2023/02/03/turkiyede-2022de-en-cok-satilan-otomobil-markalar-belli-oldu-2022-en-cok-satilan-arac-modelleri-turkiye-en-cok-satilan-arabalar-otomobil-istatistikleri-rdSQ.jpg' },
        { id: 7, title: 'ABS Nedir ve Nasıl Çalışır?', summary: 'ABS sistemi (Anti-Lock Braking System), 1936 yılında geliştirilmiş olup otomobillerin manevralarını ve durma yeteneklerini sağlamak amaçlı ortaya çıkmıştır. Almanca ismi ise;  Anrilockiersystem’dir.Araç fren sisteminin bir arabanın en önemli bileşenlerinden biri olduğunu söylemek yanlış olmaz. Riskli anlarda aracın kolayca durabilmesi ve sürüş güvenliğinin maksimize edilebilmesi için fren sistemine büyük rol düşer. Günümüzde araç üreticilerinin tercih ettikleri farklı fren sistemleri mevcut.',image: 'https://cdn.otorog.com/images/b_motor-tamiri-nerede-yaptirilir-777139.jpg' },
        { id: 8, title: 'Şanzıman Nedir? Şanzıman Neden Arızalanır?', summary: 'Benzin, dizel ya da elektrik, öncelikle motora bir enerji verir. Bu enerji çeşitli yöntemlerle ve parçalarla hareket enerjisine çevrilir ve böylece aracın hareket etmesi sağlanır. Şanzıman ya da diğer adıyla vites kutusu da enerjiyi tekerleklere ileten bu parçalardan biridir.',image: 'https://arabam-blog.mncdn.com/wp-content/uploads/2020/08/sanziman-gorseli.jpg' },
        { id: 9, title: 'ESP Nedir? Nasıl Çalışır?', summary: 'Otomotiv mühendisliğinin gelişen teknolojiyle birlikte kazandığı ivme, araç güvenlik sistemlerini de her geçen yıl ileri seviyelere taşıyor. Sürüş güvenliğini artıran bu sistemler, 2000’li yıllara damga vuran özelliklerle yeni nesil araçlara uygulanmaya devam ediyor. Sürücülerin araç ve yolla uyumlanmasını sağlayan ESP, yani “Electronic Stability Program” da otomotiv teknolojisinde fark yaratan donanımlardan biri.', image:'https://blog.otomerkezi.net/wp-content/uploads/manevra-yapan-arabalar.jpg '},
        { id: 10, title: '', summary: 'Aracın kilometre sayacına müdahale edilerek, araç olduğundan daha az kilometreye indirilir.İkinci el araçlarda, aracı daha değerli göstermek amacıyla en sık başvurulan hilelerden biri araç kilometrelerini düşürmektir...',image: 'https://pratikaraba.com/userfiles/images/blog/gosterge-paneli/arac-gosterge-tamiri.jpg' },
        { id: 11, title: 'Kilometresi (Km) Düşürülmüş Araç Nasıl Anlaşılır?', summary: 'Aracın kilometre sayacına müdahale edilerek, araç olduğundan daha az kilometreye indirilir.İkinci el araçlarda, aracı daha değerli göstermek amacıyla en sık başvurulan hilelerden biri araç kilometrelerini düşürmektir...',image: 'https://pratikaraba.com/userfiles/images/blog/gosterge-paneli/arac-gosterge-tamiri.jpg' },
        { id: 12, title: 'Kilometresi (Km) Düşürülmüş Araç Nasıl Anlaşılır?', summary: 'Aracın kilometre sayacına müdahale edilerek, araç olduğundan daha az kilometreye indirilir.İkinci el araçlarda, aracı daha değerli göstermek amacıyla en sık başvurulan hilelerden biri araç kilometrelerini düşürmektir...',image: 'https://pratikaraba.com/userfiles/images/blog/gosterge-paneli/arac-gosterge-tamiri.jpg' },
        { id: 13, title: 'Kilometresi (Km) Düşürülmüş Araç Nasıl Anlaşılır?', summary: 'Aracın kilometre sayacına müdahale edilerek, araç olduğundan daha az kilometreye indirilir.İkinci el araçlarda, aracı daha değerli göstermek amacıyla en sık başvurulan hilelerden biri araç kilometrelerini düşürmektir...',image: 'https://pratikaraba.com/userfiles/images/blog/gosterge-paneli/arac-gosterge-tamiri.jpg' },
        { id: 14, title: 'Kilometresi (Km) Düşürülmüş Araç Nasıl Anlaşılır?', summary: 'Aracın kilometre sayacına müdahale edilerek, araç olduğundan daha az kilometreye indirilir.İkinci el araçlarda, aracı daha değerli göstermek amacıyla en sık başvurulan hilelerden biri araç kilometrelerini düşürmektir...',image: 'https://pratikaraba.com/userfiles/images/blog/gosterge-paneli/arac-gosterge-tamiri.jpg' },
      ]
    };
  }
};
</script>

<style>
.post-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 65px;
  box-sizing: border-box;
}

.main-content {
  display: flex;
  gap: 20px;
}

.featured-post {
  display: flexbox;
  flex-direction: column;
  flex: 2; /* İlk post genişliği */
}

.sidebar-container {
  flex: 1; /* Sidebar genişliği */
  min-width: 50px; /* Sidebar minimum genişliği */
}

.additional-posts {
  margin-top: 20px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* 3'er 3'er sıralama */
  gap: 20px;
}
</style>