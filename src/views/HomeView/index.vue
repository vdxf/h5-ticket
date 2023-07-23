<template>
  <div class="home-view">
     <div class="home-nav">
        <div class="nav-info">
            <span>{商户名称}</span>
            <p>业务员名称</p>
            <div class="exit">
                <i></i>
                <router-link  to="/login">退出</router-link>
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
            <button class="screen-button" @click="isFilter = false" >筛选</button>
        </div>
     </div>
     <div class="home-list">
         <div class="image-card">
           <div class="image-detail">
             <img src="@/assets/images/loginbgc.png" alt="img">
             <div class="detail-content">
                  <span>images.title</span>
                  <span>images.time</span>
                  <span>images.detail</span>
             </div>
           </div>
           <div class="image-button-group">
             <button>更改</button>
             <button>删除</button>
           </div>
         </div>
        <div class="grant-card" @click="handleUnclaimed">
            <div class="title">
                <span> 赣A*****(张某华) </span>
                <div class="grant state">待领取</div>
            </div>
            <div class="form-item">
                <span>券次批号</span>  
                <p>1011321134</p>                  
            </div>
            <div class="form-item">
                <span>批次总金额</span>  
                <p>600.00 (GF:300.00、CX:300.00)</p>                  
            </div>
            <div class="form-item">
                <span>拆分数量</span>  
                <p>2</p>                  
            </div>
            <div class="form-item">
                <span>创建时间</span>  
                <p>2023/07/01 14:00:00</p>                  
            </div>
            <div class="ticket-button-group">
                <button class="grant" @click.stop="handleGranTicket">发放</button>
                <button class="cancel" @click.stop="handleCancel">作废</button>
            </div>
        </div>
        <div class="part-card" @click="handlePartial">
            <div class="title">
                <span> 赣A*****(张某华) </span>
                <div class="part state">部分领取</div>
            </div>
            <div class="form-item">
                <span>券次批号</span>  
                <p>1011321134</p>                  
            </div>
            <div class="form-item">
                <span>批次总金额</span>  
                <p>600.00 (GF:300.00、CX:300.00)</p>                  
            </div>
            <div class="form-item">
                <span>拆分数量</span>  
                <p>2</p>                  
            </div>
            <div class="form-item">
                <span>创建时间</span>  
                <p>2023/07/01 14:00:00</p>                  
            </div>
            <button @click.stop="handleDelete">作废</button>
        </div>
        <div class="voided-card" @click="handleCompleted">
            <div class="title">
                <span> 赣A*****(张某华) </span>
                <div class="voided state">已作废</div>
            </div>
            <div class="form-item">
                <span>券次批号</span>  
                <p>1011321134</p>                  
            </div>
            <div class="form-item">
                <span>批次总金额</span>  
                <p>600.00 (GF:300.00、CX:300.00)</p>                  
            </div>
            <div class="form-item">
                <span>拆分数量</span>  
                <p>2</p>                  
            </div>
            <div class="form-item">
                <span>创建时间</span>  
                <p>2023/07/01 14:00:00</p>                  
            </div>
        </div>
     </div>
     <div class="popup-view" v-show="isPopup"  @click="isPopup = false">
        <div class="content" @click.stop="$emit('null')">
            <h2>温馨提示</h2>
            <p>{车牌号}本次补发券面额：100元。</p>
            <div class="button-box">
                <button class="cancle-button" @click.stop="isPopup = false">取消</button>
                <button class="grant-button" @click.stop="handleReissue">补发</button>
            </div>
        </div>
    </div>
    <div class="popup-view" v-show="isCancel" @click="isCancel = false">
      <div class="content" @click.stop="$emit('null')">
        <h2>温馨提示</h2>
        <p>确认执行作废操作</p>
        <div class="button-box">
          <button class="cancle-button" @click.stop="isCancel = false">取消</button>
          <button class="grant-button" @click.stop="isCancel = false">确认</button>
        </div>
      </div>
    </div>
    <i class="image-add">+</i>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                isFilter: false, //筛选
                isPopup: false,  //弹窗
                isCancel: false, //作废弹窗
            }
        },
        methods: {
          handleReissue(){
            this.$router.push('ticketcreate')
          },
            handleCancel(){
                this.isCancel = true
            },
            handleGranTicket(){
              this.$router.push('/ticketgrant')
            },
            handleUnclaimed(){
                this.$router.push('/ticketunclaimed')
            },
            handlePartial(){
                this.$router.push('/ticketpartial')
            },
            handleCompleted(){
                this.$router.push('/ticketcompleted')
            },
            handleDelete(){
                this.isPopup = true
            },
            handleFilter(){
                this.isFilter = !this.isFilter
            },
        },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.home-view {
  position: relative;
  .image-add {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: j(16);
    bottom: j(46);
    width: j(44);
    height: j(44);
    background-color: #EB1E23;
    box-shadow: 0 0 j(10) j(5) #0003;
    border-radius: 50%;
    color: #fff;
    font-size: j(14);
  }
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
        a {
            height: j(20);
            font-size: j(14);
            color: #FFFFFF;
            line-height: j(20);
            padding-left: j(3);
        }
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
    background: rgba(255,255,255,1);
    border-radius: j(20) j(20) 0 0 ;
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
    padding: j(12) j(12) 0;
}
.grant-card,.part-card,.voided-card,.image-card {
    width: j(351);
    background: #FFFFFF;
    box-shadow: 0px 0px j(4) 0px rgba(0,0,0,0.08);
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
    border:1px solid #ff976a;;
    color: #ff976a;
  }
  .cancel {
    margin-left: j(10);
    border:1px solid #eb1e23;;
    color: #eb1e23
  }
}

// 弹窗页面样式

.popup-view {
    position:fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
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
.cancle-button{
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
    position:fixed;
    top:j(96);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
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
        text-align:center;
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
        color:#333;
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
.reset-button,.screen-button {
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
</style>