import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/Index')
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: () => import('@/views/create/CreateSmoothieView')
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: () => import('@/views/edit/EditSmoothieView')
    },
    {
      path: '/edit-smoothie/:smoothie_slug/favorite-recipe',
      name: 'FavoriteRecipe',
      component: () => ('@/views/create/FavoriteSmoothie'),
      meta: {transitionName: 'slide'},
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => ('@/views/auth/SignInView')
    },
  ]
})

