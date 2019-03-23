import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/Index')
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: () => import('@/components/AddSmoothie')
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: () => import('@/components/EditSmoothie')
    },
    {
      path: '/edit-smoothie/:smoothie_slug/favorite-recipe',
      name: 'FavoriteRecipe',
      component: () => ('@/components/FavoriteSmoothie'),
      meta: {transitionName: 'slide'},
    },
  ]
})

