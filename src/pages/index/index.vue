<template>
  <div class="container">
    <img class="banner" src="../../assets/banner1.png" alt="" />
    <div class="section-title">讲师简介</div>
    <img class="banner" src="../../assets/banner2.png" alt="" />
    <div class="section-title">课程介绍</div>
    <img class="banner" src="../../assets/banner3.png" alt="" />
    <div class="section-title">学员反馈</div>
    <div class="list">
      <div class="item">
        <div class="it-item">
          <img class="head" src="../../assets/head1.png" alt="" />
          <div class="name">向日葵</div>
        </div>
        <div class="it-item">
          <div class="desc">老师讲的太好了！形象生动，简明扼要。老师讲的太好了！形象生动，简明扼要。</div>
        </div>
      </div>

      <div class="item">
        <div class="it-item">
          <img class="head" src="../../assets/head2.png" alt="" />
          <div class="name">郁金香</div>
        </div>
        <div class="it-item">
          <div class="desc">老师讲的很好，声音很好听！老师讲的很好，声音很好听！老师讲的很好，声音很好听！</div>
        </div>
      </div>

      <div class="item">
        <div class="it-item">
          <img class="head" src="../../assets/head3.png" alt="" />
          <div class="name">爱芬</div>
        </div>
        <div class="it-item">
          <div class="desc">学习了好多，希望能在实际中用到学习了好多，希望能在实际中用到。</div>
        </div>
      </div>
    </div>
    <div class="fixed" @click="toPage('pages/exchange/main')">使用兑换码订阅</div>
  </div>
</template>

<script>
// 组件引用
import card from '@/components/card'

export default {
  data () {
    return {
    }
  },
  components: {
  },
  mounted() {
  },
  methods: {
    toPage(path) {
      this.navigatePageTo(this.router + path)
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  padding-bottom: 155px;
  .banner{
    width: 100%;
    height: 380px;
  }
  .section-title{
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: left;
    padding-left: 39px;

    font-size: 32px;
    font-weight: bold;
    color: #000;
  }
  .item{
    padding: 32px 39px;
    .it-item{
      display: flex;
      align-items: center;
      .head{
        display: block;
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }
      .name{
        font-size: 24px;
        color: #333;
      }
      .desc{
        font-size: 24px;
        color: #666;

        text-align: left;
        margin-left: 80px;
      }
    }
  }
  .fixed{
    position: fixed;
    bottom: 0;
    left: 0;

    background: #FF8300;
    width: 100%;
    height: 92px;
    line-height: 92px;

    font-size: 38px;
    color: #fff;
    text-align: center;
  }
}
</style>
