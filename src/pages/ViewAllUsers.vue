<template>
  <q-page>
    <div class="text-h6 text-center q-py-lg">
      View All User
    </div>

    <div class="row first_user_table q-pa-sm justify-center lt-sm">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <q-list bordered padding class="shadow-1" v-if="page_data && page_data.users && page_data.users.length">
          <q-item clickable v-ripple v-for="user in page_data.users">
            <q-item-section avatar top>
              <q-avatar :icon="user.image" color="grey-2" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label lines="1">{{ user.name }} <q-badge :color="user.status == 1 ? 'green' : 'red'">{{ user.status
                == 1 ? 'Active' : 'Block' }}</q-badge></q-item-label>
              <q-item-label caption>{{ user.email }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon color="positive" @click="$router.push('/add-user/' + user.id)" name="edit" class="q-px-xs" />
              <q-icon color="negative" name="delete" class="q-px-xs"  @click="deleteUser(user.id)" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <div class="q-pa-sm second_user_table gt-xs">
      <q-markup-table class="q-pa-sm">
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Status</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody v-if="page_data && page_data.users && page_data.users.length">
          <tr v-for="user in page_data.users">
            <td class="text-left">
              <q-avatar :icon="user.image" color="grey-2" text-color="white" />
            </td>
            <td class="text-left">{{ user.name }}</td>
            <td class="text-left">{{ user.email }}</td>
            <td class="text-left">{{ user.status== 1 ? 'Active' : 'Block' }}
            </td>
            <td class="text-center">
              <q-btn icon="edit" class="bg-positive text-red-1 q-px-sm" @click="$router.push('/add-user/' + user.id)" />
              <q-btn icon="delete" class="bg-negative text-red-1 q-px-sm q-ml-sm" @click="deleteUser(user.id)"/>
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
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      let data = {
        method: "get",
        url: "users",
        loading: false
      };
        await this.send_request(data);
    },
    async deleteUser(id) {
      if(confirm('Are you sure, You want to delete this user?')) {
        let data = {
        method: "delete",
        url: "users/" + id,
        loading: false
        };
        let res =  await this.send_request(data);
        if(res.status) {
          this.getUsers()
        }
      }
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
