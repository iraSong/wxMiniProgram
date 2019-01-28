<template>
  <div class="item-wrap">
    <div class="banner-wrap">
      <img class="img-banner" src="../../assets/banner2.png" alt="" />
    </div>
    <div class="item">
      <div class="head-item">
        <div class="status">已完结</div>
        <div class="continue">点击回到上次学习</div>
        <div class="sort">倒序</div>
      </div>
      <div class="list-item">
        <div class="it" @click="toPage('pages/class-detail/main')">
          <div class="it-left">
            <div class="it-title">1.什么是“换手率”？</div>
            <div class="it-time">12-20 09:00</div>
          </div>
          <div class="it-right"></div>
        </div>
        <div class="it">
          <div class="it-left">
            <div class="it-title">1.什么是“换手率”？</div>
            <div class="it-time">12-20 09:00</div>
          </div>
          <div class="it-right"></div>
        </div>
        <div class="it">
          <div class="it-left">
            <div class="it-title">1.什么是“换手率”？</div>
            <div class="it-time">12-20 09:00</div>
          </div>
          <div class="it-right"></div>

          <div class="label">上次学习</div>
        </div>
        <div class="it">
          <div class="it-left">
            <div class="it-title">1.什么是“换手率”？</div>
            <div class="it-time">12-20 09:00</div>
          </div>
          <div class="it-right"></div>
        </div>
        <div class="it">
          <div class="it-left">
            <div class="it-title">1.什么是“换手率”？</div>
            <div class="it-time">12-20 09:00</div>
          </div>
          <div class="it-right"></div>
        </div>
        <div class="it">
          <div class="it-left">
            <div class="it-title">1.什么是“换手率”？</div>
            <div class="it-time">12-20 09:00</div>
          </div>
          <div class="it-right"></div>
        </div>
      </div>
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
    toPage(path) {
      this.navigatePageTo(this.router + path)
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
  .item-wrap{
    .img-banner{
      width: 100%;
      height: 417px;
    }
    .item{
      .head-item{
        margin: 0 39px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 107px;

        font-size: 32px;
        color: #666;

        border-bottom: 1PX solid #DDDDDD;
        .status{
          color: #000;
        }
        .continue{
          text-align: center;
          border: 0;
          outline: none;
          width: 210px;
          height: 38px;
          line-height: 38px;
          background: #F5F5F5;
          border-radius: 100px;
          font-size: 22px;
          color: #999999;
        }

        .sort{
          text-align: center;
          width: 120px;
          height: 48px;
          line-height: 48px;
          border: 1px solid #FF8300;
          font-size: 24px;
          color: #FF8300;
        }
      }
      .list-item{
        .it{
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 40px;
          border-bottom: 1PX solid #DDDDDD;
          height: 135px;
          .it-left{
            .it-title{
              font-size: 32px;
              color: #666;
              margin-bottom: 10px;
            }
            .it-time{
              font-size: 28px;
              color: #999;
            }
          }
          .it-right{
            width: 44px;
            height: 44px;
            background: url('../../assets/play.png') no-repeat;
            background-size: cover;
          }
          .label{
            text-align: center;
            position: absolute;
            right: 0;
            top: 112px;
            width: 157px;
            height: 48px;
            line-height: 48px;
            font-size: 24px;
            color: #FFFFFF;
            background: #FF8300;
            border-radius: 100px 0 0 100px;
          }
        }
      }
    }
  }
</style>
