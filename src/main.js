import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueTheMask from "vue-the-mask";
// Boostrap And Font Awesome
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// Router
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  beforeEnter(to, from, next) {
    if (to.name === from.name) {
      return;
    }
    next();
  },
});

library.add(fas, fab);

Vue.use(BootstrapVue);
Vue.use(VueTheMask);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
