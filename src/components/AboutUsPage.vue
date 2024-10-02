<template>
  <div class="about">
    <SiteHeader />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <div class="content">
      <h1>Hakkımızda</h1>
      <section class="about-section">
        <h2>Otomobil Tutkumuz</h2>
        <p>
          OtoBlog olarak, 2015 yılından beri otomobil dünyasının nabzını tutuyoruz. Tutkulu bir ekip olarak, en son otomobil haberlerini, detaylı araç incelemelerini ve sektördeki yenilikleri sizlerle buluşturuyoruz.
        </p>
        <p>
          Misyonumuz, otomobil severlere güvenilir, tarafsız ve kapsamlı bilgiler sunarak, araç seçimlerinde ve bakımlarında rehberlik etmektir. Her marka ve modele eşit mesafede durarak, okuyucularımıza en doğru bilgiyi aktarmayı hedefliyoruz.
        </p>
      </section>
      
      <section class="team-section">
        <h2>Ekibimiz</h2>
        <p>
          Deneyimli otomotiv gazetecileri, mekanik uzmanları ve test sürücülerinden oluşan ekibimiz, sizlere en güncel ve doğru bilgileri sunmak için çalışıyor. Her birimiz otomobil tutkusuyla dolu ve bu tutkuyu sizlerle paylaşmaktan büyük keyif alıyoruz.
        </p>
      </section>
      
      <section class="contact-section">
        <h2>İletişim</h2>
        <p>Bizimle iletişime geçmek için:</p>
        <ul>
          <li>E-posta: info@otoblog.com</li>
          <li>Telefon: +90 541 802 72 45</li>
          <li>Adres: İhsaniye Caddesi , Selçuklu/Konya</li>
        </ul>
        <p>
          Sosyal medyada bizi takip edin:
        </p>
        <div class="social-links">
          <a href="https://www.facebook.com/otoblog" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.twitter.com/otoblog" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com/otoblog" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader.vue';

export default {
  name: 'AboutUsPage',
  components: {
    SiteHeader,
  },
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
}

.content {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  flex-grow: 1;
}

h1 {
  color: #333;
  font-size: 2.5em;
  margin-top: 60px;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  color: #444;
  font-size: 1.8em;
  margin-top: 30px;
  margin-bottom: 20px;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.about-section, .team-section, .contact-section {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.social-link i {
  margin-right: 8px;
}

.social-link:hover {
  text-decoration: none;
}

.social-link:nth-child(1) {
  background-color: #3b5998;
}

.social-link:nth-child(2) {
  background-color: #1da1f2;
}

.social-link:nth-child(3) {
  background-color: #e1306c;
}

.social-link:nth-child(1):hover {
  background-color: #2d4373;
}

.social-link:nth-child(2):hover {
  background-color: #0c85d0;
}

.social-link:nth-child(3):hover {
  background-color: #c13584;
}

@media (max-width: 768px) {
  .content {
    padding: 20px;
  }

  h1 {
    margin-top: 40px;
  }
}
</style>