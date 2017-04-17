<template>
  <div class="detailMiddle">
    <div class="title">
      <h3>{{item.title}}</h3>
      <p>
        <span>{{item.author}}</span>
        <span>{{item.time}}</span>
      </p>
    </div>
    <div class="{{item.articleClassName}}">
      <p>
        <img src="{{item.start.imagesUrl}}">
        {{item.start.desc}}
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'detail',
    data () {
      return {
      }
    },
    mounted () {
      this.$store.dispatch('setDetailDate', this.$route.params.id)
    },
    computed: {
      ...mapGetters({
        item: 'getDetailDate'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*头像*/
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
  /*选项*/
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
  /*其他*/
  .vux-label{
    font-size:12px;
  }
</style>
