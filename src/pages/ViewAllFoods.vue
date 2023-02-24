<template>
  <q-page>
    <div class="text-h5 text-center q-py-lg">
     View All Foods
    </div>
    <div class="row q-pa-sm justify-center">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 shadow-1">
        <q-markup-table :separator="separator" flat bordered>
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Amount</th>
              <th class="text-left">Users</th>
              <th class="text-left">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">25-08-2021</td>
              <td class="text-left">10000</td>
              <td class="text-left">10</td>
              <td class="text-left">
                <q-icon name="visibility_off" size="25px" />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>


    <div class="q-pa-sm">
      <q-markup-table class="q-pa-sm">
        <thead>
          <tr>
            <th class="text-left">Date</th>
            <th class="text-left">Total Amount</th>
            <th class="text-left">User</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">25 08 2021</td>
            <td class="text-left">2500</td>
            <td class="text-left">50</td>
            <td class="text-left">
              <q-btn icon="visibility" class="bg-secondary text-red-1 q-px-sm q-ml-sm" />
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
  setup() {
    return {
      separator: ref('vertical'),
      separatorOptions: [
        // { label: 'Horizontal', value: 'horizontal' },
        // { label: 'Vertical', value: 'vertical' },
        // { label: 'Cell', value: 'cell' },
        // { label: 'None', value: 'none' }
      ]
    }
  }
})
</script>
