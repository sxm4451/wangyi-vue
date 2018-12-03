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
      <ItemList></ItemList>
      <!--分线-->
      <span class="line"></span>
          <!--右边图片-->
      <CateList></CateList>
        </div>
      </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import ItemList from './ItemList/ItemList.vue'
  import CateList from './CateList/CateList.vue'
  export default {


    components:{
      ItemList,
      CateList
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
html,body
  overflow-x: hidden
  overflow-y: hidden
  .classify
    width:  100%
    .classify-header
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height: 100px
      opacity 1
      .header
        border:  1px solid  #ccc
        background: #fff
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
      width:  100%
      margin-top:  100px
      display flex
      .line
        display line-break
        width:  5px
        height: 2000px
        background: #eee
        margin-left:  -10px
</style>
