<template>
  <div class="c-view">
    <div class="c-card">
        <div class="detail-group">
          <p>图片标题：{{detailList.title}}</p>
          <p>类型：{{detailList.type}}</p>
          <p>描述：{{detailList.description}}</p>
          <p>粉丝数：{{detailList.likeCount}}</p>
          <p>图片宽高：{{detailList.file.width}} * {{detailList.file.height}}</p>
          <p>图片主题颜色：{{detailList.file.color}}</p>
          <p>创建时间：{{detailList.createdAt}}</p>
          <p>更新时间：{{detailList.updatedAt}}</p>
          <p>图片ID：{{detailList.id}}</p>
          <p>图片大小： {{detailList.file.size}} kb</p>
          <div class="button-group">
            <div class="like">
              <button @click.stop="handleLike">点赞</button>
              <button @click.stop="handleCancelLike">取消点赞</button>
            </div>
            <div class="collect">
              <button @click.stop="handleCollect">收藏</button>
              <button @click.stop="handleCancelCollect">取消收藏</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {doCancelCollect, doCancellike, doCollect, doDetail, doLike} from "@/api";

  export default {
      data(){
        return {
          detailList: [],
          id: '',
        }
      },
      methods: {
        //点赞
        handleLike(){
          doLike(this.id).then((result) => {
            console.log(result)
          }).catch((error) => {
            alert(error.response.data.msg)
          })
        },
        // 取消点赞
        handleCancelLike(){
          doCancellike(this.id).then((result) => {
            console.log(result)
          }).catch((error) => {
            alert(error.response.data.msg)
          })
        },
        //收藏
        handleCollect(){
          doCollect(this.id).then((result) => {
            console.log(result)
          }).catch((error) => {
            alert(error.response.data.msg)
          })
        },
        //取消收藏
        handleCancelCollect(){
          doCancelCollect(this.id).then((result) => {
            console.log(result)
          }).catch((error) => {
            alert(error.response.data.msg)
          })
        },
      },
      mounted(){
        this.id = this.$route.query.id

        let token = window.localStorage.getItem('token')
        let Authorization = 'Bearer ' + token

        const {id} = this
        doDetail(id,Authorization).then(result => {
          this.detailList = result.data.data
        }).catch(error => {
          console.dir(error)
        })
      }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.c-view {
  padding: j(20) 0;
}
.detail-group {
  p {
    margin: j(10) 0;
  }
}
.button-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: j(20);
  .like {
    button {
      margin-right: j(10);
    }
  }
  .collect {
    button {
      margin-left: j(10);
    }
  }
}
</style>