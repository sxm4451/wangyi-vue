<template>
  <div class="topic">
    <!--头部-->
    <div class="topic-header">
      <div class="header-top">
            <a href="javascript:;" class="icon-home">
              <i class="iconfont icon-shouye"></i>
            </a>
            <div class="header-title">
              <a href="javascript:;"  class="item active">发现</a>
              <a href="javascript:;"  class="item">甄选家</a>
            </div>
            <div class="icons">
              <a href="javascript:;" class="icon-item">
                <i class="iconfont icon-sousuo"></i>
              </a>
              <a href="javascript:;" class="icon-item">
                <i class="iconfont icon-gouwuche"></i>
              </a>
            </div>
        </div>
      <div class="header-bottom">
        <ul class="header-list">
          <li class="header-nav"><a href="javascript:;" class=" nav-item active">推荐</a></li>
          <li class="header-nav"><a href="javascript:;" class=" nav-item">达人</a></li>
          <li class="header-nav"><a href="javascript:;" class=" nav-item">上新</a></li>
          <li class="header-nav"><a href="javascript:;" class=" nav-item">菜单</a></li>
          <li class="header-nav"><a href="javascript:;" class=" nav-item">HOME</a></li>

        </ul>
      </div>
    </div>
    <!--内容-->
    <div class="topic-content">
      <!--图片-->
      <div class="nav-img">
        <img src="./images/topic2.jpg" alt="">
      </div>
      <!--line-->
      <div class="line"></div>
      <!--选妹-->
      <div class="recommend">
        <a href="javascript:;" class="rem-info">
          <div class="u-name">
            <span class="name-img">
              <img src="./images/topic1.png" alt="" class="topImg">
            </span>
            <span class="name-text">选妹</span>
          </div>
          <div class="u-title">想让十二月对你好一点，都需要准备些什么？</div>
          <div class="u-img">
            <img src="./images/topic2.jpg" alt="">
          </div>
          <div class="u-rcount">
            <i class="iconfont icon-yanjing"></i>
            <span class="rco-text">4814人看过</span>
          </div>
        </a>
      </div>
      <!--line-->
      <div class="line"></div>
      <!--推荐商品信息-->
        <div class="topic-rem-shop">
          <a href="javascript:;" class="shop-info">
            <div class="shop-left">
              <div class="u-name">
            <span class="name-img">
              <img src="./images/topic1.png" alt="">
            </span>
                <span class="name-text">丁磊</span>
              </div>
              <h2 class="shop-title">终于找到一款颜值在线的保温杯</h2>
              <div class="shop-dir">三石福利价惊喜返场，低至40%Off起</div>
              <div class="u-rcount">
                <i class="iconfont icon-yanjing"></i>
                <span class="rco-text">4814人看过</span>
              </div>
            </div>
            <div class="shop-right">
              <img src="./images/yizi.png" alt="">
            </div>
          </a>
        </div>
      <!--line-->
      <div class="line"></div>
      <!---->
      <!---->
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.topic
  width:  100%
  .topic-header
    position fixed
    z-index 100
    left 0
    top 0
    width:  100%
    height:   190px
    background: #F9F9F9
    .header-top
      width:  100%
      height: 90px
      line-height 90px
      border:  1px solid  #ccc
      position: relative
      .icon-home
        margin-left:  20px
        .iconfont
          font-size:  40px
          color: #333
      .header-title
        display inline-block
        position: absolute
        top:  0px
        left: 275px
        .item
          font-size:  30px
          color: #000
          margin: 0 10px
          &.active
            font-size 38px
            color: #BF494D
            font-weight bold
      .icons
        float: right
        .icon-item
          margin-right: 20px
          .iconfont
            font-size 45px
            color: #111


    .header-bottom
      width:  100%
      height: 70px
      border:  1px solid  #ccc
      .header-list
        width:  100%
        display flex
        justify-content center
        align-items center
        .header-nav
          flex: 1
          margin: 0px 20px
          .nav-item
            font-size:  30px
            display inline-block
            height: 50px
            color: gray
            &.active
              color: #BF494D
              border-bottom: 5px solid #BF494D
              z-index 10

  .topic-content
    width:  100%
    margin-top:  180px
    .nav-img
      width:  100%
      display flex
      justify-content center
      align-items center
      img
        margin: 40px 0px
    .line
      width:  100%
      height: 20px
      background: #eee
    .recommend
      width:  100%
      display flex
      justify-content center
      align-items center
      .rem-info
        display inline-block
        margin: 30px
        .u-name
          width:  100%
          font-size:  28px
          line-height:  58px
          display flex
          margin-bottom 20px
          .name-img
            display inline-block
            width:  58px
            height:   58px
            img
              border: 1px solid #eeeeee
              border-radius 50%
          .name-text
            display inline-block
            color: #333
            margin-left 20px
            vertical-align middle
        .u-title
          line-height 50px
          font-size:  36px
          color: #333
        .u-img
          margin: 10px
        .u-rcount
          width:  100%
          .iconfont
            font-size:  32px
            color: #666
          .rco-text
            font-size 24px
            color: #666



    .topic-rem-shop
      width:  100%
      margin: 30px
    .shop-info
      display inline-block
      display flex
      justify-content center
      align-items center
      .shop-left
        width:  55%
        margin-left:  -55px
        .u-name
          width:  100%
          font-size:  28px
          line-height:  58px
          display flex
          margin-bottom 20px
          .name-img
            display inline-block
            width:  58px
            height:   58px
            img
              border: 1px solid #eeeeee
              border-radius 50%
          .name-text
            display inline-block
            color: #333
            margin-left 20px
            vertical-align middle
        .shop-title
          color: #333
          font-size:  38px
          line-height:  50px
        .shop-dir
          color: #666
          font-size:  30px
          line-height 50px
          white-space nowrap
          overflow hidden
          text-overflow: ellipsis
        .u-rcount
          width:  100%
          .iconfont
            font-size:  32px
            color: #666
          .rco-text
            font-size 24px
            color: #666
      .shop-right
        img
          width:  270px
          height: 270px
          border: 2px solid #eeeeee
          border-radius 10px


</style>
