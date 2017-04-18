<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '../static/bootstrap/css/bootstrap.min.css';

body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
  #app{
    height:100%;
  }
</style>
