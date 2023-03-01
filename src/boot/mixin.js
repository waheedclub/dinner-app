import { boot } from "quasar/wrappers";
import { Notify } from "quasar";
import { useAuthStore } from "src/stores/auth";
import { useAppStore } from "src/stores/app";
import { mapActions, mapState } from "pinia";
export default boot(({ app }) => {
  app.mixin({
    data() {
      return {
        user: useAuthStore().user,
      };
    },
    computed:{
      ...mapState(useAppStore, ['page_data', 'data'])
    },
    methods: {
      ...mapActions(useAppStore, ['send_request']),
      updatePage(path) {
        this.$router.push(path)
      },
      noti(message = "done", type = "success") {
        Notify.create({
          color: type == "success" ? "positive" : "negative",
          position: "top",
          message: message,
          icon: type == "success" ? "done" : "warning",
        });
      },
      convertForm(item) {
        let form_data = new FormData();
        for (var key in item) {
          form_data.append(key, item[key]);
        }
        return form_data;
      },
    },
  });
});
