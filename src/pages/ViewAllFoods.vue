<template>
  <q-page>
    <div class="text-h5 text-center q-py-lg">
     View All Foods
    </div>
    <div class="row q-pa-sm justify-center lt-sm">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 shadow-1">
        <q-markup-table :separator="separator" flat bordered>
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Hotel</th>
              <th class="text-left">Other</th>
              <th class="text-left">Amount</th>
              <th class="text-left">Users</th>
              <th class="text-center">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="food in foods" :key="food">
              <td class="text-left">{{ food.date }}</td>
              <td class="text-left">{{food.hotel_amount}}</td>
              <td class="text-left">{{food.other_amount}}</td>
              <td class="text-left">{{food.total_amount}}</td>
              <td class="text-left">{{food.users_count}}</td>
              <td class="text-center">
                <q-icon name="visibility" color="secondary" size="25px" @click="$router.push('/foods-detail/' + food.id)" />
                <q-icon name="delete" color="red" size="25px" @click="deleteConfirm(food)" />
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
              <th class="text-left">Hotel</th>
              <th class="text-left">Other</th>
              <th class="text-left">Amount</th>
              <th class="text-left">Users</th>
              <th class="text-center">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="food in foods" :key="food">
              <td class="text-left">{{ food.date }}</td>
              <td class="text-left">{{food.hotel_amount}}</td>
              <td class="text-left">{{food.other_amount}}</td>
              <td class="text-left">{{food.total_amount}}</td>
              <td class="text-left">{{food.users_count}}</td>
              <td class="text-center">
                <q-icon name="visibility" color="secondary" size="25px" @click="$router.push('/foods-detail/' + food.id)" />
                <q-icon name="delete" color="red" size="25px" @click="deleteConfirm(food)" />
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
  data() {
    return {
      foods: [],
    }
  },
  async mounted() {
    this.foods = this.page_data && this.page_data.foods && this.page_data.foods.length ? this.page_data.foods : []
    await this.getFoods()
    this.foods = this.page_data && this.page_data.foods && this.page_data.foods.length ? this.page_data.foods : []
  },
  methods: {
    async getFoods() {
      let data = {
        method: "get",
        url: "foods",
        loading: false
      };
        await this.send_request(data);
    },
    async deleteConfirm(food) {
      if(confirm('Are you sure, You want to delete this food item?')) {
        let data = {
        method: "delete",
        url: "foods/"+ food.id,
        loading: true,
        data: {loading: true}
      };
        let res = await this.send_request(data);
        if(res.status) {
          await this.getFoods();
         this.foods = this.page_data && this.page_data.foods && this.page_data.foods.length ? this.page_data.foods : []
        }
      }
    }
  }
})
</script>
