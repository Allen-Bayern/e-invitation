/** @description router config files */
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import(/* webpackChunkName: "home" */ './HomeView/index.vue'),
    },
    {
        path: '/invite',
        name: 'InvitationPage',
        component: () => import(/* webpackChunkName: "InvitationPage" */ './InvitationPage/index.vue'),
    },
    {
        path: '/how-to-come',
        name: 'HowToCome',
        component: () => import(/* webpackChunkName: "HowToCome" */ './HowToCome/index.vue'),
    },
];

/** @description the router of the project */
const hashRouter = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { hashRouter };
