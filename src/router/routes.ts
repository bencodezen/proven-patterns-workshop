import HomePage from '@/pages/index.vue'
import AboutPage from '@/pages/about.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
]
