<template>
  <div style="height:100%;">
    <div v-for="item in lists">
      <panel :list="item.list" :type="item.type"></panel>
    </div>
  </div>
</template>

<script>
  import { Panel, Group, Radio } from 'vux'
  export default {
    name: 'list',
    data () {
      return {
        lists: [{
          type: '1',
          list: [{
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题一',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/component/cell'
          }]
        }, {
          type: '2',
          list: [{
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题二',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/component/cell'
          }]
        }, {
          type: '2',
          list: [{
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题二',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/component/cell'
          }]
        }]
      }
    },
    components: {
      Panel,
      Group,
      Radio
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
</style>
