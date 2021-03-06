// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

// 引入Echarts
import Echarts from 'echarts'

Vue.prototype.echarts = Echarts

Vue.use(Echarts)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
