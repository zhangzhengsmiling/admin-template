<template>
<el-container class="container">
  <el-header class="head"><Header></Header></el-header>
  <el-container>
    <el-aside class="side"><Aside></Aside></el-aside>
    <el-main class="body">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
import Header from './components/Header'
import Aside from './components/Aside'
export default {
  name: 'App',
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  // .el-aside {
  //   background-color: #D3DCE6;
  //   color: #333;
  //   text-align: center;
  //   line-height: 200px;
  // }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .container {
    .head {
      height: 300px;
    }
    .main {}
    .side {
      display: inline-block;
      // height: 800px;
      height: 100%;
      width: 200px;
      background: red;
      // height: 100%;
      // background: red;
      // background-color: red;
      // color: #333;
      text-align: center;
      line-height: 200px;
    }
  }
</style>
