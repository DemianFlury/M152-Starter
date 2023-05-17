import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aufgabe1 from '../views/Pages/aufgabe1.vue'
import aufgabe2 from '../views/Pages/aufgabe2.vue'
import RWD from '../views/Pages/RWD.vue'
import form from '../views/Pages/form.vue'
import budgetplanner from '../views/Pages/budgetplanner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aufgabe1',
      name: 'Aufgabe 1',
      component: aufgabe1,
    },
    {
      path: '/aufgabe2',
      name: 'Aufgabe 2',
      component: aufgabe2,
    },
    {
      path: '/RWD',
      name: 'Aufgabe RWD',
      component: RWD,
    },
    {
      path: '/form',
      name: 'Aufgabe Form',
      component: form,
    },
    { 
      path: '/budget',
      name: 'Budgetplaner',
      component: budgetplanner 
    }
  ]
})

export default router
