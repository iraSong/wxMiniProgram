<template>
  <div class="detail-wrap">
    <div class="head">
      <div class="title">什么是“换手率”？</div>
      <div class="lecturer">
        <img class="img-head" src="../../assets/lecturer1.png" alt="" />
        <span class="name">晓鸥姐姐</span>
      </div>
      <div class="audio">
        <div class="play"></div>
        <div class="class-title">什么是“换手率”？</div>
      </div>
    </div>
    <div class="des-detail">
      “换手率”也称“周转率”，指在一定时间内市场中股票转手买卖的频率，是反映股票流通性强弱的指标之一。以样本总体的性质不同有不同的指标类型，如交易所所有上市股票的总换手率、基于某单个股票发行数量的换手率、基于某机构持有组合的换手率。
      在技术分析的诸多工具中，换手率指标是反映市场交投活跃程度最重要的技术指标之一。
      常用的技术分析指标还包括：MACD、RSI、KDJ、乖离率等。
    </div>
    <img class="img-detail" src="../../assets/lecturer1.png" alt="" />
    <div class="des-detail">“换手率”也称“周转率”，指在一定时间内市场中股票转手买卖的频率，是反映股票流通性强弱的指标之一。以样本总体的性质不同有不同的指标类型，如交易所所有上市股票的总换手率、基于某单个股票发行数量的换手率、基于某机构持有组合的换手率。
      在技术分析的诸多工具中，换手率指标是反映市场交投活跃程度最重要的技术指标之一。
      常用的技术分析指标还包括：MACD、RSI、KDJ、乖离率等。
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
  .detail-wrap{
    text-align: center;
    padding: 52px 0 160px 0;
    .head{
      .title{
        padding-left: 81px;
        font-size: 48px;
        color: #000;
        letter-spacing: 0.7px;
      }
      .lecturer{
        display: flex;
        align-items: center;
        margin: 36px 0 46px 80px;
        .img-head{
          width: 70px;
          height: 70px;
          margin-right: 31px;
        }
        .name{
          font-size: 30px;
          color: #000;
        }
      }
      .audio{
        margin: auto;
        background: #F5F5F5;
        width: 673px;
        height: 111px;
        display: flex;
        align-items: center;
        .play{
          width: 54px;
          height: 54px;
          background: url('../../assets/play.png') no-repeat;
          background-size: cover;
          margin: 0 69px 0 53px;
        }
        .class-title{
          font-size: 36px;
          color: #333;
        }
      }
    }
    .des-detail{
      margin: 70px 40px;
      text-align: justify;
      font-size: 32px;
      color: #333;
      letter-spacing: 0.58px;
    }
    .img-detail{
      margin: auto;
      width: 580px;
      height: 383px;
    }
  }
</style>
