import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8f5429ce = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _a995d6e4 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _88b474cc = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _293bdae7 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))
const _c5fd275c = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _4271979a = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _a6f1dd48 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _8f5429ce,
    name: "layout",
    children: [{
      path: "",
      component: _a995d6e4,
      name: "home"
    }, {
      path: "/login",
      component: _88b474cc,
      name: "login"
    }, {
      path: "/register",
      component: _88b474cc,
      name: "register"
    }, {
      path: "/article/:slug",
      component: _293bdae7,
      name: "article"
    }, {
      path: "/settings",
      component: _c5fd275c,
      name: "settings"
    }, {
      path: "/profile/:username",
      component: _4271979a,
      name: "profile"
    }, {
      path: "/editor",
      component: _a6f1dd48,
      name: "editor"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
