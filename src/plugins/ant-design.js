import { Button, Layout, Menu, Breadcrumb, Icon } from 'ant-design-vue'
const antd = {
  install (Vue) {
    Vue.use(Button)
    Vue.use(Layout)
    Vue.use(Menu)
    Vue.use(Breadcrumb)
    Vue.use(Icon)
  }
}

export default antd
