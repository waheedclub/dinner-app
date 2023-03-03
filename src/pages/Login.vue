<template>
  <q-page class="login_page">
    <div filter-color="orange" class="page-header clear-filter">
      <div class="row justify-center page-header-image" id="bg-color" style="height: 100vh;">
        <div class="bg-filter-orange1"></div>
        <div class="col-lg-3 col-md-3 q-my-auto">
          <div>
              <div slot="header" class="logo-container">

                <img v-bind:src="'/app_logo.png'"/>
              </div>
            <q-form class="q-px-lg q-pt-lg" @submit.prevent="login">
                <q-input
                  square
                  clearable
                  ref="email"
                  v-model="user.email"
                  type="email"
                  label="Email"
                  class="input-text"
                  :rules="[
                    (val) => (val && val.length > 0) || 'Email is required',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  v-model="user.password"
                  ref="password"
                  :type="isPwd ? 'password' : 'text'"
                  label="Password"
                  class="input-text"
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Please type your password',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>

              <q-card-actions class="q-pt-xl1 content_center">
                <q-btn
                  style="background: #31CCEC;"
                  size="lg"
                  class="full-width main-color btn-lg login-btn q-mt-none"
                  id="btn1"
                  label="Login"
                  icon="lock"
                  type="submit"
                  :loading="loading"
                  @click.prevent="login"
                />
              </q-card-actions>
  <!--            <q-card-section class="text-center q-pt-sm">-->
  <!--              <div class="row">-->
  <!--                <div class="col-12 col-md-6">-->
  <!--                  <router-link to="/auth/password/reset">-->
  <!--                    <p class="text-grey-6 float-left q-ml-sm forgot-text">-->
  <!--                      Forgot password?-->
  <!--                    </p>-->
  <!--                  </router-link>-->
  <!--                </div>-->

  <!--              </div>-->
  <!--            </q-card-section>-->
            </q-form>
          </div>
         </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { Notify, LocalStorage, Loading } from "quasar";
import { useAuthStore } from "src/stores/auth";
export default {
  name: "Login",

  data() {
    return {
      loading: false,
      signup_title: "Register",
      store: useAuthStore(),
      user: {
        email: null,
        password: null
      },
      isPwd: true,
      email: "",
      password: "",
      router: "",
    };
  },
  methods: {
    async login() {
      this.loading = true;
      let data = {
        method: "post",
        url: "auth/login",
        data: this.user,
        loading: false
      };
        await this.send_request(data).then((res) => {
          this.store.storeAuthData(res.data.data.user, res.data.data.token.plainTextToken);
        }).catch((error) => {
          this.loading = false
          console.log(error)
        });

        this.loading = false
    }
  }
};
</script>
