import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify, LocalStorage} from "quasar";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: process.env.API_URL })

export default boot(({ app, store, router }) => {
  // set default to use withCredentials
  api.defaults.withCredentials = true

  /**
   * Intercept every request to make sure we have a csrf token. If we dont then get a fresh token
   */
  api.interceptors.request.use(async req => {
    // if(!store.state.auth.csrfToken && !Cookies.get('XSRF-TOKEN') && req.url != '/api/csrf-cookie') {
    //   await api.get('/api/csrf-cookie').catch(error => {
    //     Notify.create({
    //       color: 'negative',
    //       position: 'top',
    //       message: 'Something went wrong: ' + error.response.data.message,
    //       icon: 'report_problem'
    //     })
    //     console.log(error)
    //     return Promise.reject();    // if(store.state.auth.userToken) {
    //   req.headers['Authorization'] =  'Bearer ' + store.state.auth.userToken
    // }
    //   })
    // }

    /**
     * Automatically append the authorization header
     */
    let user_token = LocalStorage.getItem('user_token')
    if(user_token && user_token) {
      req.headers['Authorization'] =  'Bearer ' + user_token
    }

    /**
     * Automatically append the Content type header if its not set
     */
    req.headers['Content-Type'] = req.headers['Content-Type'] ? req.headers['Content-Type'] : 'application/json'
    return Promise.resolve(req)
  })

  /**
   * Intercept every response to see if we got an authentication error. If yes then make the user re-login
   */
  axios.interceptors.response.use(response => {
    return response
  }, error => {
    if (error.response.status === 401) {
      Notify.create({
        type: 'negative',
        position: 'top',
        message: 'You must login to continue',
        icon: 'done'
      })
      router.push('/logout')
    }
    return Promise.reject(error)
  })


  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
