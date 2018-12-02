<template>
  <div class="classify">
    <!--头部-->
    <div class="classify-header">
      <div class="header">
        <div class="header_title_search">
          <form class="search_form" action="#">
            <i class="icon"></i>
            <input type="search" name="search" placeholder="搜索商品, 共19601款好物" class="search_input">
          </form>
        </div>
      </div>
    </div>
    <!--内容-->
    <div class="classify-content">
          <!--左边列表-->
          <div class="name-wrapper">
            <ul class="name-list">
              <li class="name-item current">
                <a href="javascript:;" class="text">推荐专区</a>
              </li>
              <li class="name-item">
              <a href="javascript:;" class="text ">夏季专区</a>
              </li>
            </ul>
          </div>
          <!--右边图片-->
          <div class="imgs-wrapper">
           <a href="javascript:;" class="banner">
             <img src="http://yanxuan.nosdn.127.net/135cfb8a563c983af4710a24f3b34f85.jpg" alt="">
           </a>
            <div  class="img-title">
              <span>—</span>
              <span>推荐专区</span>
              <span>分类</span>
              <span>—</span>
            </div>
            <div class="cateList">
              <ul class="img-list">
                <li class="img-item">
                  <a href="javascript:;" class="item">
                    <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                    <span class="i-text">真丝满件折</span>
                  </a>
                </li>
                <li class="img-item">
                  <a href="javascript:;" class="item">
                    <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                    <span class="i-text">真丝满件折真丝满</span>
                  </a>
                </li>
                <li class="img-item">
                  <a href="javascript:;" class="item">
                    <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                  </a>
                </li>
                <li class="img-item">
                  <a href="javascript:;" class="item">
                    <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                  </a>
                </li>
                <li class="img-item">
                  <a href="javascript:;" class="item">
                    <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                  </a>
                </li>
                <li class="img-item">
                  <a href="javascript:;" class="item">
                    <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    mounted(){
      this.$store.dispatch('getNavData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .classify
    width:  100%
    .classify-header
      width:  100%
      height: 100px
      border: 1px solid #ccc
      .header
        overflow hidden
        text-align center;
        padding 20px  40px
        .header_title_search
          width: 100%
          float right
          .search_form
            width: 100%
            display flex
            align-items center
            position: relative
            .search_input
              font-size:  30px
              width:  660px
              height: 60px
              color: #666
              background: #EDEDED
              border-radius 10px
              text-align center
            .icon
              background-image url("./images/search.png")
              width:  28px
              height: 28px
              position: absolute
              top:  16px
              left: 108px

    .classify-content
      width   100%
      display flex
      .name-wrapper
        height:   100%
        width:  180px
        border-right:  4px solid #eee
        .name-list
          padding-top   20px
          .name-item
            width:  100%
            height: 65px
            text-align center
            line-height 65px
            &.current
              border-left 5px solid #BE4448
              .text
                font-size:  36px
                color: #BE4448
                font-weight bold
            .text
              font-size:  34px
              color: #333
            +.name-item
              margin-top: 20px
      .imgs-wrapper
        width:  80%
        text-align center
        .banner
          display inline-block
          width:  500px
          margin: 35px  0px
          >img
            width:  500px
        .img-title
          font-size:  30px
          color: #333
        .cateList

          .img-list
            display flex
            flex-wrap:  wrap
          .img-item
            width:  144px
            flex: 1
            text-align center
            .item
              display inline-block
              width:  144px
              height: 210px
              >img
                width:  144px
              .i-text
                display: block
                font-size:  26px
                color: #333
                height: 30px
                line-height 28px
                text-align center
</style>
