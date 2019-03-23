
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'
import FavoriteRecipe from '@/components/FavoriteRecipe'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
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
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    },
    {
      path: '/edit-smoothie/:smoothie_slug/favorite-recipe',
      name: 'FavoriteRecipe',
      component: FavoriteRecipe,
      meta: {transitionName: 'slide'}
    }
  ]
})

