<template>
  <div class="c-view-wrap">
    <div class="c-card">
      <div class="section-content">
        <label class="choose-image">
          <img :src="imageUrl(detailList.file.filepath)" alt="img">
          <input type="file" @change="handleFiles">
        </label>
        <div class="image-title">
          <input type="text" placeholder="请输入图片的标题" v-model="detailList.title">
        </div>
        <div class="image-button-group">
          <label>
            <input type="radio" id="public" name="image" value="public" v-model="detailList.type" @change="handleType">public
          </label>
          <label>
            <input type="radio" id="private" name="image" value="private" v-model="detailList.type"
                   @change="handleType">private
          </label>
        </div>
        <textarea class="picture-detail" style="resize: none" rows="4" placeholder=" 图片详细信息"
                  v-model="detailList.description">

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
      files: '',
      fileid: '',
      id: '',
      detailList: [],
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
      this.files = event.target.files
      let formData = new FormData();
      formData.append('file', this.files[0]);

      doFile(formData).then(result => {
        this.fileId = result.data.data.id
      }).catch(error => {
        alert(error.response.data.msg)
      })
    },
    //更新图片
    handleUpdataImage() {
      const title = this.detailList.title
      const type = this.detailList.type
      const description = this.detailList.description
      const {fileid, id} = this

      doUpdata({title, type, description, fileid}, id).then(result => {
        this.$router.replace('/home')
        console.log(result)
      }).catch(error => {
        alert(error.response.data.msg)
      })
    }

  },
  mounted() {
    this.id = this.$route.query.id
    this.fileid = this.$route.query.fileid
    //图片信息
    const {id} = this
    doDetail(id).then(result => {
      this.detailList = result.data.data
    }).catch(error => {
      alert(error.response.data.msg)
    })

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