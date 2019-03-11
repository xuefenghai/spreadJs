import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import page0 from '@/components/page0'
import page1 from "@/components/page1"
import page2 from "@/components/page2"
import page3 from "@/components/page3"
import login from "@/components/login"

Vue.use(Router)

Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/page0',
      name: 'page0',
      component: page0,
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: page1
        },
        {
          path: '/page2',
          name: 'page2',
          component: page2
        },
        {
          path: '/page3',
          name: 'page3',
          component: page3
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
