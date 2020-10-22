import {defineComponent,h} from '@vue/runtime-core'

//template->render
export default defineComponent({
    render(){
        //h创虚拟节点
        const vnode = h("div"); //<div></div>
        console.log(vnode);
        return vnode;
    }
})