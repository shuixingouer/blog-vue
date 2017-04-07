<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-bottom="55px">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view class="router-view"></router-view>
      </transition>
      <tabbar class="vux-demo-tabbar" slot="bottom">
        <tabbar-item :link="{path:'/Main'}">
          <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon">&#xe637;</span>
          <span slot="label">文章</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/Me'}">
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import { XHeader, ViewBox, Tabbar, TabbarItem, TransferDom } from 'vux'
  export default {
    name: 'home',
    data () {
      return {
        direction: 'forward'
      }
    },
    directives: {
      TransferDom
    },
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    },
    created () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*滑屏*/
  .router-view {
    width: 100%;
    top: 0px;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 0px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
