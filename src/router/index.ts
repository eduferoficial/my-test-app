import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
{
    path: '',
    component: () => import ('../views/HomePage.vue')
  },
{
    path: '/veiculos',
    component: () => import ('../views/VeiculosPage.vue')
  },
  
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
