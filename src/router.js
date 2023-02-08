import { createRouter, createWebHashHistory } from 'vue-router'
import AutoFocusView from './components/AutoFocusView.vue'
import CounterView from './components/CounterView.vue'

const routes = [
    { path: '/autofocus', component: AutoFocusView },
    { path: '/counter', component: CounterView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
