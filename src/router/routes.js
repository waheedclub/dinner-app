
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/add-food', component: () => import('src/pages/AddFood.vue') },
      { path: '/view-all-foods', component: () => import('src/pages/ViewAllFoods.vue') },
      { path: '/add-amount', component: () => import('src/pages/AddAmount.vue') },
      { path: '/foods-detail/:id', component: () => import('src/pages/FoodsDetails.vue') },
      { path: '/logout', component: () => import('src/pages/auth/Logout.vue') },
      { path: '/view-all-amounts', component: () => import('src/pages/ViewAllAmounts.vue') },

    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/add-user', component: () => import('pages/AddUser.vue') },
      { path: '/add-user/:id', component: () => import('pages/AddUser.vue') },
      { path: '/view-all-users', component: () => import('src/pages/ViewAllUsers.vue') },
    ],
    meta: { requiresAuth: true, isAdmin: true }
  },

  {
    path: '/auth',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
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
