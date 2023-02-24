<template>
  <q-page>
    <div class="text-h4 text-center q-py-lg">
      Dashboard
    </div>
    <div class="row q-pa-sm justify-center q-col-gutter-sm">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center" v-for="box in boxes">
        <div :class="box.bg_color" class="rounded-borders q-pa-md text-red-1">
          <div class="col-12 text-h5">{{ box.name }}</div>
          <div class="row q-pt-md">
            <div class="col-6 text-subtitle1">Panding :</div>
            <div class="col-6 text-subtitle1">{{ box.padding_price }}</div>
            <div class="col-6 text-subtitle1">Advance :</div>
            <div class="col-6 text-subtitle1">{{ box.advance_price }}</div>
            <div class="col-6 text-subtitle1">Total Amount :</div>
            <div class="col-6 text-subtitle1">{{ box.total_price }}</div>
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
  }
}
</script>
