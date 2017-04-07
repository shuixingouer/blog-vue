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

body {
  background-color: #f8f8f8;
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
