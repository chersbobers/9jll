import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LevelList from '../views/LevelList.vue'
import Completions from '../views/Completions.vue'
import Players from '../views/Players.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/level-list', component: LevelList },
    { path: '/completions', component: Completions },
    { path: '/players', component: Players }
  ]
})
