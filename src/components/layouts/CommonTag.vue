<template>
    <div class="tags">
        <el-tag v-for="(item,index) in tags" 
        :key="item.name"
        :closable="item.name !== 'home'"
        :effect="$route.name === item.name? 'dark':'plain'"
        @click="changeMenu(item)"
        @close="handleClose(item,index)"
        size="small">
        {{item.label}}
        </el-tag>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default ({
    name:"CommonTag",
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabList
        })
    },
    methods:{
        changeMenu(item){
            this.$router.push({name:item.name
            })
        },
        handleClose(item,index){
            const length = this.tags.length -1
            if(item.name !== this.$route.name){
                this.$store.commit("closeTag",item)
                return;
            }
            if(index === length){
                this.$router.push({name:this.tags[length-1].name
                })
            }else{
                this.$router.push({name:this.tags[length].name
                })
            }
            this.$store.commit("closeTag",item)
        }
    }
})
</script>
<style lang="less" scoped>
.el-tag{
    margin: 10px;
    cursor: pointer;
}
</style>
