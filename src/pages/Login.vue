<template>
  <q-page class="flex flex-center" >
    <div class="row">
      <div class="col ">
        <q-card rounded class="shadow-6"  :class="$q.screen.gt.xs ? 'w-500': 'w-250'  &&  $q.screen.lt.lg ? 'w-341' : 'w-500' ">
          <q-card-section class="bg-blue-9">
            <h4 class="text-h5 text-white text-center q-my-md">Login</h4>
            <div class="absolute-bottom-right q-pr-md">
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md q-pt-lg"
            >
              <q-input
                type="email"
                filled
                v-model="name"
                label="email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type your email']"
              />

              <q-input
                filled
                type="password"
                v-model="age"
                label="Password *"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Please type your password',
                  val => val > 0 && val < 100 || 'Please type password'
                ]"
              />
              <div>
              </div>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-pa-lg">
            <q-btn unelevated size="lg"  class="full-width text-white bg-blue-9" label="Login" />
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>
.flex-center{
  min-height: 781px !important;
}

.w-250{
  width: 281px;
}
.w-500{
  width: 500px;
  height: 500px;
}
.w-341{
  width: 341px;
}
.bg-blue{
  background-color: #428bca;
}
</style>
