<template>
    <div class="login-view">
        <div class="c-card">
            <img src="@/assets/images/logo2.png" alt="logo">
            <h1>登录</h1>
            <div class="form-box">
                <div class="form-item">
                    <span>账号</span>
                    <input type="text" placeholder="请输入账号" v-model="account"/>
                </div>
                <div class="form-item">
                    <span>邮箱</span>
                    <input type="text" placeholder="请输入邮箱" v-model="email"/>
                </div>
                <div class="form-item">
                    <span>密码</span>
                    <input type="password" placeholder="请输入密码" v-model="password"/>
                    <i></i>
                </div>
                <div class="form-item">
                    <span>验证码</span>
                    <input type="text" placeholder="请输入验证码" v-model="captcha"/>
                </div>
            </div>
            <button class="c-button" @click="handleSubmit">登录</button>
            <router-link class="c-button outline" to="/register">注册账号</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            account: "",
            email: '',
            password: "",
            captcha: '',
        };
    },
    methods: {
        handleSubmit() {
            axios({
                    url: 'https://api.daysnap.cn/api/v1/auth/signin',
                    method: 'POST',
                    data: {
                        email: this.email,
                        password:this.password,
                        captcha:this.captcha,
                    }
                }).then(result => {
                    this.$router.push("/");
                    console.log(result)
                }).catch(error => {
                    console.dir(error)
                })
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/define.scss';
.login-view {
    padding-top: j(140);
    background: url(@/assets/images/loginbgc.png) center top no-repeat;
    background-size: 100% auto;
}
.c-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: j(50);
    img {
        display: block;
        border-radius: 50%;
        width: j(80);
        height: j(80);
        margin: j(-40) auto 0;
        box-shadow: 0 j(5) j(5) j(5) rgba(0, 0, 0, .08);
    }
    h1{
        font-size: j(24);
        line-height: j(33);
        font-weight: 500;
        margin-top: j(40);
        color: #333333;
    }
}
.form-box{
    width: j(310);
    margin-top: j(40);
}
.form-item{
    position: relative;
    display: flex;
    align-items: center;
    height: j(48);
    border-radius: 8px;
    border: 1px solid #D6D6D6;
    margin-top: j(20);
    &:first-child{
        margin-top: 0;
    }
    span{
        top: j(-8);
        left: j(16);
        background-color: #fff;
        padding: 0 j(5);
        position: absolute;
        font-size: j(12);
        color: #666666;
        line-height: j(16);
    }
    input{
        flex: 1;
        min-width: 0;
        border: none;
        background-color: transparent;
        box-sizing: border-box;
        padding: 0 j(16);
        font-size: j(16);
        color: #333;
    }
    i{
        display: block;
        width: j(16);
        height: j(16);
        background: url(@/assets/images/eyeclose.png) right center no-repeat;
        background-size: j(16) j(16);
        position: absolute;
        right: j(16);

    }
}
.c-button{
    margin-top: j(28);
    +.c-button{
        margin-top: j(10);
    }
}
</style>