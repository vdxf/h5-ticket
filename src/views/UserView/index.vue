<template>
  <div class="c-view">
    <div class="c-card">
      <div class="header-content">
        <button @click="handleCollectList">我的收藏</button>
        <button @click="handleUpdateUserInformation">更新用户信息</button>
        <button @click="handleUserList">用户列表</button>
        <button @click="handleUpdatePassword">修改密码</button>
        <button @click="handleResetPassword">重置密码</button>
      </div>

      <!--      我的收藏-->
      <div class="popup-view" v-show="isCollectList" @click="isCollectList = false">
        <div class="content" @click.stop="$emit('null')">
          1111
<!--          <ul class="userlist">-->
<!--            <li v-for="userObj in UserList" :key="userObj.id">-->
<!--              <p>用户名：{{userObj.nickname}}</p>-->
<!--              <p>性别：{{userObj.sex}}</p>-->
<!--              <p>个性签名：{{userObj.signature}}</p>-->
<!--              <p>邮箱：{{userObj.email}}</p>-->
<!--              <p>用户ID：{{userObj.id}}</p>-->
<!--              <p>用户创建时间：{{userObj.createdAt}}</p>-->
<!--              <p>用户最近上线时间：{{userObj.updatedAt}}</p>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <button @click="handleUserDetails">用户详情</button>-->
        </div>
      </div>

      <!--      更新用户信息-->
      <div class="popup-view" v-show="isInformation" @click="isInformation = false">
        <div class="content" @click.stop="$emit('null')">
          <h1>更新用户信息</h1>
          <div class="item">
            <input type="text" v-model="nickname" placeholder="请输入昵称">
          </div>
          <div class="item">
            <input type="text" v-model="signature" placeholder="请输入个性签名">
          </div>
          <div class="item">
            <input type="number" v-model="sex" placeholder="请选择性别：1：男性  2：女性  3：其他 ">
          </div>
          <label>选择头像:<input type="file" @change="handleAvatarId"></label>
          <div class="c-button" @click="handleUpdateUser">提交</div>
        </div>
      </div>

      <!--      用户列表-->
      <div class="popup-view" v-show="isUserList" @click="isUserList = false">
        <div class="content" @click.stop="$emit('null')">
          <ul class="userlist">
            <li v-for="userObj in UserList" :key="userObj.id">
                <p>用户名：{{userObj.nickname}}</p>
                <p>性别：{{userObj.sex}}</p>
                <p>个性签名：{{userObj.signature}}</p>
                <p>邮箱：{{userObj.email}}</p>
                <p>用户ID：{{userObj.id}}</p>
                <p>用户创建时间：{{userObj.createdAt}}</p>
                <p>用户最近上线时间：{{userObj.updatedAt}}</p>
            </li>
          </ul>
          <button @click="handleUserDetails">用户详情</button>
        </div>
      </div>

      <!--        用户详情-->
      <div class="popup-view" v-show="isUserDetails" @click="isUserDetails = false">
        <div class="content" @click.stop="$emit('null')">
          <ul class="userlist">
            <li v-for="userObj in UserList" :key="userObj.id">
              <p>用户名：{{userObj.nickname}}</p>
              <p>性别：{{userObj.sex}}</p>
              <p>个性签名：{{userObj.signature}}</p>
              <p>邮箱：{{userObj.email}}</p>
              <p>用户ID：{{userObj.id}}</p>
              <p>用户创建时间：{{userObj.createdAt}}</p>
              <p>用户最近上线时间：{{userObj.updatedAt}}</p>
            </li>
          </ul>
        </div>
      </div>

      <!--        修改密码-->
      <div class="popup-view" v-show="isUpdatePassword" @click="isUpdatePassword = false">
        <div class="update-password" @click.stop="$emit('null')">
          <label>老密码：<input type="text" v-model="oldPassword"></label>
          <label>新密码：<input type="text" v-model="password"></label>
          <button @click.stop="handleUpdate">提交</button>
        </div>
      </div>

      <!--        重置密码-->
      <div class="popup-view" v-show="isResetPassword" @click="isResetPassword = false">
        <div class="reset-password" @click.stop="$emit('null')">
          <label>邮箱：<input type="email" v-model="email"></label>
          <div class="captcha">
            邮箱验证码：<input type="text" v-model="captcha" v-model.trim="captcha" required maxlength="6">
            <button @click="handleCode">发送验证码</button>
          </div>
          <label>密码：<input type="text" v-model="resetPassword"></label>
          <button @click.stop="handleReset">提交</button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import {
  doCollectList,
  doEmailSend,
  doFile,
  doResetPassword,
  doUpdatePassword,
  doUpdateUserInformation,
  doUserDetails,
  doUserList
} from "@/api";

  export default {
    data(){
      return {
        active:2,
        nickname: '',
        signature: '',
        sex: '',
        avatarId: '',
        files: '',
        UserList: '',
        UserID: '',
        oldPassword: '',
        password: '',
        email: '2532499815@qq.com',
        captcha: '',
        resetPassword: '',
        isCollectList: false,
        isInformation: false,
        isUserList: false,
        isUserDetails: false,
        isUpdatePassword: false,
        isResetPassword: false,
      }
    },
    methods: {
      handleCreateImage(){
        this.$router.push('/imagecreate')
      },
      //我的收藏
      handleCollectList(){
        this.isCollectList = true
        doCollectList().then(result => {
          console.log(result)
        }).catch(error => {
          alert(error.response.data.msg)
        })
      },
      //更新用户信息
      handleUpdateUserInformation(){
        this.isInformation = true
      },
      handleAvatarId(event){
        this.files = event.target.files
        let formData = new FormData();
        formData.append('file', this.files[0]);

        doFile( formData ).then(result => {
          this.avatarId = result.data.data.id
          console.log(this.avatarId)
        }).catch(error => {
          alert(error.response.data.msg)
        })
      },
      handleUpdateUser(){
        const { nickname, signature, sex, avatarId } = this
        doUpdateUserInformation( { nickname, signature, sex, avatarId } ).then(result => {
          this.isInformation = false
          console.log(result)
        }).catch(error => {
          alert(error.response.data.msg)
        })
      },
      //用户列表
      handleUserList(){
        this.isUserList = true
        doUserList().then(result => {
          this.UserList = result.data.data.list
        }).catch(error => {
          alert(error.response.data.msg)
        })
      },
      // 用户详情
      handleUserDetails(){
        this.isUserDetails = true
        this.UserID = this.UserList[0].id
        let {UserID} = this
        console.log(UserID)

        doUserDetails(UserID).then(result => {
          console.log(result)
        }).catch(error => {
          alert(error.response.data.msg)
        })
      },
      // 修改密码
      handleUpdatePassword(){
        this.isUpdatePassword = true
      },
      handleUpdate(){
        const {oldPassword,password} = this
        doUpdatePassword({oldPassword,password}).then(result => {
          this.isUpdatePassword = false
          console.log(result)
        }).catch(error => {
          alert(error.response.data.msg)
        })
      },
      // 重置密码
      handleResetPassword(){
        this.isResetPassword = true
      },
      handleCode(){
        const { email } = this
        doEmailSend({ email, type: 'reset-password' }).then(result => {
          this.isResetPassword = false
          console.log(result)
        }).catch(error => {
          console.dir(error)
          // alert(error.response.data.msg)
        })
      },
      handleReset(){
        const { email, captcha, resetPassword } = this
        doResetPassword({email, captcha, resetPassword}).then(result => {
          console.log(result)
        }).catch(error => {
          console.dir(error)
          // alert(error.response.data.msg)
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.c-view {
  padding: j(20) 0;
}
.c-card {
  background-color: #ccc;
}
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: j(10) 0;
    border: none;
    background-color: #156533;
    color: #fff;
  }
}
.popup-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  padding: j(20);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: j(20);
  border-radius: j(8);
  h1 {
    font-size: j(20);
    color: #ccc;
    margin-bottom: j(40);
  }
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    margin-left: j(20);
    margin-bottom: j(20);
    input {
      margin-left: j(20);
    }
  }
}
.item {
  width: 100%;
  padding: j(10) j(4);
  border: 1px solid #5e5e5e;
  margin-bottom: j(20);
  border-radius: j(8);
  display: flex;
  input {
    flex: 1;
  }
}
.c-button {
  width: 80%;
}
.userlist {
  p {
    margin: j(20) 0;
  }
}
.update-password,.reset-password {
  margin: j(40) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: j(8);
  padding-bottom: j(40);
  label {
    margin: j(20) 0;
    border: 1px solid #ddd;
    padding: j(10);
    border-radius: j(8);
  }
}
.captcha {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  padding: j(10);
  border-radius: j(8);
  white-space: nowrap;
}

.nav-button-group {
  height: j(40);
  background-color: #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .home-button:after {
    content: "";
    position: fixed;
    border-radius: 50%;
    width: j(48);
    height: j(48);
    background-color: #fff;
    right: j(166);
    bottom: j(18);
  }
  .user-button:before {
    content: "";
    position: fixed;
    border-radius: 50%;
    width: j(48);
    height: j(48);
    background-color: #fff;
    left: j(166);
    bottom: j(18);
  }
  button {
    width: 50%;
    height: 100%;
    border: none;
  }
  .active {
    background-color: blue;
    color: #fff;
    font-weight: 500;
  }
  .image-add {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: j(166);
    bottom: j(20);
    width: j(44);
    height: j(44);
    background-color: #EB1E23;
    box-shadow: 0 0 j(10) j(5) #0003;
    border-radius: 50%;
    color: #fff;
    font-size: j(14);
  }
}
</style>