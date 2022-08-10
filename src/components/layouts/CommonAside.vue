<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical" background-color="#2e3133" text-color="#fff" active-text-color="#ffd04b"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h3>{{isCollapse?"":"通用后台管理系统"}}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.name" :key="item.name">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren"  :index="item.name" :key="item.name">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem) in item.children"  :key="subItem.name">
        <el-menu-item  @click="clickMenu(subItem)" :index="subItem.name">{{subItem.label}}</el-menu-item>
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
        menudata:[
          {
            path:"/home",
            name:"home",
            label:"首页",
            icon:"s-home",
            url:"home"
          },
          {
            path:"/mall",
            name:"mall",
            label:"商品管理",
            icon:"video-play",
            url:"MallManage/MallManage"
          },
          {
            path:"/user",
            name:"user",
            label:"用户管理",
            icon:"user",
            url:"UserManage/UserManage"
          },
          {
            path: '/other-manage',
            name: 'other-manage',
            label:"其他",
            icon:"location",
            children:[
              {
                path:"/other-manage/other1",
                name:"other-manage-other1",
                label:"其他1",
                icon:"user",
                url:"Other-manage/Other1"
              },
              {
                path:"/other-manage/other2",
                name:"other-manage-other2",
                label:"其他2",
                icon:"user",
                url:"Other-manage/Other2"
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
        this.$store.commit('selectMenu',item);
      }
    },
    computed:{
      noChildren(){
        return this.menudata.filter(item=>!item.children);
      },
      hasChildren(){
        return this.menudata.filter(item=>!!item.children);
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse;
      }
    },

    mounted () {
      console.dir(this)
      console.dir(this.$store)
    }
  }
</script>