import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

const config = {
  apiKey: "AIzaSyD7G9B28HPvxwfAoE3lI8p99kbrNiI9-ec",
  authDomain: "vue-crm-2021.firebaseapp.com",
  projectId: "vue-crm-2021",
  storageBucket: "vue-crm-2021.appspot.com",
  messagingSenderId: "268620254149",
  appId: "1:268620254149:web:dc7eba1eb7c02860c359ac",
  measurementId: "G-NE1Y7Y6ZW0",
};

firebase.initializeApp(config);
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
