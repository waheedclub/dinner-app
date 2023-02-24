<template>
  <q-page>
    <div class="text-h6 text-center q-py-lg">
      View All User
    </div>

    <div class="row first_user_table q-pa-sm justify-center">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <q-list bordered padding class="shadow-1">
          <q-item clickable v-ripple v-for="user in users">
            <q-item-section avatar top>
              <q-avatar :icon="user.icon" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label lines="1">{{ user.name }} <q-badge :color="user.status == 1 ? 'green' : 'red'">{{ user.status
                == 1 ? 'Active' : 'Block' }}</q-badge></q-item-label>
              <q-item-label caption>{{ user.email }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon color="positive" name="edit" class="q-px-xs" />
              <q-icon color="negative" name="delete" class="q-px-xs" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <div class="q-pa-sm second_user_table">
      <q-markup-table class="q-pa-sm">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Status</th>
            <th class="text-left">Image</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Abdul Waheed</td>
            <td class="text-left">waheed@nodesol.com</td>
            <td class="text-left">Block</td>
            <td class="text-left">User Image</td>
            <td class="text-center">
              <q-btn icon="edit" class="bg-positive text-red-1 q-px-sm" />
              <q-btn icon="delete" class="bg-negative text-red-1 q-px-sm q-ml-sm" />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  name: 'ViewAllUsers',
  data() {
    return {
      users: [
        { icon: 'image', name: 'Abdul Waheed', email: 'waheed@nodesol.com', status: 1 },
        { icon: 'image', name: 'Zohaib', email: 'zohaib@nodesol.com', status: 0 },
        { icon: 'image', name: 'Shakeel', email: 'shakeel@nodesol.com', status: 1 },
        { icon: 'image', name: 'Akhlaq', email: 'akhlaq@nodesol.com', status: 1 },
      ]
    }
  }
}
</script>

<style scoped>
  /* @media screen and (max-width: 767px) {
  .second_user_table {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .first_user_table {
    display: none;
  }
} */
</style>
