import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach(function (to, from, next) { 
  window.scrollTo(0, 0);
  next();
});

export default router
