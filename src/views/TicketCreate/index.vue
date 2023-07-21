<template>
    <div class="ticket-create">
        <div class="c-card">
            <div class="form-box">
                <div class="form-item">
                    <span>＊</span>
                    车牌号
                    <input type="text" placeholder="请输入车牌号">
                </div>
                <div class="form-item">
                    <span>＊</span>
                    车主姓名
                    <input type="text" placeholder="请输入车主姓名">
                </div>
                <div class="form-item">
                    <span>＊</span>
                    GF金额
                    <input type="text" placeholder="默认0，请输入500以内的正整数">
                </div>
                <div class="form-item">
                    <span>＊</span>
                    CX金额
                    <input type="text" placeholder="默认0，请输入500以内的正整数">
                </div>
                <div class="form-item">
                    <span>＊</span>
                    券总金额
                    <input type="text" placeholder="系统自动计算">
                </div>
                <div class="form-item">
                    备注
                    <input type="text" placeholder="请输入">
                </div>
                <button class="c-button">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TicketCreate'
    }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.ticket-create {
    background: #FAFAFA;
    padding-top: j(116);
}
.c-card {
    padding: j(28) j(20);
}
.form-box {
    display: flex;
    flex-direction: column;
}
.form-item {
    display: flex;
    align-items: center;
    position: relative;
    height: j(30);
    margin-top: j(34);
    font-size: j(12);
    color: #666666;
    line-height: j(16);
    border-bottom: 1px solid #F5F5F5;
    input {
        position: absolute;
        flex: 1;
        margin-left: j(80);
    }
    span {
        font-size: j(12);
        color: #EB1E23;
        line-height: j(16);
    }
    &:first-child {
        margin-top: 0;
    }
}
.c-button {
    margin-top: j(28);
    background-color: #F58287;
}
</style>