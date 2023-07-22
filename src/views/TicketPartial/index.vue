<template>
    <div class="ticket-partial">
        <div class="c-card">
            <h2>赣AJM999 &nbsp; 张卫国</h2>
            <div class="partial">
                部分领取
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
        <div class="distribution-detail">
            <p> ——— 发放详情 ——— </p>
        </div>
        <div class="detail-card c-card">
            <div class="form-item">
                <span>券面额</span>  
                <p>300</p>  
            </div>
            <div class="form-item">
                <span>券数量</span>  
                <p>1</p>  
            </div>
            <div class="form-item">
                <span>创建时间</span>  
                <p>2023/07/01 14:00:00</p>  
            </div>
            <div class="form-item">
                <span>有效期</span>  
                <p>2023/07/10 14:00:00</p>  
            </div>
            <div class="form-item">
                <span>领取时间</span>  
                <p>2023/07/02 15:00:00</p>  
            </div>
            <div class="form-item">
                <span>状态</span>  
                <div class="failed">领取失败</div>  
            </div>
            <div class="form-item">
                <span>核销时间</span>  
                <p>2023/07/05 14:00:00</p>  
            </div>
            <button class="reissue" @click="handleReissue">补发</button>
        </div>
        <div class="detail-card c-card">
            <div class="form-item">
                <span>券面额</span>  
                <p>300</p>  
            </div>
            <div class="form-item">
                <span>券数量</span>  
                <p>1</p>  
            </div>
            <div class="form-item">
                <span>创建时间</span>  
                <p>2023/07/01 14:00:00</p>  
            </div>
            <div class="form-item">
                <span>有效期</span>  
                <p>2023/07/10 14:00:00</p>  
            </div>
            <div class="form-item">
                <span>领取时间</span>  
                <p>2023/07/02 15:00:00</p>  
            </div>
            <div class="form-item">
                <span>状态</span>  
                <div class="failed">领取失败</div>  
            </div>
            <div class="form-item">
                <span>核销时间</span>  
                <p>2023/07/05 14:00:00</p>  
            </div>
            <button class="reissue" @click="handleReissue">补发</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TicketPartial',
        methods: {
            handleReissue(){
                this.$router.push('/ticketcreate')
            },
        },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.ticket-partial {
    padding-top: j(100);
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.c-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, rgba(255,150,1,0.1) 0%, rgba(255,255,255,0) 100%);
    border-radius: 0px 0px j(8) j(8);
    border-top: 3px solid #FF9601;
    padding: j(28) j(16) j(26);
    h2 {
        font-size: j(20);
        font-weight: 500;
        color: #333333;
        line-height: j(28);
        margin-bottom: j(8);
    }
}
.partial {
    width: j(56);
    background: #FF9601;
    border-radius: j(2);
    font-size: j(12);
    color: #FFFFFF;
    line-height: j(20);
    text-align: center;
    margin-bottom: j(28);
}
.form-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: j(14);
    &:last-child {
        margin-bottom: j(0);
    }
    span {
        font-size: j(14);
        color: #999999;
        line-height: j(20);
    }
    p {
        font-size: j(14);
        color: #333333;
        line-height: j(20);
    }
}
.distribution-detail {
    p {
        font-size: j(14);
        color: #333333;
        line-height: j(20);
        margin: j(20) auto j(12);
    }
}
.detail-card {
    background: #FFFFFF;
    box-shadow: 0px 0px j(4) 0px rgba(0,0,0,0.08);
    border-radius: j(8);
    border: none;
    padding: j(16);
    margin-bottom: j(12);
}
.failed {
    width: j(56);
    background: #FAE6EB;
    border-radius: j(2);
    font-size: j(12);
    color: #EB1E23;
    line-height: j(20);
    text-align: center;
}
.reissue {
    width:100%;
    height: j(32);
    border-radius: j(8);
    border: 1px solid #999999;
    font-size: j(14);
    color: #333333;
    line-height: j(20);
    background-color: transparent;
}
</style>