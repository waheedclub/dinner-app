import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import {useAppStore} from "stores/app";
// const app = useAppStore()
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: LocalStorage.getItem('user') ?? null,
    user_token: LocalStorage.getItem('user_token') ?? null,
  }),
  getters: {
    is_user_logged_in: (state) => state.user != null,
    //  if(status.user) {
    //    return true
    //  } else {
    //    return false
    //  }
  },
  actions: {
    storeAuthData(user, user_token) {
      LocalStorage.set('user', user)
      LocalStorage.set('user_token', user_token)
      this.$state.user = user
      this.$state.user_token = user_token
      this.router.push("/dashboard");
    },
    logout() {
      LocalStorage.remove('user')
      LocalStorage.remove('user_token')
      this.$state.user = null
      this.$state.user_token = null
      this.router.push("/auth/login");

    },
  },
});
