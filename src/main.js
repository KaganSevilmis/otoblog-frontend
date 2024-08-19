import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Router'ı import edin
import store from './store'; // Eğer Vuex kullanıyorsanız

const app = createApp(App);

app.use(router); // Router'ı Vue uygulamasına dahil edin
app.use(store); // Eğer Vuex kullanıyorsanız
app.mount('#app'); // #app ID'sine sahip elemana Vue uygulamasını monte edin
