import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'
import Test4 from '@/components/Test4'
import Request from '@/components/Test5'

import store from '@/components/TestStore'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/test4',
      component: Test4
    },
    {
      path: '/request',
      component: Request
    },
    {
      path: '/store',
      component: store
    }
  ]
})
