<template>
  <div>
    <!--头像-->
    <blur :blur-amount=40 :url="url">
      <p class="center"><img :src="url"><br/>水星</p>
    </blur>
    <!--选项-->
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <br/>
          发表文章
        </div>
        <div class="vux-1px-r">
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <br/>
          草稿箱
        </div>
        <div class="vux-1px-r">
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <br/>
          已发表
        </div>
        <div>
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <badge text="8"></badge>
          <br/>
          评论
        </div>
      </div>
    </card>
    <!--其他信息-->
    <group>
      <cell title="完善信息" :link="{path:'/demo'}"><span class="demo-icon-22" slot="icon">&#xe633;</span></cell>
      <cell title="联系我们" :link="{path:'/demo'}"><span class="demo-icon-22" slot="icon">&#xe633;</span></cell>
    </group>
  </div>
</template>

<script>
  import { Blur, Card, Badge, Cell, Group } from 'vux'
  export default {
    name: 'me',
    data () {
      return {
        url: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      }
    },
    components: {
      Blur,
      Card,
      Badge,
      Cell,
      Group
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
