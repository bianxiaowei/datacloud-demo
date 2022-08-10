<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
/* .el-header{
    //padding-left: 0px;
} */
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color: #fff;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: #fff;
}
.el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: yellowgreen;
}
.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover{
    color: yellowgreen;
}

</style>
