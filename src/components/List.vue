<template>
  <div style="height:100%;">
    <div v-for="item in listsData" class="weuiPanelFather" :details="detailDate">
      <panel :list="item.list" :type="item.type"></panel>
    </div>
  </div>
</template>

<script>
  import Panel from './MyPanel'
  import { mapGetters } from 'vuex'

export default {
    name: 'list',
    props: ['listId'],
    data () {
      return {
        listsData: [],
        detailsData: [],
        url: ''
      }
    },
    computed: {
      ...mapGetters({
        detailDate: 'getDetailDate'
      })
    },
    created () {
      console.log(this.listId)
      this.getLists(this.listId)
      this.getDetails()
    },
    methods: {
      getLists: function (id) {
        this.$http.post('../../static/date/channel/' + id + '.json').then((response) => {
          this.listsData = response.body.data.lists
          // console.log(this.listsData)
        })
      },
      getDetails: function () {
        this.$http.post('../../static/date/detail/20170110.json').then((response) => {
          this.detailsData = response.body.data
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
