import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        icon: ['fas', 'house'],
        title: 'Home'
      },
    },
    {
      path: '/highscores',
      name: 'highscores',
      component: () => import('../views/HighscoresView.vue'),
      meta: {
        icon: ['fas', 'trophy'],
        title: 'Highscores'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Aboutview.vue'),
      meta: {
        icon: ['fas', 'question'],
        title: 'About'
      }
    },
    {
      path: '/game',
      name: 'game',
      children: [
        {
          path: '/game/pregame',
          name: 'pregame',
          component: () => import('../views/PreGameView.vue'),
        },
        {
          path: '/game/quiz',
          name: 'quiz',
          component: () => import('../views/QuizView.vue'),
        },
        {
          path: '/game/results',
          name: 'results',
          component: () => import('../views/ResultsView.vue'),
        },
      ]
    },
  ]
})

export default router
