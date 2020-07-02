import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from  'components/common/toast'

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload"

import '@/assets/icon/iconfont.css'

//vant插件引入
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);


Vue.config.productionTip = false

//创建事件总线
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

//解决移动端的300ms的延迟
FastClick.attach(document.body)

//使用图片懒加载插件
Vue.use(VueLazyload,{
  loading : require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
