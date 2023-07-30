<template>
  <div class="c-view-wrap">
    <div class="c-card">
      <div class="section-content">
        <label class="choose-image">
          <img v-if="filepath" :src="imageUrl(filepath)" alt="img">
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
        <button type="submit" class="c-button" @click="handleUpdataImage">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import {doDetail, doFile, doUpdata} from "@/api";

export default {
  data() {
    return {
      id: '',
      title: '',
      description: '',
      type: '',
      fileId: '',
      filepath: '',
    }
  },
  methods: {
    //获取图片url路径
    imageUrl(filepath) {
      return ("https://img.daysnap.cn/api/" + filepath)
    },
    handleType() {
    },
    //获取图片
    handleFiles(event) {
      const file = event.target.files[0]
      const formData = new FormData();
      formData.append('file', file);
      doFile(formData).then(result => {
        this.fileId = result.data.data.id
        this.filepath = result.data.data.filepath
      }).catch(error => {
        alert(error.response.data.msg)
      })
    },
    //更新图片
    handleUpdataImage() {
      const { fileId, id, title, description, type } = this
      if (id) {
        doUpdata({title, type, description, fileId }, id).then(result => {
          this.$router.replace('/home')
          console.log(result)
        }).catch(error => {
          alert(error.response.data.msg)
        })
      } else {
        //
      }
    },
    reqPictureInfo () {
      const { id } = this.$route.query
      if (!id) {
        return
      }
      doDetail(id).then(result => {
        console.log('result => ', result)
        const { file, id, title, description, type } = result.data.data
        const { id: fileId , filepath } = file
        this.id = id
        this.title = title
        this.description = description
        this.type = type
        this.fileId = fileId
        this.filepath = filepath
      }).catch(error => {
        alert(error.response.data.msg)
      })
    }
  },
   created() {
    this.reqPictureInfo()
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