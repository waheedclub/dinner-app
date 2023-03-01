import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/stores/auth'
import { LocalStorage } from 'quasar'
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })


  Router.beforeEach((to, from, next) => {
    to.matched.some((record) => {
      let store = useAuthStore();
      const loggedIn = store.is_user_logged_in
      const user = LocalStorage.getItem('user')
      if ('meta' in record) {
        if ('isAdmin' in record.meta) {
          if (!loggedIn) {
            next({
              path: '/auth/login',
              replace: true,
              query: { redirect: to.fullPath }
            })
          } else if (user.role !== 'admin') {
            next({
              path: '/dashboard',
              replace: true,
              query: { redirect: to.fullPath }
            })
          }
        } else {
          if ('requiresAuth' in record.meta) {
            if (record.meta.requiresAuth && !loggedIn) {
              next({
                path: '/auth/login',
                replace: true,
                query: { redirect: to.fullPath }
              })
            }
          }
        }
      }
    })
    next()
  })

  return Router
})
