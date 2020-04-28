// 创建指定组件实例并挂载于body上

import Vue from 'vue';

export default function create(Component, props) {
    // 1. 创建vue实例
    const vm = new Vue({
        render(h) {
            // render方法提供一个h函数，可以渲染vnode
            return h(Component, { props });
        }
    }).$mount();
    // 2.通过$children获取组件实例
    const comp = vm.$children[0];
    // 3.追加到body
    document.body.appendChild(vm.$el);
    // 4. 清理函数
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };
    // 5. 返回组件实例
    return comp;
}