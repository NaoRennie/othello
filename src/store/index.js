// const STORAGE_NAME = 'vuex_data'
// const storageData = localStorage.getItem(STORAGE_NAME)
import Vuex from 'vuex';
import Vue from 'vue';
import pieces from './modules/pieces'

// export const plugins = [
//   (store) => {
//     store.subscribe(() => {
//       localStorage.setItem(STORAGE_NAME, JSON.stringify(store.state))
//     })
//   }
// ]


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        pieces
    }
});

