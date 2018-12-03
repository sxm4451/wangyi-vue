<template>
  <div class="itemList" ref="scroll">
    <div class="name-wrapper" ref="scroll">
      <ul class="name-list">
        <li class="name-item " v-for="(name,index) in dataNav" :key="index"
            :class="{current: index === navIndex}" :click="clickItem(index)"
            >
          <a href="javascript:;" class="text">{{dataNav[navIndex].name}}</a>
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

      this.$store.dispatch('getNavData')
      new BScroll(this.$refs.scroll,{
        scrollY: 0,
        click:true
      })
    },
    methods:{
      clickItem(index){
        this.$store.dispatch('setNavIndex', index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.name-wrapper
  height:   100%
  width:  180px
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
        margin-top: 30px
</style>
