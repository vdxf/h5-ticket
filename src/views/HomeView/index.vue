<template>
  <div class="home-view">

    <div class="home-nav">
      <div class="nav-info">
        <span>{商户名称}</span>
        <p>业务员名称</p>
        <div class="exit" @click="handleExit">
          <i></i>
          退出
        </div>
      </div>
      <div class="nav-search">
        <div class="search-form">
          <i></i>
          <input type="text" placeholder="搜索车牌号">
        </div>
        <button class="screen" @click.stop="handleFilter">
          <i></i>
          筛选
        </button>
      </div>
    </div>

    <div class="screen-view" v-show="isFilter" @click="isFilter = false">
      <div class="screen-wrap" @click.stop="$emit('null')">
        <div class="screen-content">
          <div class="screen-item">
            <span>状态</span>
            <button>待发放</button>
            <button>领取完成</button>
            <button>部分领取</button>
            <button>已作废</button>
          </div>
          <div class="screen-item">
            <span>车牌号</span>
            <input type="text" placeholder="请输入车牌号">
          </div>
          <div class="screen-item">
            <span>车主姓名</span>
            <input type="text" placeholder="请输入车主姓名">
          </div>
          <div class="screen-item">
            <span>创建时间</span>
            <input class="start-time time" type="text" placeholder="开始时间">
            <div class="icon">-</div>
            <input class="end-time time" type="text" placeholder="结束时间">
          </div>
        </div>
        <button class="reset-button" type="reset">重置</button>
        <button class="screen-button" @click="isFilter = false">筛选</button>
      </div>
    </div>

<!--    图片列表-->
    <div class="home-list">
      <ul class="image-card">
        <li v-for="imgObj in currentPageData" :key="imgObj.id" @click="handleImageDetail(imgObj.id)">
          <div class="image-detail">
            <img :src="imageUrl(imgObj.file.filepath)" alt="img">
            <div class="detail-content">
              <span>{{ imgObj.title }}</span>
              <span>{{ imgObj.updatedAt }}</span>
              <span>{{ imgObj.description }}</span>
            </div>
          </div>
          <div class="image-button-group">
            <button @click.stop="handleUpdataImage(imgObj.id,imgObj.file.id)">更新</button>
            <button @click.stop="handleDeleteImage(imgObj.id)">删除</button>
          </div>
        </li>
      </ul>
    </div>

<!--    删除弹窗-->
    <div class="popup-view" v-show="isPopup"  @click="isPopup = false">
      <div class="content" @click.stop="$emit('null')">
        <h2>温馨提示</h2>
        <p>确认要删除这条数据吗？</p>
        <div class="button-box">
          <button class="cancle-button" @click.stop="isPopup = false">取消</button>
          <button class="grant-button" @click.stop="handleReissue">删除</button>
        </div>
      </div>
    </div>

<!--    分页-->
<!--   <div class="page-button-group">-->
<!--     <input type="button" value="首页" @click="handleFirstPage">-->
<!--     <input type="button" value="上一页" @click="handlePrevPage">-->
<!--     <input type="button" value="下一页" @click="handleNextPage">-->
<!--     <input type="button" value="尾页" @click="handleLastPage">-->
<!--   </div>-->

    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>

  </div>
</template>

