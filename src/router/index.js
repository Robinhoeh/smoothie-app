
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    }
  ]
})

