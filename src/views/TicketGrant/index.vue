<template>
    <div class="ticket-grant">
        <div class="c-card">
            <h2>赣AJM999 &nbsp; 张卫国</h2>
            <p>发券金额
                <span>800元</span>
                (GF:300.00、CX:300.00)
            </p>
            <div class="form-box">
                <div class="form-item">
                    <span>￥500</span>
                    <div class="threshold">
                        <h3>无使用门槛</h3>
                        <p>有效期至：2023/07/10 14:00:00</p>
                    </div>
                </div>
                <div class="form-item">
                    <span>￥300</span>
                    <div class="threshold">
                        <h3>无使用门槛</h3>
                        <p>有效期至：2023/07/10 14:00:00</p>
                    </div>
                </div>
            </div>
            <img src="@/assets/images/grant.jpg" alt="grant">
            <p>扫码领取或长按二维码保存</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TicketGrant',
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.ticket-grant {
    background: #FAFAFA;
    padding-top: j(116);
    padding-bottom: j(100);
    img {
        display: block;
        margin-bottom: j(12);
    }
}
.c-card {
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: j(28) j(20);
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.08);
    border-radius: 20px;
    h2 {
        font-size: j(20);
        font-weight: 500;
        color: #333333;
        line-height: j(28);
        margin-bottom: j(13);
    }
    p {
        font-size: j(14);
        color: #999999;
        line-height: j(20);
        span {
            font-size: j(16);
            font-weight: 500;
            color: #EB1E23;
            line-height: j(22);
        }
    }
}
.form-box {
    width: j(310);
    margin: j(28) 0;
    display: flex;
    flex-direction: column;
}
.form-item {
    position: relative;
    display: flex;
    align-items: center;
    height: j(84);
    background: #FFF0F0;
    border-radius: j(8);
    &:first-child {
        margin-bottom: j(16);
    }
    span {
        width: j(100);
        height: j(84);
        font-size: j(31);
        font-weight: bold;
        color: #EB1E23;
        line-height: j(84);
        text-align: center;
        border-right: 1px dashed #FFB9B9;
    }
}
.threshold {
    margin-left: j(16);    
    h3 {
        font-size: j(16);
        font-weight: 500;
        color: #EB1E23;
        line-height: j(22);
    }
    p {
        font-size: j(12);
        color: #EB1E23;
        line-height: j(16);
    }
}
</style>