<script>
import {doDelete, doTabulation} from "@/api";
import Loading from "@/components/Loading/index.vue";
export default {
  components: {Loading},
  data() {
    return {
      imageList: [],
      type: '',
      title: '',
      description: '',
      isFilter: false, //筛选
      isPopup: false,  //弹窗
      isCancel: false, //作废弹窗
      isLoading: false,
      active: 1,
      id: '',
      totalPage: 1, // 统共页数
      current: 1, //当前页数
      length: 10, // 每页显示数量
      currentPageData: [], //当前页显示内容
      a: '',
    }
  },
  methods: {
    //获取图片列表
    reqDataList(current) {
      this.isLoading = true
      doTabulation({current: current, length: 10}).then(result => {
        this.imageList = result.data.data.list.reverse()
        // this.totalPage = Math.ceil(this.imageList.length / this.length)
        // this.totalPage = this.totalPage === 0 ? 1 : this.totalPage
        this.current = current
        this.getCurrentPageData()
        this.isLoading = false
        // console.log(this.imageList)
      }).catch(error => {
        alert(error.response.data.msg)
      })
    },
    getCurrentPageData() {
      // let begin = (this.current - 1) * this.length;
      let end = this.current * this.length;
      // this.currentPageData = this.imageList.slice( begin, end);
      this.currentPageData = this.imageList.slice( 0, end);
    },
    //首页
    // handleFirstPage(){
    //   this.reqDataList(1)
    //   console.log('首页')
    // },
    //上一页
    // handlePrevPage() {
    //   console.log('上一页')
    //   if (this.current === 1) {
    //     return false
    //   } else {
    //     this.reqDataList(this.current - 1 )
    //     this.getCurrentPageData()
    //   }
    // },
    // 下一页
    // handleNextPage() {
    //   console.log('下一页')
    //   if (this.current === this.totalPage) {
    //     return false;
    //   } else {
    //     this.reqDataList(this.current + 1 )
    //     this.getCurrentPageData()
    //   }
    // },
    //尾页
    // handleLastPage() {
    //   console.log('尾页')
    //   if (this.current === this.totalPage) {
    //     return false;
    //   } else {
    //     this.current = this.totalPage;
    //     this.reqDataList(this.current )
    //     this.getCurrentPageData();
    //   }
    // },
    //退出
    handleExit() {
      window.localStorage.removeItem('token')
      this.$router.replace('/login')
    },
    // 更新图片
    handleUpdataImage(id, fileid) {
      this.$router.push({
        path: '/imageupdata',
        query: {
          id: id,
          fileid: fileid
        }
      })
    },
    // 删除图片
    handleDeleteImage(id) {
      this.id = id
      this.isPopup = true
    },
    handleReissue(){
      const {id} = this
      doDelete(id).then(() => {
        this.isPopup = false
        this.reqDataList(1)
      }).catch(error => {
        console.dir(error)
      })
    },
    //获取图片url路径
    imageUrl(filepath) {
      return ("https://img.daysnap.cn/api/" + filepath)
    },
    // 跳转图片详情页面
    handleImageDetail(id) {
      this.$router.push({
        path: '/imagedetail',
        query: {
          id: id
        }
      })
    },
    //筛选
    handleFilter() {
      this.isFilter = !this.isFilter
    },
  },
  mounted() {
    this.reqDataList(1)
    this.current = this.$route.query.current
  },
  watch: {
    current : {
      handler(nv,ov){
        console.log(nv,ov)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.home-view {
  position: relative;
}

.home-nav {
  background: #EB1E23;
  position: relative;
}

.nav-info {
  display: flex;
  align-items: center;
  padding: 0 j(12);
  box-sizing: border-box;
  padding-bottom: j(10);

  span {
    height: j(24);
    font-size: j(18);
    font-weight: 500;
    color: #FFFFFF;
    line-height: j(24);
    margin-right: j(5);
  }

  p {
    width: j(205);
    height: j(20);
    font-size: j(15);
    font-weight: 500;
    color: #FFFFFF;
    line-height: j(20);
  }
}

.exit {
  display: flex;
  align-items: center;
  height: j(20);
  font-size: j(14);
  color: #FFFFFF;
  line-height: j(20);
  padding-left: j(3);

  i {
    display: block;
    width: j(16);
    height: j(16);
    background: url(@/assets/images/exit.png) left center no-repeat;
    background-size: j(16) j(16);
  }
}

.nav-search {
  height: j(60);
  background: rgba(255, 255, 255, 1);
  border-radius: j(20) j(20) 0 0;
  padding: j(12);
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.search-form {
  width: j(280);
  height: j(36);
  box-sizing: border-box;
  background: #F5F5F5;
  border-radius: j(8);
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: j(20);
    font-size: j(14);
    color: #D6D6D6;
    line-height: j(20);
  }

  i {
    width: j(16);
    height: j(16);
    background: url(@/assets/images/search.png) left center no-repeat;
    background-size: j(16) j(16);
    margin-left: j(12);
    margin-right: j(5);
  }
}

.screen {
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  height: j(20);
  font-size: j(14);
  color: #333333;
  line-height: j(20);
  margin-left: j(5);

  i {
    width: j(16);
    height: j(16);
    background: url(@/assets/images/filter.png) no-repeat;
    background-size: j(16) j(16);
    margin-right: j(5);
  }
}

.home-list {
  background-color: #f6f3f3;
  box-sizing: border-box;
  padding: j(12) j(12) j(50);
}

.grant-card, .part-card, .voided-card, .image-card {
  width: j(351);
  background: #FFFFFF;
  box-shadow: 0px 0px j(4) 0px rgba(0, 0, 0, 0.08);
  border-radius: j(8);
  box-sizing: border-box;
  padding: j(16);
  margin-bottom: j(12);

  button {
    width: 100%;
    height: j(32);
    border-radius: j(4);
    border: 1px solid #F58287;
    background-color: transparent;
    font-size: j(14);
    color: #EB1E23;
  }
}

.image-card {
  display: flex;
  flex-direction: column;
}

.image-detail {
  display: flex;
  align-items: center;

  img {
    display: block;
    width: j(100);
    height: j(100);
    margin-right: j(10);
  }
}

.detail-content {
  display: flex;
  flex-direction: column;
  flex: 1;

  span {
    font-size: j(16);
    line-height: j(32);
    text-align: right;
    margin-bottom: j(10);
  }
}

.image-button-group {
  display: flex;
  margin-top: j(20);

  button:last-child {
    margin-left: j(10);
  }
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: j(16);

  span {
    height: j(22);
    font-size: j(16);
    font-weight: 500;
    color: #333333;
    line-height: j(22);
  }

  .grant {
    background: #2061E6;
  }

  .part {
    background: #FF9601;
  }

  .voided {
    background: #EB1E23;
  }
}

.state {
  width: j(56);
  height: j(20);
  font-size: j(12);
  color: #FFFFFF;
  line-height: j(20);
  border-radius: j(2);
  text-align: center;
}

.form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: j(12);

  span {
    height: j(20);
    font-size: j(14);
    color: #999999;
    line-height: j(20);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.ticket-button-group {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-top: j(12);

  .grant {
    border: 1px solid #ff976a;;
    color: #ff976a;
  }

  .cancel {
    margin-left: j(10);
    border: 1px solid #eb1e23;;
    color: #eb1e23
  }
}

// 弹窗页面样式

.popup-view, .image-update {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
}

.image-content {
  width: j(320);
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: j(4);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: j(20) j(10);

  button {
    width: 80%;
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

.content {
  width: j(320);
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: j(8);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h2 {
    font-size: j(17);
    font-weight: 500;
    color: #333333;
    line-height: j(24);
    margin-top: j(32);
    margin-bottom: j(16);
  }

  p {
    font-size: j(17);
    color: #666666;
    line-height: j(24);
    margin-bottom: j(32);
  }
}

.button-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #D9D9D9;

  button {
    width: 50%;
    height: j(54);
    background-color: transparent;
    font-size: j(17);
    font-weight: 500;
    line-height: j(24);
    letter-spacing: j(1);
    box-sizing: border-box;
  }
}

.cancle-button {
  border: none;
  color: #333333;
  border-right: 1px solid #D9D9D9;
}

.grant-button {
  border: none;
  color: #2061E6;
}

//筛选页面样式

.screen-view {
  position: fixed;
  top: j(96);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.screen-wrap {
  box-sizing: border-box;
  background: #FFFFFF;
}

.screen-content {
  display: flex;
  flex-direction: column;
  padding: 0 j(12) j(20);
}

.screen-item {
  height: j(36);
  margin-top: j(52);
  position: relative;
  display: flex;

  span {
    position: absolute;
    left: 0;
    top: j(-32);
  }

  input {
    flex: 1;
    text-align: center;
    min-width: 0;
    border: none;
    box-sizing: border-box;
    padding: 0 j(16);
    font-size: j(16);
    color: #333;
    background: #F5F5F5;
    border-radius: 8px;
  }

  button {
    width: j(81);
    height: j(36);
    background: #F5F5F5;
    border-radius: 8px;
    border: none;
    color: #333;
  }

  &:first-child {
    justify-content: space-between;
  }
}

.icon {
  width: j(9);
  height: j(36);
  line-height: j(36);
  font-size: j(20);
  color: #333333;
  padding: 0 j(5);
}

.reset-button, .screen-button {
  width: 50%;
  border: none;
  box-sizing: border-box;
}

.reset-button {
  height: j(45);
  border-top: 1px solid #D6D6D6;
  background: #FFFFFF;
  font-size: j(16);
  font-weight: 500;
  color: #666666;
  line-height: j(24);

}

.screen-button {
  background: #EB1E23;
  height: j(46);
  font-size: j(16);
  font-weight: 600;
  color: #FFFFFF;
  line-height: j(16);
}

.nav-button-group {
  height: j(40);
  background-color: #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;

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
.page-button-group {
  position: fixed;
  left: 0;
  right: 0;
  bottom: j(40);
  height: j(40);
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ccc;

}
</style>