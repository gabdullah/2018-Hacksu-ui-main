import Vue from 'vue';
import Router from 'vue-router';
import Hacksu2018 from '@/components/Hacksu2018';
import Login from '@/components/Login';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact'; 
import You from '@/components/users/You';
import Badges from '@/components/Badges';

import BadgeDetails from '@/components/BadgeDetails';

import EventEditor from '@/components/Admin/EventEditor';
import BadgeEditor from '@/components/Admin/BadgeEditor';


import NotFound from '@/components/NotFound';
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
    {
      path: '/you',
      name: 'you',
      component: You,
    },
    {
      path: '/badges',
      name: 'Badges',
      component: Badges
    },
    {
      path: '/badges/:badgeID',
      name: 'BadgeDetails',
      component: BadgeDetails
    },
    {
      path: '/event-editor',
      name: 'event-editor',
      component: EventEditor
    },
    {
      path: '/badge-editor',
      name: 'badge-editor',
      component: BadgeEditor
    },
    
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ],
});