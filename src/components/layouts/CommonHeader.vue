<template>
    <header>
        <div class="l-content">
            <el-button @click="handleCollapse" plain icon="el-icon-menu" size="mini"></el-button>
            <!-- <el-breadcrumb>
                <el-breadcrumb-item v-for="item in  tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb> -->
            <h3 style="color:white;margin-left: 20px;">{{currentMenu.label}}</h3>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini" icon="el-icon-user">
                <span>
                    <el-button plain icon="el-icon-user" size="mini"></el-button>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
import {mapState} from "vuex"
    export default{
        name:"CommonHeader",
        data(){
            return {}
        },
        methods:{
            handleCollapse(){
                this.$store.commit("collapseMenu");
            }
        },
        computed:{
            ...mapState({
                currentMenu: state => state.tab.currentMenu
            }),
            ...mapState({
                tags: state => state.tab.tabList
            })
        }
    }
</script>
<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        //background: #2e3133;
        border: 0;
    }
}
.r-content{
    
}


// .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
//     color: #fff;
// }
// .el-breadcrumb__item:last-child .el-breadcrumb__inner{
//     color: #fff;
// }
</style>

