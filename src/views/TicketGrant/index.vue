<template>
    <div class="c-view-wrap">
        <div class="c-card">
            <div class="card-head">
              <h1>赣AJM999 张卫国</h1>
              <p>
                发券金额
                <span>800.00元</span>
                (GF:300.00、CX:300.00)
              </p>
            </div>
            <div class="coupon-group">
                <div class="coupon-item">
                  <div class="coupon-item-value">
                    <div class="coupon-item-amount">
                      <span>￥</span>
                      <strong>500</strong>
                    </div>
                  </div>
                  <div class="coupon-item-bar">

                  </div>
                  <div class="coupon-item-info">
                    <h3>无使用门槛</h3>
                    <p>有效期至：2023/07/10 14:00:00</p>
                  </div>
                </div>
            </div>
            <div class="qr-code-box">
              <img src="@/assets/images/grant.jpg" alt="grant">
              <span>扫码领取或长按二维码保存</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.c-card {
  padding: j(32) j(16);
}
.card-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: j(20);
    font-weight: 600;
    line-height: j(28);
    color: #333;
    text-align: center;
  }
  p {
    margin-top: j(10);
    color: #999;
    text-align: center;
    font-size: j(16);
    white-space: nowrap;
    span {
      font-weight: bold;
      color: #eb1e23;
    }
  }
}
.coupon-group {
  margin-top: j(28);
}
.coupon-item {
  display: flex;
  align-items: center;
  position: relative;
  color: #eb1e23;
  background-color: #fff0f0;
  height: j(84);
  border-radius: j(8);
  max-width: j(350);
  min-width: j(310);
  overflow: hidden;
}
.coupon-item-value {
  width: j(100);
  height: j(35);
  display: flex;
  justify-content: center;
  align-items: center;
}
.coupon-item-amount {
  font-weight: 700;
  box-sizing: border-box;
  span {
    font-size: j(16);
    margin-top: j(6);
  }
  strong {
    margin-left: j(2);
    font-size: j(32);
  }
}
.coupon-item-bar {
  position: relative;
  height: 100%;
  border-left: 1px dashed #ffb9b9;
  &::before {
    content: "";
    position: absolute;
    top: j(-6);
    left: j(-6);
    width: j(12);
    height: j(12);
    background-color: #fff;
    border-radius: 50%;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: j(-6);
    left: j(-6);
    width: j(12);
    height: j(12);
    background-color: #fff;
    border-radius: 50%;
  }
}
.coupon-item-info {
  padding: 0 j(12);
  flex: 1;
  h3 {
    font-size: j(16);
    font-weight: 600;
    line-height: j(22);
  }
  p {
    margin-top: j(4);
    font-size: j(10);
    line-height: j(16);
    white-space: nowrap;
  }
}
.qr-code-box {
  margin-top: j(32);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    display: block;
    width: j(160);
    height: j(160);
    margin-bottom: j(12);
  }
  span {
    font-size: j(14);
    line-height: j(20);
    color: #999;
  }
}
</style>