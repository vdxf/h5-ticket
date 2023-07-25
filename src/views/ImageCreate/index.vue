<template>
  <div class="c-view-wrap">
    <div class="c-card">
      <div class="section-content">
        <label class="choose-image">
          <img src="@/assets/images/loginbgc.png" alt="img">
          <input type="file" @change="handleFiles">
        </label>
        <div class="image-title">
          <input type="text" placeholder="请输入图片的标题" v-model="title">
        </div>
        <div class="image-button-group">
          <label>
            <input type="radio" id="public" name="image" value="public" v-model="type" @change="handleType">public
          </label>
          <label>
            <input type="radio" id="private" name="image" value="private" v-model="type" @change="handleType">private
          </label>
        </div>
        <textarea class="picture-detail" style="resize: none" rows="4" placeholder=" 图片详细信息" v-model="description">

        </textarea>
        <button type="submit" class="c-button" @click="handleUploadImage">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import {doFile, doGain} from "@/api";

  export default  {
    data(){
      return {
        type: '',
        title: '',
        description: '',
        fileId: '',
        files: '',
      }
    },
    methods:{
      handleType(){
      },
      handleFiles(event){
        this.files = event.target.files
        let formData = new FormData();
        formData.append('file', this.files[0]);

        let token = window.localStorage.getItem('token')
        let Authorization = 'Bearer ' + token

        doFile( formData, Authorization ).then(result => {
          this.fileId = result.data.data.id
        }).catch(error => {
          alert(error.response.data.msg)
        })
      },

      handleUploadImage(){
        let token = window.localStorage.getItem('token')
        let Authorization = 'Bearer ' + token
        const { title, description, type, fileId } = this
        doGain( { title, description, type, fileId }, Authorization).then(result => {
          this.$router.push('/home')
          console.log(result)
        }).catch(error => {
          console.dir(error)
          alert(error.response.data.msg)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.c-card {
  padding-bottom: j(80);
}
.section-content {
  display: flex;
  flex-direction: column;
}
.choose-image {
  img {
    display: block;
    width: j(160);
    height: j(160);
  }
  input {
    margin-top: j(10);
  }
}
.image-title {
  padding: j(10);
  border: 1px solid #000000;
  margin-top: j(20);
  margin-bottom: j(20);
  border-radius: j(4);
  display: flex;
  input {
      flex: 1;
      outline: none;
  }
}
.image-button-group {
  display: flex;
  align-items: center;
  height: j(40);
  flex-direction: row;
  margin-bottom: j(20);
  input {
    background-color: transparent;
  }
}
.picture-detail {
  border: 1px solid #333;
  border-radius: j(8);
  outline: none;
  margin-bottom: j(20);
}
</style>