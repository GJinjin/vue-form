<template>
    <div v-if="isShow">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Notice',
        props: {
            title: {
                type: String,
                default: ''
            },
            message: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 100
            }
        },
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            show() {
                this.isShow = true;
                setTimeout(() => {
                    this.hide();
                }, this.duration)
            },
            hide() {
                this.isShow = false;
            }
        }
    }
</script>