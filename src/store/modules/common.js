import {
    Loading,
    Notification
  } from 'element-ui';


  export let isLoading;

  const state = {
  }

  const mutations = {
      LOADING(state, newData = {}) {
        let options = Object.assign({
          lock: true,
          text: '玩命加载中…',
          background: 'rgba(255, 255, 255, 0)',
        }, newData)
        isLoading = Loading.service(options)
      },
      CLOSE_LOADING(state) {
        isLoading.close();
      },
  }


  export default {
    state,
    mutations
  }