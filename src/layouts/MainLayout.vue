<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text_size">
          Food Expense Management System
        </q-toolbar-title>

        <!-- <div>
          <q-btn class="bg-positive" icon="mail" />
        </div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list
      >
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="lt-sm">
      <q-toolbar class="header-color text-white q-px-none top-toolbar">
        <q-tabs v-model="tab" align="justify" class="full-width">
          <q-route-tab name="tab1" icon="dashboard" to="/dashboard" />
          <q-route-tab name="tab2" icon="local_dining" to="/add-food" />
          <q-route-tab name="tab3" icon="restaurant" to="/view-all-foods" />
          <q-route-tab name="tab5" icon="paid" to="/add-amount" />
          <q-route-tab name="tab6" icon="request_quote" to="/view-all-amounts" />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Admin Dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'Add User',
    class: 'text-weight-bol',
    icon: 'person_add',
    link: '/add-user'
  },
  {
    title: 'View All User',
    icon: 'group_add',
    link: '/view-all-users'
  },
  {
    title: 'Add Food',
    icon: 'local_dining',
    link: '/add-food'
  },
  {
    title: 'View All Food',
    icon: 'restaurant',
    link: '/view-all-foods'
  },
  {
    title: 'Add Amount',
    icon: 'request_quote',
    link: '/add-amount'
  },
  {
    title: 'View all amounts',
    icon: 'request_quote',
    link: '/view-all-amounts'
  },
  {
    title: 'Logout',
    icon: 'logout',
    link: '/logout'
  },
  // {
  //   title: 'Quasar Awesome',
  //   icon: 'favorite',
  //   // link: 'https://awesome.quasar.dev'
  // }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      tab: ref(''),
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
  @media screen and (max-width: 768px) {
  .text_size {
    font-size: 18px;
  }
}
</style>
