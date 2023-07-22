<template>
    <div class="password-change">
        <div class="c-card">
            <div class="form-box">
                <div class="form-item">
                    账号<input type="text" placeholder="请输入账号">
                </div>
                <div class="form-item">
                    密码<input type="text" placeholder="请输入密码">
                    <i></i>
                </div>
                <div class="form-item">
                    新密码<input type="text" placeholder="请输入新密码">
                    <i></i>
                </div>
                <div class="form-item">
                    确认新密码<input type="text" placeholder="请确认新密码">
                    <i></i>
                </div>
            </div>
            <button class="c-button" @click="queren" >确认</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PasswordChange',
        data(){
            return {
                account: '',
                password: '',
                opassword: '',
                npassword: '',
            }
        },
        methods: {
            queren(){
                if (this.opassword !== this.password && this.password === this.npassword) {
                    // console.log(this)
                    localStorage.setItem('account',this.account)
                    localStorage.setItem('password',this.password)
                    this.$router.push({
                    path: "/layout",
                    })
                }
                else {
                    alert('账户名或密码错误')
                }
            }
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
    &:first-child {
        margin-top: 0;
    }
}
.c-button {
    background-color: #F58287;
    margin-top: j(28);
}
</style>