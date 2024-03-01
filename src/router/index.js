import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../components/Blog.vue'
import Home from '../components/Home.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'Blog', component: Blog, meta: { hideLink: true } },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
