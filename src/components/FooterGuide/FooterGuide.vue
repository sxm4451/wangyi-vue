<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/classify'}" @click="goto('/classify')">
    <span class="item_icon">
      <i class="iconfont icon-fenlei"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/topic'}" @click="goto('/topic')">
    <span class="item_icon">
      <i class="iconfont icon-shiwu"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/shopcart'}" @click="goto('/shopcart')">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
    <span class="item_icon">
      <i class="iconfont icon-geren1"></i>
    </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        // 编程式路由导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    border:  1px solid  #ccc
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #666
      &.on
        color #CB6B6F
      span
        font-size 24px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 40px
</style>
