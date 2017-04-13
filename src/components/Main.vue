<template>
  <div>
    <tab :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item class="vux-center" :selected="selectedMenu === index" v-for="(item, index) in channelMenu" @click="selectedMenu = index" :key="index" :lists="listsDate">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in channelMenu" :key="index">
        <div class="tab-swiper vux-center" v-if="listsDate">
          <list></list>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { XHeader, ViewBox, Tabbar, TabbarItem, Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import List from '@/components/List'
  import { mapGetters } from 'vuex'
  export default {
    name: 'main',
    data () {
      return {
        channelMenu: ['全部', 'HTML', 'CSS', 'JavaScript', 'Node', 'JAVA'],
        selectedMenu: '2',
        index: 2,
        listsDate: []
      }
    },
    computed: {
      ...mapGetters({
        listsDate: 'getListsDate'
      })
    },
    created () {
      this.$store.dispatch('setListsDate', 2)
    },
    methods: {
      queryTrendData: function (index) {
        this.$store.dispatch('setListsDate', index)
      }
    },
    watch: {
      'index': 'queryTrendData'
    },
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      List
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
