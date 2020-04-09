import Vue from "vue";
import Todo from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<Todo/>",
  components: { Todo }
});
