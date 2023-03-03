<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
import { useAuthStore } from 'src/stores/auth';
export default {
  // name: 'PageName',
  mounted() {
    useAuthStore().logout()
  }
}
</script>
