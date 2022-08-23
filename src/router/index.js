import { createRouter, createWebHistory } from 'vue-router'
import {isLoggedIn } from '@/_helpers/auth'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'


// creating function to set and an auth header at every command that the app makes 
(function() {
  var token = localStorage.getItem('token')
 if (token) {
     axios.defaults.headers.common['Authorization'] = "Bearer " + token;
 } else {
     delete axios.defaults.headers.common['Authorization'] ;

 }
})();

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signUp',
    name: 'signUp',
    meta: {
      allowAnonymous: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/signUp.vue')
  },
  {
    path: '/login',
    name: 'logIn',
    meta: {
      allowAnonymous: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/signIn.vue')
  },
  {
    path: '/resetlink',
    name: 'ResetLink',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/ResetPassword.vue')
  },
  {
    path: '/Password-reset',
    name: 'PasswordReset',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/ReinstallPassword.vue')
  },
  {
    path: '/userstatus',
    name: 'userStatus',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserStatus.vue')
  },

  {

    path: '/getquote',
    name: 'get_quote',
    meta: {
      allowAnonymous: true,
    },
    // },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GetQuote.vue'),
    beforeEnter(to, from, next) {
     
      if (!isLoggedIn()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {

        next()
      }
    }


  },


  {
    path: '/test',
    name: 'MoadlComp',
    meta: {
      allowAnonymous: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/_helperComponents/ModalComp.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
