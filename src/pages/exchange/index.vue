<template>
  <div class="exchange-warp">
    <form>
      <input type="text" placeholder="请输入兑换手机号" />
      <input type="text" placeholder="请输入兑换码" />
      <input @click="toPage('pages/class-list/main')" class="submit" type="submit" value="确认兑换" />
    </form>
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
.exchange-warp {
  text-align: left;
  padding: 60px 97px;
  form{
    text-align: center;
    input{
      text-align: center;
      border: none;
      outline: none;
      width: 438px;
      height: 89px;
      border: 1PX solid #979797;
      margin-bottom: 66px;
      margin: 96px auto;
      font-size: 30px;
      &.submit{
        border: none;
        background: #FF8300;
        border-radius: 8px;
        font-size: 36px;
        color: #fff;

        width: 500px;
        height: 80px;
      }
    }
  }
}
</style>
