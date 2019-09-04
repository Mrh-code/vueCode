// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


// Vue.use(VueAxios, axios)
Vue.prototype.$ajax = axios

import App from './App'
import router from './router'

import $ from 'jquery'

// 导入bootstrap包
import 'bootstrap/dist/css/bootstrap.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Search,Button,Navbar, TabItem,Popup } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Popup.name, Popup);

import './lib/mui/dist/css/mui.css'

import './lib/mystyle.css'
import './lib/bsmin.css'



Vue.use(MintUI)



Vue.config.productionTip = false

Vue.filter('dataFormat', function(dataStr, pattern){
  var dt = new Date(dataStr)
  var y = dt.getFullYear()
  var m = dt.getMonth() + 1
  var d = dt.getDate()

  if(pattern.toLowerCase() === 'yyyy-mm-dd-hh'){
    return `${y}-${m}-${d}`
  }else{
    var hh = dt.getHours()
    var mn = dt.getMinutes()
    var ss = dt.getSeconds()
    return `${y}-${m}-${d} ${hh}:${mn}:${ss}`
  }
  
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
