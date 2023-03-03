<template>
  <q-page>
    <div class="text-h5 text-center q-pt-lg">
      Add Food
    </div>
    <div class="row q-pa-sm q-col-gutter-md justify-center">
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-select filled
        v-model="food.owner_id" map-options emit-value
        option-value="id" option-label="name"
        :options="users"
        label="Select Financier" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="food.hotel_amount" label="Total Hotel Amount" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="food.other_amount" label="Total Other Amount" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input v-model="food.date" filled type="date" hint="Date" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input label="Note" v-model="food.note" filled type="textarea" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <div class="text-h6" v-if="users.length">
          Choose User
        </div>
        <div v-for="user in users" :key="user">
          <q-checkbox v-model="user.is_added" :model-value="user.is_added ? true : false" :label="user.name" />
        </div>
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-btn class="bg-primary text-red-1 full-width" icon="add" label="Add" @click="saveFood" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default {
  name: 'AddFood',
  data() {
    return {
      food: {
        owner_id: null,
        hotel_amount: 0,
        other_amount: 0,
        date: null,
        note: null,
      },
    }
  },
  computed: {
    users() {
      return this.page_data && this.page_data.users && this.page_data.users.length ? this.page_data.users : []
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      let data = {
        method: "get",
        url: "users",
        loading: false
      };
        await this.send_request(data);
    },
    async saveFood() {
      this.food.users = this.users.filter(user => user.is_added == true)
      this.food.users = this.food.users.map(user => user.id)
      let data = {
        method: "post",
        url: "foods",
        data: this.food,
        loading: false
      };
      let res =  await this.send_request(data);
      if(res.status) {
        this.$router.push('/view-all-foods')
      }
    },
  }
}
</script>
