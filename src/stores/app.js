import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Loading, Notify, LocalStorage } from 'quasar';
export const useAppStore = defineStore('app', {
  state: () => ({
    pageData: LocalStorage.getItem('page_data') ?? null,
    data : {
      perPageRecords : 10,
    }
  }),
  getters: {
    page_data: (state) => state.pageData,
  },
  actions: {
    setPageData (data) {
      if (data === null || data === 'null') {
        this.pageData = null
      } else {
        if (this.pageData === null) {
          this.pageData = data
        } else {
            const pageData = this.pageData
          this.pageData = Object.assign(pageData, data)
        }
      }
      LocalStorage.remove('page_data')
      LocalStorage.set('page_data', this.pageData)
    },
    async send_request(data) {
      if(data.loading) {
        Loading.show()
      }
      return await api.request({
        method: data.method,
        url: '/api/' + data.url,
        data: data.data ?? null,
        responseType: data.responseType ? data.responseType : 'json',
      }).then(response => {
        if(data.loading) {
          Loading.hide()
        }
        // show message if response has message and request method is post
        if(response.data && response.data.message && data.method.toUpperCase() != 'GET') {
          Notify.create({
            type: "positive",
            position: "top",
            message: response.data.message,
          });
        }
        // store data in pinia store on each get request
        if(data.method.toUpperCase() == 'GET') {
          this.setPageData(response.data.data)
        }
        if (typeof data.success === 'function') {
          return data.success(response, this.router)
        }
        return Promise.resolve(response)
      }).catch(error => {
        if(data.loading) {
          Loading.hide()
        }
        let is_errors = false
        if (error.response !== undefined && error.response.data !== undefined && error.response.data.errors !== undefined) {
          for (const [key, err] of Object.entries(error.response.data.errors)) {
            Notify.create({
              color: 'negative',
              position: 'top',
              message: typeof (err == 'string') ? err : err.message,
              icon: 'report_problem'
            })
          }
          is_errors = true
        }
        let message = error.message
        if (error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined) {
          message = error.response.data.message
        }
        if(!is_errors) {
          Notify.create({
            color: 'negative',
            position: 'top',
            message: 'Something went wrong: ' + message,
            icon: 'report_problem'
          })
          if (error.response.status === 401) {
            this.router.push('/logout');
          }
          if (error.response.status === 403) {
            Notify.create({
              color: 'negative',
              position: 'top',
              message: 'You are not authorized to perform this action',
              icon: 'report_problem'
            })
          }
        }
        return Promise.reject(error);
      })
    }
  },
});
