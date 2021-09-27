import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import VehiclesList from "../src/components/VehiclesList.vue";
import VehicleDetail from "../src/components/VehicleDetail.vue";
import App from './App.vue'

const routes = [
    { path: '/', component: VehiclesList },
    { path: '/detail', component: VehicleDetail },
];

let routerIns = createRouter({
    history:createWebHistory(),
    routes: routes
});

let app = createApp(App);

app.use(routerIns);
app.mount('#app')
