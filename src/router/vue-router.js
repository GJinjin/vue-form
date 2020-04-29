let Vue;

 export default class VueRouter {
    constructor(options) {
        this.$options = options;
        // 创建一个路由path和route映射
        this.routeMap = {};
        //当前路径current需要响应式，利用Vue响应式远离实现
        this.app = new Vue ({
            data: {
                current: '/'
            }
        })
    }

    init() {
        // 绑定浏览器事件
        this.bindEvents();
        // 解析路由配置
        this.createRouteMap(this.$options);
        // 创建router-link router-view
        this.initComponent();
    }

    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this));
    }

    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap(options) {
        options.routes.forEach(item => {
            this.routeMap[item.path] = item;
        })
    }

    initComponent() {
        // 声明两个全局组件
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                // 渲染a标签
                return h('a', {attrs: {href: '#' + this.to}}, this.$slots.default);
                // return <a href={this.to}>{ this.$slots.default }</a>;
            }
        })

        Vue.component('router-view', {
            // 箭头函数保留this指向
            render: (h) => {
                const comp = this.routeMap[this.app.current].component;
                return h(comp);
            }
        })
    }
}

// 把VueRouter变为插件
VueRouter.install = function(_Vue) {
    Vue = _Vue;
    // 混入任务
    Vue.mixin({
        // 将来在外面初始化时被调用，即实现Vue的扩展
        beforeCreate() {
            // 只希望根组件执行一次
            if(this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    })
}