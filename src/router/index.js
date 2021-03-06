import {
    createRouter,
    createWebHistory,
} from 'vue-router';
import Home from '../views/Search/Home.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
},
{
    path: '/table',
    name: 'Table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/Profile/Profile.vue'),
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;