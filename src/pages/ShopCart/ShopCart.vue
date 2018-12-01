<template>
  <div class="shopCart">
    <!--头部-->
    <div class="shop-cart-header">
      <div class="sc-header">
        <span>购物车</span>
        <a href="javascript:;" class="securities">
          <span>领劵</span>
        </a>
      </div>
    </div>
    <!--内容-->
    <div class="shop-cart-content">
      <!--售后-->
      <div class="sales" >
        <div class="explain">
          <a href="javascript:;" class="expItem">
            <i class="iconfont icon-Shape" ></i>
            <span class="dealer-text">30天无忧退货</span>
          </a>
          <a href="javascript:;" class="expItem">
            <i class="iconfont icon-Shape" ></i>
            <span class="dealer-text">48小时快速退款
</span>
          </a>
          <a href="javascript:;" class="expItem">
            <i class="iconfont icon-Shape" ></i>
            <span class="dealer-text">满88元免邮费
</span>
          </a>
        </div>
      </div>
      <!--购物车图片-->
      <div class="shop-cart-img">
        <div class="shopCartImg">
          <div class="s-img-text">
            <img src="./images/shopcart.png" alt="">
            <span class="shop-text">去添加点什么吧</span>
          </div>
          <button class="shop-cart-btn">登录</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shopCart
    width: 100%
    height: 100%
    background: #F4F4F4
    .shop-cart-header
      width:  100%
      bottom-border-1px(#e6e6e6)
      .sc-header
        width:  100%
        height: 90px
        line-height 80px
        /*border: 2px solid gray*/
        position relative
        background: #fff
        span
          display inline-block
          width 100%
          text-align center
          font-size: 36px
        .securities
          display inline-block
          position: absolute
          top:  0px
          right 60px
          span
            font-size 28px
            color: #BF494D

    .shop-cart-content
      width:  100%
      .sales
        width:  100%
        height:   60px
        text-align: center
        .explain
          width:  100%
          .expItem
            font-size:  24px
            display inline-block
            color: #333
            margin: 0 24px
            i
              font-size:  26px


      .shop-cart-img
        width:  100%
        .shopCartImg
          padding   380px 0px
          width 100%
          height:   100%
          margin  auto
          text-align center
        .s-img-text
          position: relative
          img
            display block
            width 248px
            height 248px
            margin  auto
          .shop-text
            font-size:  28px
            color: gray
            position: absolute
            top:  235px
            left: 275px
        .shop-cart-btn
          width:  470px
          height: 90px
          background: #B4282D
          color: #fff
          font-size:  30px
          margin-top: 60px


</style>
