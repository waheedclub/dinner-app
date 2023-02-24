<template>
  <q-page>
    <div class="text-h5 text-center q-pt-lg">
      Add Food
    </div>
    <div class="row q-pa-sm q-col-gutter-md justify-center">
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-select filled v-model="model" :options="options" label="Select User" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="text" label="Total Hotel Amount" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="text" label="Total Anti Amount" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input v-model="date" filled type="date" hint="Start date" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input label="Note" v-model="text" filled type="textarea" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <div class="text-h6">
          Choose User
        </div>
        <div>
          <q-checkbox v-model="val" label="Abdul Waheed" />
        </div>
        <div>
          <q-checkbox v-model="val" label="Usman Ashraf" />
        </div>
        <div>
          <q-checkbox v-model="val" label="Shakeel Ahmad" />
        </div>
        <div>
          <q-checkbox v-model="val" label="Ali Rashid" />
        </div>
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-btn class="bg-primary text-red-1 full-width" icon="add" label="Add" />
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
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      val: ref(true)
    }
  }
}
</script>
