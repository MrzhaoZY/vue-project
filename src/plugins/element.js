import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  // 弹框提示
  Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 把弹窗组件挂载到vue上，这样每个组件都可以通过this访问到$message
Vue.prototype.$message = Message
