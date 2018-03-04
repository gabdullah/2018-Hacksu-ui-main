import Vue from 'vue';
import Router from 'vue-router';
import Hacksu2018 from '@/components/Hacksu2018';
import Login from '@/components/Login';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact'; 
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hacksu',
      component: Hacksu2018,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});