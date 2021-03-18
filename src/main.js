import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
//
import TreeTable from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本对应点样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

// 导入axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须return config
  // console.log(config)
  return config
})
// 挂载到Vue
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 注册为全局可用的组件
Vue.component('tree-table', TreeTable)

// 将富文本编辑器，注册为全局可用的组件
Vue.use(VueQuillEditor)

// 注册一个全局的过滤器
// 格式化时间的过滤器
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const yyyy = dt.getFullYear()
  // padStart(2,'0') 字符串是否有2位  不足的话用0填充
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${yyyy}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
