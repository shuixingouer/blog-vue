<template>
  <div style="height:100%;">
    <div class="weuiPanelFather">
        <panel :type="item.type" :list="item.list" :id="item.id"></panel>
    </div>
  </div>
</template>

<script>
  import Panel from './MyPanel'

export default {
    name: 'list',
    props: {
      item: {
        type: String
      }
    },
    data () {
      return {
      }
    },
    created () {
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
    .weuiPanelFatherLink{
        display:block;
    }
</style>
