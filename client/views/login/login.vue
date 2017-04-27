<template>
    <div class="wrapper">
        <section class="login">
            <header class="login-header">
                <h1 class="brand"><a href="#">雅阁超级系统</a></h1>
                <el-alert v-if="error" :title="error.title" type="warning" :description="error.message" show-icon/>
            </header>
            <el-form class="login-form" :model="model" :rules="rules" ref="login-form">
                <h2 class="heading">登录</h2>
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" placeholder="请输入用户名" v-model="model.username" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="model.password" />
                </el-form-item>
                <el-button type="primary" :loading="loading" @click="submit('login-form')">{{loading?'登陆中...':'登陆'}}</el-button>
            </el-form>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            const model = {
                username: '',
                password: ''
            };
            const rules = {
                username: [{
                    required: true,
                    message: '请输入用户名'
                }, {
                    min: 2,
                    max: 16,
                    message: '长度再2到16个字符'
                }],
                password: [{
                    required: true,
                    message: '请输入密码'
                }, {
                    min: 6,
                    max: 16,
                    message: '长度再6到16个字符'
                }]
            };
            return {
                model: model,
                rules: rules,
                error: null,
                loading: false
            };
        },
        methods: {
            submit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        return false;
                    } else {
                        this.error = null;
                        this.loading = true;

                        this.$store.dispatch('createToken', this.model)
                            .then(token => {

                            });
                    }
                });
            }
        }
    };
</script>
<style lang="scss" scope>
    @import '../../assets/styles/base/variables';
    .login {
        flex: 1;
        width: 95%;
        max-width: 22rem;
        margin: 0 auto;
        font-size: .875rem;
        &-header {
            margin-bottom: 1rem;
            .brand {
                margin: 4.5rem 0 3.5rem;
                text-align: center;
                letter-spacing: .125rem;
                a {
                    margin: 0;
                    color: $brand-color;
                    font: 300 3rem sans-serif;
                }
                &:hover {
                    color: $brand-hover-color;
                    text-shadow: 0 0 1rem $brand-hover-color;
                }
            }
        }
        &-form {
            margin-bottom: 2.5rem;
            padding: 1.875rem 1.25rem;
            background: $login-form-background;
            color: $login-form-color;
            .heading {
                margin: 0 0 1rem;
                font-weight: 400;
                font-size: 1.5rem;
            }
            .el-button {
                margin-top: .5rem;
                width: 100%;
            }
        }
    }
</style>
