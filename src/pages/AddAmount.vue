<template>
  <q-page>
    <div class="text-h5 text-center q-pt-lg">
      Add Amount
    </div>
    <div class="row q-pa-sm justify-center">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-8">
        <q-select filled v-model="model" :options="options" label="Select User" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-8 q-mt-md">
        <q-input filled v-model="text" label="Amount" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8 q-mt-md">
        <q-btn class="bg-primary text-red-1 full-width" icon="add" label="Add Amount" />
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
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
    }
  }
}
</script>
