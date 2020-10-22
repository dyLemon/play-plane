import {createRenderer} from '@vue/runtime-core'
import App from './src/App.js';//根组件

const {createApp} = createRenderer({});

//APP->根组件
// #app根容器
//将vnode 转为真实dom，挂载到容器中
// createApp(App).mount("#app")
createApp(App)
