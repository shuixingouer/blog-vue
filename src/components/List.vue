<template>
  <div style="height:100%;" class="listMain">
    <div v-for="item in lists" class="weuiPanelFather">
      <panel :list="item.list" :type="item.type"></panel>
    </div>
  </div>
</template>

<script>
  import Panel from './MyPanel'
  export default {
    name: 'list',
    data () {
      return {
        lists: [{
          type: '1',
          list: [{
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXX一',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/component/cell',
            dateNow: new Date(),
            seeNum: '11',
            userIconSrc: '../../static/userLogo/logo.jpg',
            userSeeSrc: '../../static/icon/eye.png'
          }]
        }, {
          type: '1',
          list: [{
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXX一',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/component/cell',
            dateNow: new Date(),
            seeNum: '11',
            userIconSrc: '../../static/userLogo/logo.jpg',
            userSeeSrc: '../../static/icon/eye.png'
          }]
        }, {
          type: '1',
          list: [{
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXX一',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/component/cell',
            dateNow: new Date(),
            seeNum: '11',
            userIconSrc: '../../static/userLogo/logo.jpg',
            userSeeSrc: '../../static/icon/eye.png'
          }]
        }]
      }
    },
    components: {
      Panel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .vux-slider{
    overflow:visible;
  }
  .vux-slider > .vux-swiper{
    overflow:visible;
  }
.weuiPanelFather{
  margin-top:5px;
}
</style>
