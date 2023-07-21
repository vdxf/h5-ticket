<template>
    <div class="password-change">
        <div class="c-card">
            <div class="form-box">
                <div class="form-item">
                    昵称<input type="text" placeholder="请输入昵称" v-model="nickname" required>
                </div>
                <div class="form-item">
                    邮箱<input type="text" placeholder="请输入邮箱" v-model="email" @blur="email_blur" required>
                </div>
                <div class="form-item">
                    密码<input type="password" placeholder="请输入密码" v-model="password" required>
                    <i></i>
                </div>
                <div class="form-item">
                    邮箱验证码<input type="text" placeholder="请输入邮箱验证码" v-model="captcha" required>
                    <button @click="handleCode">发送验证码</button>
                </div>
            </div>
            <button class="c-button" @click="handleRegister">注册</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { doEmailSend } from '@/api'

    export default {
        data(){
            return {
                nickname: '',
                email:'2532499815@qq.com',
                password: '',
                captcha: '',
            }
        },
        methods: {
            email_blur(){
                let verify = /^[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)+$/  
                if (verify.test(this.email) === false) {
                    alert('邮箱格式错误，请重新输入')
                    this.email = ''
                }
                else {
                    console.log('0000')
                }
            },
            handleCode(){
                const { email } = this
                doEmailSend({ email, type: 'register' })
            },
            handleRegister(){
                axios({
                    url: 'https://api.daysnap.cn/api/v1/auth/signup',
                    method: 'POST',
                    data: {
                        nickname: this.nickname,
                        email: this.email,
                        password: this.password,
                        captcha: this.captcha,
                    }
                }).then(result => {
                    this.$router.push('/login'),
                    console.log(result)
                }).catch(error => {
                    console.dir(error)
                })
            },

        }
    }
</script>

<style scoped lang="scss">
@import '@/assets/sass/define.scss';
.password-change {
    padding-top: j(116);     
    background-color: #FAFAFA;
}
.c-card {
    padding: j(20);
}
.form-box {
    display: flex;
    flex-direction: column;
}
.form-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: j(30);
    margin-top: j(34);
    font-size: j(12);
    color: #666666;
    border-bottom: 1px solid #F5F5F5;
    input {
        position: absolute;
        flex: 1;
        margin-left: j(80);
    }
    i {
        display: block;
        width: j(16);
        height: j(16);
        background: url(@/assets/images/eyeclose.png) right center no-repeat;
        background-size: j(16) j(16);
        position: absolute;
        right: 0;
    }
    button {
        position: absolute;
        top: auto;
        right: 0;
        background-color: red;
        color: #FAFAFA;
        border: none;
    }
    &:first-child {
        margin-top: 0;
    }
}
.c-button {
    background-color: #F58287;
    margin-top: j(28);
}
</style>