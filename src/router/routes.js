
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      { path: '/', component: () => import('pages/Dashboard.vue') },
      { path: '/add-user', component: () => import('pages/AddUser.vue') },
      { path: '/view-all-users', component: () => import('src/pages/ViewAllUsers.vue') },
      { path: '/add-food', component: () => import('src/pages/AddFood.vue') },
      { path: '/view-all-foods', component: () => import('src/pages/ViewAllFoods.vue') },
      { path: '/add-amount', component: () => import('src/pages/AddAmount.vue') },
      { path: '/foods-detail', component: () => import('src/pages/FoodsDetails.vue') },
      { path: '/login', component: () => import('src/pages/Login.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
