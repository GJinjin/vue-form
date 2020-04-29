<template>
    <div>
        <Form :model='model' :rules='rules' ref='submitMes'>
            <FormItem label='用户名' prop="username">
                <Input type='text' v-model='model.username' />
            </FormItem>
            <FormItem label='密码' prop="password">
                <Input type='password' v-model='model.password' />
            </FormItem>
            <FormItem>
                <button @click="submit">登录</button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import Input from './Input.vue';
    import Form from './Form.vue';
    import FormItem from './FormItem.vue';
    import Notice from '../notice';
    import create from '@/utils/create.js';

    export default {
        components: {
            Input,
            FormItem,
            Form
        },
        data() {
            return {
                model: {
                    username: 'tom',
                    password: ''
                },
                rules: {
                   username: [{
                       required: true,
                       message: '用户名必填'
                   }],
                   password: [{
                       required: true,
                       message: '密码必填'
                   }]
                }
            }
        },
        methods: {
            submit() {
                let notice;

                this.$refs.submitMes.validate(isValid => {
                    notice = create(Notice, {
                        title: "提示信息",
                        message: isValid ? '提交成功' : '提交失败',
                        duration: 1000
                    });

                    notice.show();
                })
            }
        }
    }
</script>