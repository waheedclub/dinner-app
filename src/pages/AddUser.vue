<template>
  <q-page>
    <div class="text-h5 text-center q-pt-lg">
        {{ is_update ? 'Edit' : 'Add' }} User
      </div>
    <div class="row q-pa-sm justify-center q-col-gutter-md">
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="user.name" label="Name" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="user.email" label="Email" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="user.password" label="Password" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8" v-if="!is_simple_user">
        <q-select filled label="Select role" v-model="user.role" :options="['admin', 'finance', 'user']"/>
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8" v-if="!is_simple_user">
        <q-select filled label="Select Status" v-model="user.status" map-options emit-value :options="[{label: 'Active', value: 1}, {label: 'Blocked', value: 0}]"/>
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-toolbar-title>Select Profile Icon</q-toolbar-title>
          <q-icon  v-for="icon in emojies" :key="icon" size="30px" class="q-pa-xs q-ma-md cursor-pointer" :class="user.image == icon ? 'active-emoji' : ''" :name="icon" @click="user.image = icon" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-btn :loading="loading" class="bg-primary text-red-1 full-width" :icon="is_update ? 'update' : 'add'" :label="is_update ? 'Update' : 'Add'" @click="addUser" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  name: 'AddUser',
  data() {
    return {
      loading: false,
      user: {
        name: null,
        image: '👮',
        email: null,
        password: null,
        role: 'user',
        status: 1
      },
      is_update: false,
      is_simple_user: true,
      emojies: [
        '👶',
        '👦',
        '👧',
        '👨',
        '👩',
        '👱',
        '👴',
        '👵',
        '👲',
        '👳',
        '👮',
        '👷',
        '💂',
        '🕵',
        '🎅',
        '👼',
        '👸',
        '👰',
        '💇',
        '💆',
        '🚶',
        '🏃',
        '💃',
        '🤴',
        '🤵',
        '🤰',
        '🤶',
        '🤦',
        '🤷',
        '🕺',
        '🤺',
        '🤸'
      ]
    }
  },
  mounted() {
    if(this.user.role == 'admin') {
      this.is_simple_user = false
    }
    if(this.$route.params.id) {
       this.is_update = true
      if(this.page_data && this.page_data.users) {
        this.user = this.page_data.users.find(user => user.id == this.$route.params.id)
      }
    }
  },
  methods: {
    async addUser() {
      this.loading = true
      let data = {
        method: this.is_update ? 'put' : "post",
        url: "users" + (this.is_update ? ('/' + this.$route.params.id) : ''),
        data: this.user,
        loading: false
      };
       let res = await this.send_request(data).catch( this.loading = false)
       if(res.status) {
         this.$router.push('/view-all-users')
       }
        this.loading = false
    }
  }
}
</script>
<style scoped>
   .active-emoji {
      border: 3px solid #9c27b0;
      border-radius: 100%;
      padding: 1px 7px 12px 7px;
   }
</style>
