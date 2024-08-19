import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import PostDetailPage from '@/components/PostDetailPage.vue'
import AboutUsPage from '@/components/AboutUsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/cars/:id',
    name: 'CarDetail',
    component: PostDetailPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router