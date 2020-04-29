<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        provide() {
            return {
                form: this // 传递Form实例给后代
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        },
        methods: {
            validate(cb) {
                //map结果是若干promise数组
                const tasks = this.$children.filter(item => item.prop).map(item => item.validate());
                Promise.all(tasks).then(() => cb(true)).catch(() => cb(false));
            }
        }
    }
</script>