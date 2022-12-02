import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router  = new VueRouter({
  routes: Routes,
  mode: "history",

});

new Vue({
  render: h => h(App),
  router: router,
}).$mount("#app")