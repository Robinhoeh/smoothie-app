export default [
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
    meta: { transitionName: 'slide' },
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => ('@/views/auth/SignInView')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => ('@/views/auth/JoinView')
  }
]