<template>
  <div class="screen-null">
    <div class="screen-nav">
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
            <div class="screen">
                <i></i>
               <router-link to="/screen">筛选</router-link>
            </div>
        </div>
    </div>
    <div class="content-box">
        <i></i>
        <p>没有找到相关内容，换个条件试试</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'ScreenNull',
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.screen-nav {
    background: #EB1E23;
    padding-top: j(50);
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
    height: j(62);
    background: rgba(255,255,255,1);
    border-radius: j(20) j(20) 0 0 ;
    padding: j(12);
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
.search-form {
    width: j(291);
    height: j(36);
    box-sizing: border-box;
    background: #F5F5F5;
    border-radius: j(8);
    display: flex;
    align-items: center;
    padding-right: j(20);
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
    a {
        cursor: pointer;
        height: j(20);
        font-size: j(14);
        color: #333333;
        line-height: j(20);
    }
    i {
        width: j(16);
        height: j(16);
        background: url(@/assets/images/filter.png) no-repeat;
        background-size: j(16) j(16);
        margin-left: j(3);
        margin-right: j(3);
    }
}
.content-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: j(32);
    i {
        width: j(200);
        height: j(120);
        background: url(@/assets/images/null.png) no-repeat;
        background-size: j(200) j(120);
    }
    p {
        height: j(20);
        font-size: j(14);
        color: #999999;
        line-height: j(20);
    }
}
</style>