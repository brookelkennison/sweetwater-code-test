import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import '../public/items.json';

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
