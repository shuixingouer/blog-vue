<template>
  <div class="detailMiddle">
    <div class="title">
      <h3>{{item.title}}</h3>
      <p>
        <span>{{item.author}}</span>
        <span>{{item.time}}</span>
      </p>
    </div>
    <div class="articleBody">{{item.body}}</div>
    <div v-if="item.article" :class="item.article.articleClassName">
    <p v-if="item.article.start" v-for="startList in item.article.start">
      <p v-if="startList.imagesUrl"><img :src="'../../static/date/images/'+item.id+'/'+startList.imagesUrl" /></p>
      <p v-if="startList.desc">{{startList.desc}}</p>
    </p>
    <p v-if="item.article.articleBody" v-for="articleBodyList in item.article.articleBody">
      <p v-if="articleBodyList.desc">{{articleBodyList.desc}}</p>
    <pre v-if="articleBodyList.code">{{articleBodyList.code}}</pre>
    <p v-if="articleBodyList.imagesUrl"><img :src="'../../static/date/images/'+item.id+'/articleBodyList.imagesUrl" :style="{'width':articleBodyList.imagesWidth}"/></p>
      <p v-if="articleBodyList.imagesDesc">{{articleBodyList.imagesDesc}}</p>
    </p>
    <p v-if="item.article.end" v-for="endList in item.article.end">
      <p v-if="endList.imagesUrl"><img :src="'../../static/date/images/'+item.id/endList.imagesUrl" :style="{'width':endList.imagesWidth}"/></p>
      <p v-if="endList.desc">{{endList.desc}}</p>
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
.detailMiddle{
  padding:0 0.416rem;
.title{
    margin-bottom:0.416rem;
    h3{
      font-size:0.7rem;
      color:#333;
      line-height:1rem;
    }
    span{
      display:inline-block;
      margin-right:0.2rem;
      font-size:0.333rem;
      color:#9e9e9e;
    }
  }
  article{
    font-size:0.416rem;
    color:#666;
    line-height:0.694rem;
    img{
      width:100%;
      margin:0.4rem auto 0 auto;
    }
    p{
      margin-top:0.4rem;
    }
    //items1æ•°å­—æŽ’åºï¼Œè‰²è°ƒé»‘è‰²
  .items_1{
      h4 {
        margin-top: 0.28rem;
        font-size: 0.444rem;
        color: #555;
        line-height: 0.6rem;
        padding: 0.4rem 0;
        border-bottom: 1px solid #757575;
        span {
          display: inline-block;
          margin-right: 0.138rem;
          padding: 0 0.138rem;
          color: #fff;
          background: #555;
        }
      }
    }
    //items_2æ•°å­—æŽ’åºï¼Œè‰²è°ƒæ©™è‰²
  .items_2{
      h4 {
        font-size: 0.444rem;
        color: #ff6600;
        line-height: 0.6rem;
        margin:0.4rem 0;
        border-bottom: 1px solid #ff6600;
        font-weight:bold;
        overflow:visible;
        span{
          display:inline-block;
          line-height: 0.6rem;
          color:#fff;
          margin-right:0.2rem;
          padding:0.1rem 0.2rem;
          background:#ff6600;
        }
      }
    .red{
        color:#ff6600;
        font-weight:bold;
      }
    .code{
        padding:0.4rem;
        background:#f0f0f0;
      }
    }
  }
  //items_3æ•°å­—æŽ’åºï¼Œè‰²è°ƒå¢¨è“è‰²
.items_3{
    h4 {
      font-size: 0.444rem;
      color: #2e97a7;
      line-height: 0.6rem;
      margin:1rem 0 0.4rem;
      span{
        display:inline-block;
        margin-right:0.2rem;
        padding:0 0.14rem;
        font-size: 0.25rem;
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
        font-size:0.24rem;
        height:0.5rem;
        line-height:0.5rem;
        padding:0 0.15rem;
        margin-right:0.1rem;
      }
    }
  }
  //items_4ç”¨äºŽå•ç‹¬çš„cssæˆ–jså°çŸ¥è¯†ç‚¹çš„è¯¦è§£çš„æŽ’åºï¼Œæ²¡æœ‰æ•°å­—æŽ’åºï¼Œè‰²è°ƒé»‘è‰²
.items_4{
    h4 {
      display:block;
      margin:1rem 0 0.4rem;
      font-size:0.416rem;
      color:#666;
      text-align:center;
      span{
        display:none;
      }
      b{
        position:relative;
        display:inline-block;
        line-height:1rem;
        padding:0 0.5rem;
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
  //items_5ç”¨äºŽæ®µå­
.items_5{
    h4 {
      display:block;
      margin:2rem 0 0.4rem;
      font-size:0.4rem;
      line-height:0.63rem;
      color:#666;
      text-align:center;
      span{
      &:after{
          content:".";
          margin-right:0.1rem;
        }
      }
      b{
        font-weight:normal;
      }
    }
  }
  //items_6ç”¨äºŽä¸‡åœ£èŠ‚
.items_6{
    h4 {
      display:block;
      margin:1rem 0 0.5rem;
      font-size:0.5rem;
      line-height:1rem;
      color:#000;
    &:before{
        display:block;
        float:left;
        content:"";
        background:url(../../static/date/images/HalloweenTitle.jpg) no-repeat;
        background-size:100%;
        width:1rem;
        height:1rem;
        margin:0 0.2rem 0;
      }
      span{
        padding:0 0 0 0.2rem;
        border-left:2px solid #000;
      &:after{
          content:".";
          margin:0 0.1rem;
        }
      }
      b{
        font-weight:normal;
      }
    }
  }
}
</style>
