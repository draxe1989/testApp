import {createRouter, createWebHistory} from "vue-router";
import PageOne from "./pages/PageOne.vue";
import PageTwo from "./pages/PageTwo.vue";


const routes = [
    {path: '/', name: "home", component: PageOne},
    {path: '/list', name: "list", component: PageTwo},
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

