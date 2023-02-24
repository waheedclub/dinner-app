<template>
  <q-page>
    <div class="text-h5 text-center q-pt-lg">
        Add User
      </div>
    <div class="row q-pa-sm justify-center q-col-gutter-md">
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="text" label="Name" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="text" label="Email" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-input filled v-model="text" label="Password" />
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-file icon="search" filled v-model="model" label="image">
          <q-icon size="20px" class="q-pb-md" name="attach_file" />
        </q-file>
      </div>
      <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8">
        <q-btn class="bg-primary text-red-1 full-width" icon="add" label="Add" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  name: 'AddUser'
}
</script>
