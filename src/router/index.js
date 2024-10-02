import { createRouter, createWebHistory } from 'vue-router';
import PostDetailPage from '@/components/PostDetailPage.vue';
import HomePage from '@/components/HomePage.vue';
import AboutUsPage from '@/components/AboutUsPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';

const routes = [
  {
    path: '/:path(.*)',
    component: HomePage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/cars/:id',
    name: 'PostDetail',
    component: PostDetailPage
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUsPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
