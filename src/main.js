//bootstrap template
import "bootstrap/dist/css/bootstrap.css";
import "./bootstrap.min (3).css";
//Components
import App from "./App.vue";
import SignUp from "./Screen/SignUp";
import LoginIn from "./Screen/LoginIn.vue";
import HomeScreen from "./Screen/HomeScreen.vue";
import MainBoard from "./Screen/MainBoard.vue";
// import MainBoard from "./Screen/MainBoard.vue";
// import CardCard from "./Screen/CardCard.vue";
// import EditListForm from "./Screen/EditListForm.vue";
// import EditCardForm from "./Screen/EditCardForm.vue";
// import ExportPage from "./Screen/ExportPage.vue";
/* add icons to the library */

//Importing store and createApp
// import store from "./Store";
import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    //Navigations
    //Base Url==> http://localhost:8081/
    // { path: "/editList/:id", component: EditListForm },
    // { path: "/cardDetail/:listId/:cardId", component: EditCardForm },
    { path: "/", component: HomeScreen },
    { path: "/signup", component: SignUp },
    { path: "/login", component: LoginIn },
    { path: "/dashboard", component: MainBoard },
    // { path: "/list/:id", component: CardCard },
    // { path: "/exportListData/:listId", component: ExportPage },
  ],
});

const app = createApp(App);
// app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
// app.use(store);
app.mount("#app");
