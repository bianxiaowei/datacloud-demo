<template>
    <el-container>
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <!-- <el-footer>Footer</el-footer> -->
        </el-container>
    </el-container>
</template>



<script>
import CommonAside from "../components/layouts/CommonAside.vue";
import CommonHeader from "../components/layouts/CommonHeader.vue";
export default{
    name:"Main",
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return {}
    }
}
</script>
<style lang="less" scoped>
.el-header{
    background-color: black;
}
.el-main{
    padding-top: 0;
}
.el-aside{
    height: 100%;
}
.el-container{
    height: 100%;
}
</style>
