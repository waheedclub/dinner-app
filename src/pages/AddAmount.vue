<template>
  <q-page>
    <div class="text-h5 text-center q-pt-lg">
      Add Amount
    </div>
    <div class="row q-pa-sm justify-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <q-select filled
        v-model="amount.sender_id" map-options emit-value
        option-value="id" option-label="name"
        :options="users"
        label="Select Sender" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8  q-mt-md">
        <q-select filled
        v-model="amount.receiver_id" map-options emit-value
        option-value="id" option-label="name"
        :options="users"
        label="Select Receiver" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 q-mt-md">
        <q-input type="number" filled v-model="amount.amount" label="Amount" />
      </div>

      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 q-mt-md">
        <q-input  filled v-model="amount.note" label="Note (optional)" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8 q-mt-md">
        <q-btn class="bg-primary text-red-1 full-width" icon="add" label="Add Amount" @click="addAmount" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default {
  name: 'AddAmount',
  data() {
    return {
      amount : {
        sender_id: null,
        receiver_id: null,
        amount: 0,
        note:null
      }
    }
  },
  computed: {
    users() {
      return this.page_data && this.page_data.users && this.page_data.users.length ? this.page_data.users : []
    }
  },
  async mounted() {
    await this.getUsers()
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
    async addAmount() {
      let data = {
        method: "post",
        url: "amounts",
        data: this.amount,
        loading: false
      };
       let res = await this.send_request(data);
       if(res.status) {
         this.$router.push('/view-all-amounts');
       }
    }
  }
}
</script>
