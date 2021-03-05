import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  // 弹框提示
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
// 把弹窗组件挂载到vue上，这样每个组件都可以通过this访问到$message
Vue.prototype.$message = Message
