<template>
    <li>
        <div @click="toggle">
            {{ model.title }}
            <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
        </div>

        <ul v-show="open" v-if="isFolder">
            <Item class="item" v-for="model in model.children" :model="model" :key="model.title"></Item>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'Item',
        props: {
            model: Object
        },
        data() {
            return {
                open: false
            }
        },
        computed: {
            isFolder: function() {
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle() {
                if(this.isFolder) {
                    this.open = !this.open;
                }
            }
        }
    }
</script>