<template>
  <div class="profile">
    <div class="pro-header">
      <div class="header">
        <a href="javascript:;">
          <i class="iconfont icon-shouye"></i>
        </a>
        <a href="javascript:;" class="titleImg">
          <img src="./images/logo.png" alt="" class="logo">
        </a>
        <div class="icons">
          <a href="javascript:;" class="icon-item">
            <i class="iconfont icon-sousuo"></i>
          </a>
          <a href="javascript:;" class="icon-item">
            <i class="iconfont icon-gouwuche"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="pro-content">
      <div class="big-logo">
        <img src="./images/jingling1.png" alt="">
      </div>
     <div class="way-login">
       <div class="login">
         <div class="phone">
           <i class="iconfont icon-phone"></i>
           <span class="phone-text">手机号码登录</span>
         </div>
         <div class="email">
           <i class="iconfont icon-mail"></i>
           <span class="email-text">邮箱账号登录</span>
         </div>
         <div class="register">
           <span class="reg-text">手机快捷注册</span>
           <i class="iconfont icon-jiantouyou"></i>
         </div>
       </div>
       <div class="thirdWrap">
         <div class="itemWrap">
           <i class="iconfont icon-weixin"></i>
           <span>微信</span>
         </div>|
         <div class="itemWrap">
           <i class="iconfont icon-qq"></i>
           <span>QQ</span>
         </div>|
         <div class="itemWrap">
           <i class="iconfont icon-weibo"></i>
           <span>微博</span>
         </div>
       </div>
     </div>
  </div>
</div>
</template>
<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
html,body
  overflow hidden
  .profile
    width:  100%
    .pro-header
      width:  100%
      height:   100px
      background: #fafafa
      border:  1px solid  #ccc
      position: relative
      .header
        padding: 20px
        .iconfont
          font-size 38px
          color: #333
          margin-left 20px
        .titleImg
          display inline-block
          width:  150px
          height: 48px
          position: absolute
          top: 20px
          left: 290px
          .logo
            width:  150px
            height: 48px
            display inline-block

        .icons
          float: right
          .icon-item
            margin-right: 20px
            .iconfont
              font-size 45px
              color: #111


    .pro-content
      background: #F2F5F4
      .big-logo
        text-align center
        padding:  150px 0px
        >img
          width:  240px
          height: 100px
      .way-login
        height: 800px
        .login
          margin: auto
          width:  650px
          text-align center
          .phone
            background: #BF494D
            color: #fff
            border-radius 10px
            line-height 85px
            .iconfont
              font-size:  30px
            .phone-text
              font-size 34px
          .email
            border: 1px solid  #BF494D
            color: #BF494D
            border-radius 10px
            line-height 85px
            margin: 30px 0px
            .iconfont
              font-size:  30px
            .email-text
              font-size 34px
          .register
            .reg-text
              display inline-block
              font-size:  30px
            .iconfont
              font-size:  24px
              color: #bbb
        .thirdWrap
          display flex
          .itemWrap
            text-align: center
            .iconfont
              font-size 30px
            span
              font-size:  28px
</style>
