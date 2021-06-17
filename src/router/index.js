import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import ArticlePage from "@/views/ArticlePage.vue";


const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/article', 
    component: ArticlePage 
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router