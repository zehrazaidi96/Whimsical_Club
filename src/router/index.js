import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/SignIn.vue'),
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/auth/SignUp.vue'),
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import('../views/onboarding/Onboarding.vue'),
  },
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/homePage/HomePage.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
