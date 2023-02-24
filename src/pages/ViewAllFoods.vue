<template>
  <q-page>
    <div class="text-h5 text-center q-py-lg">
     View All Foods
    </div>
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
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
