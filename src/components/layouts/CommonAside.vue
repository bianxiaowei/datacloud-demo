<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h3>通用后台管理系统</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.name" :key="item.name">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.lable}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren"  :index="item.name" :key="item.name">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.lable}}</span>
      </template>
      <el-menu-item-group v-for="(subItem) in item.children"  :key="subItem.name">
        <el-menu-item :index="subItem.name">{{subItem.lable}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>


<style lang="less" scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
    height: 100%;
    border: none;

    h3 {
      color: #fff;
      text-align: center;
      line-height: 60px;
      padding: 0;
      margin: 0;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        menudata:[
          {
            path:"/home",
            name:"home",
            lable:"首页",
            icon:"s-home",
            url:"home"
          },
          {
            path:"/mall",
            name:"mall",
            lable:"商品管理",
            icon:"video-play",
            url:"MallManage/MallManage"
          },
          {
            path:"/user",
            name:"user",
            lable:"用户管理",
            icon:"user",
            url:"UserManage/UserManage"
          },
          {
            path: '/other-manage',
            name: 'other-manage',
            lable:"其他",
            icon:"location",
            children:[
              {
                path:"/other-manage/other1",
                name:"other-manage-other1",
                lable:"其他1",
                icon:"user",
                url:"UserManage/UserManage"
              },
              {
                path:"/other-manage//other2",
                name:"other-manage-other2",
                lable:"其他2",
                icon:"user",
                url:"UserManage/UserManage"
              }
            ]
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
          name:item.name
        })

      }
    },
    computed:{
      noChildren(){
        return this.menudata.filter(item=>!item.children);
      },
      hasChildren(){
        return this.menudata.filter(item=>!!item.children);
      }
    }
  }
</script>