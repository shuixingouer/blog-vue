<template>
  <div>
  <div class="detailMiddle">
    <div class="title">
      <h3>{{item.title}}</h3>
      <p>
        <span>{{item.author}}</span>
        <span>{{item.time}}</span>
      </p>
    </div>
    <article>
    <div class="articleBody" v-html="item.body"></div>
      <div v-if="item.article" :class="item.article.articleClassName">
        <div v-if="item.article.start" v-for="startList in item.article.start">
          <p v-if="startList.imagesUrl"><img :src="'../../static/date/images/'+item.id+'/'+startList.imagesUrl" :style="{'width':startList.imagesWidth}" /></p>
          <p v-if="startList.desc" class="ta_c" v-html="startList.desc"></p>
        </div>
        <div v-if="item.article.articleBody" v-for="articleBodyList in item.article.articleBody">
          <h4 v-if="articleBodyList.num || articleBodyList.title"><span v-if="articleBodyList.num">{{articleBodyList.num}}</span><b v-if="articleBodyList.title">{{articleBodyList.title}}</b></h4>
          <p v-if="articleBodyList.desc" v-html="articleBodyList.desc"></p>
          <pre v-if="articleBodyList.code" v-html="articleBodyList.code"></pre>
          <p v-if="articleBodyList.imagesUrl"><img :src="'../../static/date/images/'+item.id+'/'+articleBodyList.imagesUrl" :style="{'width':articleBodyList.imagesWidth}"/></p>
          <p v-if="articleBodyList.imagesDesc" v-html="articleBodyList.imagesDesc"></p>
        </div>
        <div v-if="item.article.end" v-for="endList in item.article.end">
          <p v-if="endList.imagesUrl"><img :src="'../../static/date/images/'+item.id+'/'+endList.imagesUrl" :style="{'width':endList.imagesWidth}"/></p>
          <p v-if="endList.desc" v-html="endList.desc"></p>
        </div>
      </div>
    </article>
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
<style lang="less">
.detailMiddle{
  padding:0 20px;
  background:#fff;
.title{
    margin-bottom:30px;
    overflow: hidden;
    h3{
      font-size:30px;
      color:#333;
      line-height:36px;
    }
    span{
      display:inline-block;
      margin-right:10px;
      font-size:12px;
      color:#9e9e9e;
    }
  }
  article{
    font-size:18px;
    color:#666;
    line-height:24px;
    img{
      width:100%;
      margin:10px auto 0 auto;
    }
    p{
      margin-top:20px;

    }
    .ta_c{
       text-align:center;
     }
  .items_1{
      h4 {
        margin-top: 15px;
        font-size: 24px;
        color: #555;
        line-height: 30px;
        padding: 16px 0;
        border-bottom: 1px solid #757575;
        span {
          display: inline-block;
          margin-right: 10px;
          padding: 0 10px;
          color: #fff;
          background: #555;
        }
      }
    }
  .items_2{
      h4 {
        font-size: 18px;
        color: #ff6600;
        line-height: 30px;
        margin:16px 0;
        border-bottom: 1px solid #ff6600;
        font-weight:bold;
        overflow:visible;
        span{
          display:inline-block;
          line-height: 30px;
          color:#fff;
          margin-right:10px;
          padding:5px 10px;
          background:#ff6600;
        }
      }
    .red{
        color:#ff6600;
        font-weight:bold;
      }
    .code{
        padding:18px;
        background:#f0f0f0;
      }
    }
  }
.items_3{
    h4 {
      font-size: 24px;
      color: #2e97a7;
      line-height: 30px;
      margin:72px 0 18px;
      span{
        display:inline-block;
        margin-right:10px;
        padding:0 10px;
        font-size: 24px;
        border:0.1rem solid #fff;
        box-shadow:0 0 1px #2e97a7;
        background:#2e97a7;
        color:#fff;
      }
    }
    p{
      span{
        display:inline-block;
        border-radius:50%;
        border:1px solid #2e97a7;
        color:#2e97a7;
        font-size:14px;
        height:28px;
        line-height:28px;
        padding:0 10px;
        margin-right:8px;
      }
    }
  }
.items_4{
    h4 {
      display:block;
      margin:72px 0 18px;
      font-size:24px;
      color:#666;
      text-align:center;
      span{
        display:none;
      }
      b{
        position:relative;
        display:inline-block;
        line-height:60px;
        padding:0 36px;
        border:2px solid #666;
      &:after{
          content:"";
          border:1px dashed #666;
          position:absolute;
          top:5%;
          left:2%;
          bottom:5%;
          right:2%;
        }
      }
    }
  }
.items_5{
    h4 {
      display:block;
      margin:140px 0 30px;
      font-size:18px;
      line-height:36px;
      color:#666;
      text-align:center;
      span{
      &:after{
          content:".";
          margin-right:8px;
        }
      }
      b{
        font-weight:normal;
      }
    }
  }
.items_6{
    h4 {
      display:block;
      margin:72px 0 36px;
      font-size:16px;
      line-height:36px;
      color:#000;
    &:before{
        display:block;
        float:left;
        content:"";
        background:url(../../static/date/images/HalloweenTitle.jpg) no-repeat;
        background-size:100%;
        width:36px;
        height:36px;
        margin:0 15px 0;
      }
      span{
        padding:0 0 0 14px;
        border-left:2px solid #000;
      &:after{
          content:".";
          margin:0 8px;
        }
      }
      b{
        font-weight:normal;
      }
    }
  }
}
</style>
