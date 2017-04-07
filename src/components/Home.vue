<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-bottom="55px">
      <router-view></router-view>
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
  import { XHeader, ViewBox, Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-icon-22 {
    font-family: 'vux-demo';
    font-size: 22px;
    color: #888;
  }
  .weui-tabbar.vux-demo-tabbar {
    /** backdrop-filter: blur(10px);
    background-color: none;
    background: rgba(247, 247, 250, 0.5);**/
  }
  .vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
    color: #F70968;
  }
  .vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
    color: rgb(53, 73, 94);
  }
  .demo-icon-22:before {
    content: attr(icon);
  }
</style>
