<template>
  <div style="height:100%;">
    <div v-for="item in lists" class="weuiPanelFather" :details="detailDate">
      <panel :list="item.list" :type="item.type"></panel>
    </div>
  </div>
</template>

<script>
  import Panel from './MyPanel'
  import { mapGetters } from 'vuex'

export default {
    name: 'list',
    data () {
      return {
        listsDate: [],
        detailsDate: [],
        url: ''
      }
    },
    props: ['lists'],
    computed: {
      ...mapGetters({
        detailDate: 'getDetailDate'
      })
    },
    created () {
      this.getDetails()
    },
    methods: {
      getDetails: function () {
        this.$http.post('../../static/date/detail/20170110.json').then((response) => {
          this.detailsDate = response.body.data
        })
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
