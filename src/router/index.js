import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name:  'Index',
  redirect: '/home',
  component: Home
},
{
  path: '/home',
  name: 'Home',
  component: Home
}
]

const router = new VueRouter({
  mode: 'hash',
  /*将默认的history模式更改为hash模式*/
  base: process.env.BASE_URL,
  routes
})

export default router;