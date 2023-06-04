import { createRouter, createWebHistory } from 'vue-router'
import Details from '../views/Details.vue'
import Home from '../views/Home.vue'
import AddRecipe from '../views/AddRecipe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addrecipe',
      name: 'addrecipe',
      component: AddRecipe
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
  ]
})

export default router
