<template>
  <q-page>
    <div class="text-h5 text-center q-py-lg">
      View Food Details
    </div>
    <div class="row q-pa-sm justify-center q-col-gutter-sm">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <div class="bg-blue-7 rounded-borders q-pa-md text-red-1">
          <div class="row" v-if="food">
            <div class="col-6 text-subtitle1">Record Added By :</div>
            <div class="col-6 text-subtitle1">{{ food.added_by_user.name }}</div>
            <div class="col-6 text-subtitle1">Amount Given By :</div>
            <div class="col-6 text-subtitle1">{{ food.given_by_user.name }}</div>
            <div class="col-6 text-subtitle1">Hotel Amount :</div>
            <div class="col-6 text-subtitle1">{{food.hotel_amount}}</div>
            <div class="col-6 text-subtitle1">Other Amount :</div>
            <div class="col-6 text-subtitle1">{{food.other_amount}}</div>
            <div class="col-6 text-subtitle1">Total Amount :</div>
            <div class="col-6 text-subtitle1">{{food.total_amount}}</div>
            <div class="col-12 text-subtitle1 text-weight-bold">partner</div>
            <div class="col-12">
              <div class="row" v-for="user in food.users">
                <div class="col-6 text-subtitle1">{{user.name}}</div>
               <div class="col-6 text-subtitle1">{{user.pivot.amount}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'FoodsDetails',
  data() {
    return {
      food: null,
    }
  },
  async mounted() {

    let data = {
        method: "get",
        url: "foods/" + Number(this.$route.params.id) ,
        loading: false
      };
        await this.send_request(data);
    if(this.page_data && this.page_data.current_food) {
      this.food = this.page_data.current_food
    }
    console.log(this.food)
  }
}
</script>
