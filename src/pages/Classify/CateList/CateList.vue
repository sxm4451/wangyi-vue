<template>
    <div class="imgs-wrapper" ref="scroll">
      <a href="javascript:;" class="banner">
        <img  :src="dataNav[navIndex].wapBannerUrl" alt="">
      </a>
      <div  class="img-title">
        <span>—</span>
        <span>{{dataNav[navIndex].name}}</span>
        <span>分类</span>
        <span>—</span>
      </div>
      <div class="cateList">
        <ul class="img-list">
          <li class="img-item"  v-for="(item) in  dataNav[navIndex].subCateList" :key="item.id">
            <a href="javascript:;" class="item">
              <img :src="item.wapBannerUrl" alt="">
              <span class="i-text">{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['dataNav','navIndex'])

    },
    mounted(){

      this.$store.dispatch('getNavData',()=>{
          this.$nextTick(()=>{
            this._initScroll()
          })
      })
    },
    methods:{
     _initScroll(){
      new BScroll(this.$refs.scroll,{
        scrollY:0,
        click:true
      })
     }
    },
    watch:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
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
