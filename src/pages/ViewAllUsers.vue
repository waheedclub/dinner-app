<template>
  <q-page>
    <div class="text-h6 text-center q-py-lg">
      View All User
    </div>

    <div class="row justify-center">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">

        <q-list bordered padding style="max-width: 350px">

          <q-item clickable v-ripple v-for="user in users">
            <q-item-section avatar top>
              <q-avatar :icon="user.icon" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label lines="1">{{ user.name }} <q-badge :color="user.status == 1 ? 'green' : 'red'">{{ user.status == 1 ? 'Active' : 'Block' }}</q-badge></q-item-label>
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

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  name: 'ViewAllUsers',
  data() {
    return {
      users: [
        {icon: 'image', name: 'Abdul Waheed', email: 'waheed@nodesol.com', status: 1},
        {icon: 'image', name: 'Zohaib', email: 'zohaib@nodesol.com', status: 0},
        {icon: 'image', name: 'Shakeel', email: 'shakeel@nodesol.com', status: 1},
        {icon: 'image', name: 'Akhlaq', email: 'akhlaq@nodesol.com', status: 1},
      ]
    }
  }
}
</script>
