

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LoginLayout',
  computed: {
    appVersion: {
      get () {
        return 1
      }
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
