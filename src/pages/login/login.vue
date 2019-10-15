<template>
    <div class="login">
        <div class="by-tabs-dv">
            <img src="@/assets/images/logo.svg"
                 class="logo">
            <by-tabs>
                <by-tab-pane label="账号登录"
                             name="name1">
                    <by-input v-model="formData.email"
                              placeholder="账号"
                              size="large">
                        <template slot="prepend">
                            <i class="icon icon-user"></i>
                        </template>
                    </by-input>
                    <by-input v-model="formData.password"
                              placeholder="密码"
                              type="password"
                              size="large">
                        <template slot="prepend">
                            <i class="icon icon-lock"></i>
                        </template>
                    </by-input>
                </by-tab-pane>
                <by-tab-pane label="短信登录"
                             name="name2">
                    <by-input v-model="formData.email"
                              placeholder=""
                              size="large">
                        <template slot="prepend">
                            +86
                        </template>
                    </by-input>
                    <by-input placeholder="请输入验证码"
                              prepend-button
                              size="large">
                        <template slot="append">
                            <span>获取验证码</span>
                        </template>
                    </by-input>
                </by-tab-pane>
            </by-tabs>
            <by-button type="primary"
                       size="large"
                       @click="handelSubmit">登录</by-button>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class Login extends Vue {
        formData = {
            email: '',
            password: ''
        }

        handelSubmit() {
            window.localStorage.setItem('token', '1');
            this.$router.push({
                name: 'index'
            });
            // this.$request('login', this.formData).then(({ data }) => {
            //     // 模拟登录成功，记录token
            //     window.localStorage.setItem('token', data.token);
            //     this.$router.push({
            //         name: 'company-list'
            //     });
            // })
        }
    }
</script>
<style lang="scss" scoped>
    .login {
        background: #207dff;
        width: 100%;
        height: 100%;
        padding-top: 80px;
        .by-tabs-dv {
            padding: 60px;
            width: 440px;
            margin: 0 auto;
            background: #fff;
            border-radius: 30px;
            .logo {
                width: 170px;
                display: block;
                margin: 0 auto;
                margin-bottom: 20px;
            }
            /deep/ .by-tabs {
                display: block;
                .by-input {
                    margin: 30px 0;
                }
            }
            .by-btn {
                width: 100%;
            }
        }
    }
</style>