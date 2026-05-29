import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '@/views/MainScreen.vue'
import About from '@/views/About.vue'
import OrderScreen from '@/views/OrderScreen.vue'
import LoginScreen from '@/views/LoginScreen.vue'

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
    },
        {
      path:'/order',
      name:'OrderScreen',
      component: OrderScreen
    },
        {
      path:'/login',
      name:'LoginScreen',
      component: LoginScreen
    }
  ],
})

export default router
