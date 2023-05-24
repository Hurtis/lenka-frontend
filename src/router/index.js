import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/words',
      name: 'words',
      component: () => import('@/views/WordsView.vue')
    },
    {
      path: '/irregular-verbs',
      name: 'irregular-verbs',
      component: () => import('@/views/VerbsView.vue')
    },
    {
      path: '/prepositions',
      name: 'prepositions',
      component: () => import('@/views/PrepView.vue')
    },
    {
      path: '/as-like',
      name: 'as-like',
      component: () => import('@/views/AsLikeView.vue')
    },
    {
      path: '/edit-custom-words',
      name: 'edit-custom-words',
      component: () => import('@/views/EditWordsView.vue')
    },
    {
      path: '/custom-words',
      name: 'custom-words',
      component: () => import('@/views/CustomView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
