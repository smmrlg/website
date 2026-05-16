import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '@/views/MainScreen.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
         {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    },
        {
      path: '/about',
      name: 'AboutScreen',
      component: About
    }
  ],
})

export default router
