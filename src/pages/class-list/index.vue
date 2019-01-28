<template>
  <div class="list-wrap">
    <div class="item" @click="toPage('pages/class-item/main')">
      <img class="left" src="../../assets/lecturer1.png" alt="" />
      <div class="right">
        <div class="name">戴京焦／万亿基金管理人</div>
        <div class="title">这样买基金，就对了</div>
        <div class="tag">
          <span class="it-tag">基金投资</span>
          <span class="it-tag">实操手册</span>
          <span class="it-tag">硬核干货</span>
        </div>
        <div class="des">
          <div class="it-des"><span class="title-des">订阅</span>180人</div>
          <div class="it-des"><span class="title-des">课数</span>10课</div>
        </div>
      </div>
    </div>

      <div class="item">
        <img class="left" src="../../assets/lecturer2.png" alt="" />
        <div class="right">
          <div class="name">戴京焦／万亿基金管理人</div>
          <div class="title">这样买基金，就对了</div>
          <div class="tag">
            <span class="it-tag">基金投资</span>
            <span class="it-tag">实操手册</span>
            <span class="it-tag">硬核干货</span>
          </div>
          <div class="des">
            <div class="it-des"><span class="title-des">订阅</span>180人</div>
            <div class="it-des"><span class="title-des">课数</span>10课</div>
          </div>
        </div>
      </div>

      <div class="item">
        <img class="left" src="../../assets/lecturer1.png" alt="" />
        <div class="right">
          <div class="name">晓鸥姐姐／超人气股票讲师</div>
          <div class="title">股票热词，一听就懂</div>
          <div class="tag">
            <span class="it-tag">股票入门</span>
            <span class="it-tag">指标解读</span>
            <span class="it-tag">小白必备</span>
          </div>
          <div class="des">
            <div class="it-des"><span class="title-des">订阅</span>180人</div>
            <div class="it-des"><span class="title-des">课数</span>10课</div>
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
  .list-wrap{
    padding: 63px 42px;
    .item{
      margin-bottom: 88px;
      display: flex;
      .left{
        width: 205px;
        height: 250px;
        margin-right: 23px;
      }
      .right{
        text-align: left;
        .name{
          font-size: 30px;
          color: #737373;
          margin-bottom: 37px;
        }
        .title{
          font-size: 34px;
          color: #333333;
          margin-bottom: 27px;
        }
        .tag{
          display: flex;
          margin-bottom: 22px;
          .it-tag{
            text-align: center;
            width: 130px;
            height: 40px;
            line-height: 40px;
            background: #FCEEED;
            margin-right: 10px;

            font-size: 26px;
            color: #E35F5C;
          }
        }
        .des{
          display: flex;
          font-size: 26px;
          color: #333;
          .it-des{
            margin-right: 56px;
          }
          .title-des{
            color: #999;
          }
        }
      }
    }
  }
</style>
