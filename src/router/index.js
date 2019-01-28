import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index/index.vue'
import classList from '../pages/class-list/index.vue'
import classItem from '../pages/class-item/index.vue'
import classDetail from '../pages/class-detail/index.vue'
import exchange from '../pages/exchange/index.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    alias: '/pages/index/main'
  }, {
    path: '/list',
    name: 'list',
    component: classList,
    alias: '/pages/class-list/main'
  }, {
    path: '/exchange',
    name: 'exchange',
    component: exchange,
    alias: '/pages/exchange/main'
  }, {
    path: '/item',
    name: 'item',
    component: classItem,
    alias: '/pages/class-item/main'
  }, {
    path: '/detail',
    name: 'detail',
    component: classDetail,
    alias: '/pages/class-detail/main'
  }]
})
