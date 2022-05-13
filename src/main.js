import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';  // vant组件库
import 'vant/lib/index.css';  
import router from './router'

import 'amfe-flexible'// 移动端响应式布局

// 京东风格移动端组件库
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false
Vue.use(Vant);


/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
}),

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
