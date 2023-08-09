import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/views/FrontPage/index.vue'
import Account from "@/views/UserManagement/Account/index.vue"
import Role from "@/views/UserManagement/Role/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPage
    },
    {
      path: '/userManagement/account',
      name: 'home',
      children:[{
        path:'/userManagement/account',
        name: 'Account',
        component:Account
      },{
        path:'/userManagement/role',
        name: 'Role',
        component:Role
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
