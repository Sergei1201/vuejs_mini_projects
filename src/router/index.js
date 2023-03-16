import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import JobsView from '../views/JobsView'
import JobDetailsView from '../views/JobDetailsView'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView 
  },
  {
    path: '/jobs/:id',
    name: 'details',
    component: JobDetailsView,
    props: true
  },
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // Catch 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }

    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
