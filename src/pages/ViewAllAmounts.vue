<template>
  <q-page>
    <div class="text-h5 text-center q-py-lg">
     View All Amounts
    </div>
    <div class="row q-pa-sm justify-center lt-sm">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 shadow-1">
        <q-markup-table :separator="separator" flat bordered>
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Amount</th>
              <th class="text-left">Sender</th>
              <th class="text-left">Receiver</th>
              <th class="text-left">Status</th>
              <th class="text-center">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="amount in amounts" :key="amounts">
              <td class="text-left">{{ amount.created_at }}</td>
              <td class="text-left">{{ amount.amount }}</td>
              <td class="text-left">{{amount.sender.name}}</td>
              <td class="text-left">{{amount.receiver.name}}</td>
              <td class="text-left">{{amount.is_approved == 1 ? 'Approved' : amount.is_approved == 2 ? 'Rejected' : 'Pending'}}</td>
              <td class="text-center">
                <q-icon v-if="amount.is_approved == 0" name="done" color="secondary" size="25px" @click="updateStatus(1, amount.id)" />
                <q-icon  v-if="amount.is_approved == 0" name="clear" color="red-10" size="25px" @click="updateStatus(2, amount.id)" />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>


    <div class="q-pa-sm gt-xs">
      <q-markup-table class="q-pa-sm">
        <thead>
          <tr>
             <th class="text-left">Date</th>
              <th class="text-left">Amount</th>
              <th class="text-left">Sender</th>
              <th class="text-left">Receiver</th>
              <th class="text-left">Status</th>
              <th class="text-center">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="amount in amounts" :key="amounts">
              <td class="text-left">{{ amount.created_at }}</td>
              <td class="text-left">{{ amount.amount }}</td>
              <td class="text-left">{{amount.sender.name}}</td>
              <td class="text-left">{{amount.receiver.name}}</td>
              <td class="text-left">{{amount.is_approved == 1 ? 'Approved' : amount.is_approved == 2 ? 'Rejected' : 'Pending'}}</td>
              <td class="text-center">
                <q-icon v-if="amount.is_approved == 0" name="done" color="secondary" size="25px" @click="updateStatus(1, amount.id)" />
                <q-icon  v-if="amount.is_approved == 0" name="clear" color="red-10" size="25px" @click="updateStatus(2, amount.id)" />
              </td>
            </tr>
        </tbody>
      </q-markup-table>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ViewAllFoods',
  computed: {
      amounts() {
        return this.page_data && this.page_data.amounts && this.page_data.amounts.length ? this.page_data.amounts : []
      }
  },
  async mounted() {
    await this.getAmounts()
  },
  methods: {
    async getAmounts() {
      let data = {
        method: "get",
        url: "amounts",
        loading: false
      };
        await this.send_request(data);
    },
    async updateStatus(status, id) {
       let data = {
        method: "post",
        url: "amount/update_status",
        data: {is_approved: status, id:id},
        loading: false
      };
       let res = await this.send_request(data);
       if(res.status) {
        this.getAmounts();
       }
    }
  }
})
</script>
