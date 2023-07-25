<template>
    <div class="login-view">
        <div class="c-card">
            <img src="@/assets/images/logo2.png" alt="logo">
            <h1>登录</h1>

            <div class="form-box">
                <div class="form-item">
                    <span>邮箱</span>
                    <input type="text" placeholder="请输入邮箱" v-model.trim="email" @blur="emailBlur"/>
                </div>
                <div class="form-item">
                    <span>密码</span>
                    <input :type="type" id="pwd" placeholder="请输入密码" v-model.trim="password"/>
                    <i class="eye-icon" :class="[type === 'password' ? 'closed-eye' :'open-eye']" @click="type = type === 'password' ? 'text' :'password'"></i>
                </div>
            </div>

            <button class="c-button" @click="handleSubmit">登录</button>

            <router-link class="c-button outline" to="/register">注册账号</router-link>
        </div>
    </div>
</template>

<script>
import {doLogin} from '@/api'
export default {
    data() {
        return {
            type: 'password',
            email: '',
            password: "",
        };
    },
    methods: {
      emailBlur() {
        let verify = /^[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)+$/
        if (verify.test(this.email) === false){
          alert('邮箱格式错误，请重新输入')
          this.email = ''
        }
      },
        handleSubmit() {
          const { email, password} = this
          doLogin({ email, password }).then(result => {
            this.$router.push('/home')
            window.localStorage.setItem('token', result.data.data.token)
          }).catch(error => {
            alert(error.response.data.msg)
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
    .eye-icon {
        display: block;
        width: j(16);
        height: j(16);
        position: absolute;
        right: j(16);
    }
    .closed-eye {
      background: url("@/assets/images/eyeclose.png") center center no-repeat;
      background-size: j(16) j(16);
    }
    .open-eye {
      background: url("@/assets/images/eyeopen.png") center center no-repeat;
      background-size: j(16) j(16);
    }

}
.c-button{
    margin-top: j(28);
    +.c-button{
        margin-top: j(10);
    }
}
</style>