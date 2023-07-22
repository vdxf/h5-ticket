<template>
  <div class="popup-view">
    <div class="content">
        <h2>温馨提示</h2>
        <p>{车牌号}本次补发券面额：100元。</p>
        <div class="button-box">
            <button class="cancle-button">取消</button>
            <button class="grant-button">补发</button>
        </div>
    </div>
    
  </div>
</template>

<script>
    export default {
        name: 'Popup',
    }
</script>

<style scoped lang="scss">
@import '@/assets/sass/define.scss';
.popup-view {
    height: 100vh;
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

</style>