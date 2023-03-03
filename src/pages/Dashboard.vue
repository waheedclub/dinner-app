<template>
  <q-page>
    <div class="text-h4 text-center q-py-lg">
      Dashboard
    </div>
    <div class="row q-pa-sm justify-center q-col-gutter-sm">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center" v-for="user in dashboard_users">
        <div class="bg-green-10 rounded-borders q-pa-md text-red-1">
          <div class="col-12 text-h5">{{ user.name }}</div>
          <div class="row q-pt-md">
            <div class="col-6 text-subtitle1">Pending Amount :</div>
            <div class="col-6 text-subtitle1">{{ user.advance_amount < 0  ? Math.abs(user.advance_amount) : 0}}</div>
            <div class="col-6 text-subtitle1">Advance Amount :</div>
            <div class="col-6 text-subtitle1">{{ user.advance_amount > 0  ? user.advance_amount : 0}}</div>
            <div class="col-6 text-subtitle1">Total Spendings :</div>
            <div class="col-6 text-subtitle1">{{ user.total_spendings }}</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  name: 'Dashboard',
  data() {
    return {
      boxes: [
        { bg_color: "bg-blue-10", name: "abdul waheed", padding_price: "2000", advance_price: "800", total_price: "3500" },
        { bg_color: "bg-red-10", name: "ali", padding_price: "500", advance_price: "200", total_price: "10" },
        { bg_color: "bg-amber-10", name: "Usman", padding_price: "5000", advance_price: "500", total_price: "50" },
        { bg_color: "bg-green-10", name: "Ch Zohaib", padding_price: "10000", advance_price: "20000", total_price: "50000" }
      ]
    }
  },
  computed: {
      dashboard_users() {
        return this.page_data && this.page_data.dashboard_users && this.page_data.dashboard_users.length ? this.page_data.dashboard_users : []
      }
  },
  async mounted() {
    await this.getUsers()
  },
  methods: {
    async getUsers() {
      let data = {
        method: "get",
        url: "get-dashboard-data",
        loading: false
      };
        await this.send_request(data);
    },
  }
}
</script>
