<template>
  <div class="c-view-wrap">
    <div class="c-card section header-section">
      <div class="section-head">
          <h1>赣AJM999 张卫国</h1>
          <span class="tag">待领取</span>
      </div>
      <ul class="section-content">
        <li>
          <span>券批次号</span>
          <span>1011321134</span>
        </li>
        <li>
          <span>批次总金额</span>
          <span>600.00 (GF:300.00、CX:300.00)</span>
        </li>
        <li>
          <span>拆分数量</span>
          <span>2</span>
        </li>
        <li>
          <span>创建时间</span>
          <span>2023/07/01 14:00:00</span>
        </li>
      </ul>
    </div>
    <p class="divide-line">发放详情</p>
    <div class="c-card section">
      <ul class="section-content">
        <li>
          <span>券面额</span>
          <span>300</span>
        </li>
        <li>
          <span>券数量</span>
          <span>1</span>
        </li>
        <li>
          <span>创建时间</span>
          <span>2023/07/01 14:00:00</span>
        </li>
        <li>
          <span>有效期</span>
          <span>2023/07/10 14:00:00</span>
        </li>
        <li>
          <span>状态</span>
          <span>
            <i>待领取</i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.c-view-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section {
  margin-top: j(12);
  border-radius: j(8);
}
.header-section {
  margin-top: 0;
  background: linear-gradient(180deg,rgba(32,97,230,.1) 0%,rgba(255,255,255,0) 100%);
  border-top: 3px solid #2061e6;
  border-radius: 0 0 j(8) j(8);
}
.section-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: j(16) 0;
  h1 {
    font-weight: bold;
    font-size: j(20);
    line-height: j(28);
    text-align: center;
  }
  .tag {
    width: j(56);
    height: j(20);
    line-height: j(20);
    border-radius: j(2);
    font-size: j(12);
    color: #fff;
    margin-top: j(6);
    background-color: #2061e6;
    text-align: center;
  }
}
.section-content {
  margin-top: j(12);
  font-size: j(14);
  li {
    padding: j(6) 0;
    display: flex;
    align-items: center;
    span:nth-child(1) {
      margin-right: j(32);
      color: #999;
      line-height: j(20);
    }
    span:nth-child(2) {
      flex: 1;
      color: #333;
      line-height: j(20);
      text-align: right;
    }
    i {
      color: #2061e6;
      background-color: #deeefc;
      padding: j(2) j(6);
      font-size: j(12);
      border-radius: j(2);
    }
  }
}
.divide-line {
  margin-top: j(20);
  height: j(20);
  line-height: j(20);
  font-size: j(14);
  color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  &::before {
    content: " ";
    margin: 0 j(12);
    width: j(38);
    height: 1px;
    background-color: #d6d6d6;
  }
  &::after {
    content: " ";
    margin: 0 j(12);
    width: j(38);
    height: 1px;
    background-color: #d6d6d6;
  }
}
</style>