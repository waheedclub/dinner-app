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
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Login',
    icon: 'dashboard',
    link: '/'
  },
  {
    title: 'Admin Dashboard',
    icon: 'dashboard',
    link: '/'
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
    font-size: 14px;
  }
}
</style>
