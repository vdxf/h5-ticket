<template>
  <div class="c-view-wrap">
    <div class="c-card">
      <div class="section-content">
        <label class="choose-image">
          <img src="@/assets/images/loginbgc.png" alt="img">
          <input type="file" @change="handleFiles">
        </label>
        <div class="image-title">
          <input type="text" placeholder="请输入图片的标题">
        </div>
        <div class="image-button-group">
          <button>public</button>
          <button>private</button>
        </div>
        <textarea class="picture-detail" style="resize: none" rows="4" placeholder=" 图片详细信息">

        </textarea>
        <button type="submit" class="c-button" @click="handleUploadImage">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import {doFile} from "@/api";

  export default  {
    data(){
      return {
        files: '',
      }
    },
    methods:{
      handleFiles(event){
        this.files = event.target.files
        // console.log(this.files[0])
      },
      handleUploadImage(){
        let formData = new FormData();
        formData.append('file', this.files[0]);

        let token = window.localStorage.getItem('token')
        let Authorization = 'Bearer ' + token

        doFile( formData, Authorization ).then(result => {
          console.log(result)
        }).catch(error => {
          console.log(formData.get('file'))
          alert(error.response.data.msg)
        })
      }

    }
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
  height: j(40);
  flex-direction: row;
  margin-bottom: j(20);
  button {
    width: 50%;
    height: j(40);
    border: none;
    background-color: transparent;
    &:first-child {
      border: 1px solid #4cae4c;
      color: #4cae4c;
    }
    &:last-child {
      border: 1px solid #761c19;
      color: #761c19;
      margin-left: j(10);
    }
  }
}
.picture-detail {
  border: 1px solid #333;
  border-radius: j(8);
  outline: none;
  margin-bottom: j(20);
}
</style>