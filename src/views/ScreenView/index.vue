<template>
    <div class="screen-view">
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
        <div class="screen-wrap">
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
            <button class="screen-button" @click="handleScreen" >筛选</button>
        </div>
     </div>
</template>

<script>
    export default {
        name: 'ScreenView',
        methods: {
            handleScreen(){
                this.$router.push('/screennull')
            },
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.screen-view {
    background: rgba(0,0,0,0.4);
}
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