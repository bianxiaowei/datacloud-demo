import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../views/main.vue"
import Home from "../views/home/index.vue"
import Mall from "../views/mall/index.vue"
import User from "../views/user/index.vue"
import OtherPage1 from "../views/other/otherPage1"
import OtherPage2 from "../views/other/otherPage1"

Vue.use(VueRouter);

const routes =[
    {
        path:"/",
        name:"main",
        component:Main,
        redirect: { name: 'home' },
        children:[
            {
                path:"/home",
                name:"home",
                component:Home
            },
            {
                path:"/mall",
                name:"mall",
                component:Mall
            },
            {
                path:"/user",
                name:"user",
                component:User
            },
            {
                path:"/other-manage/other1",
                name:"other-manage-other1",
                component:OtherPage1
            },
            {
                path:"/other-manage/other2",
                name:"other-manage-other2",
                component:OtherPage2
            }
        ]
    }
]

const router = new VueRouter({
    mode:"history",
    routes
})

//解决进入同一路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
 return originalPush.call(this, location).catch(err => err)
}
 
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.repalce = function replace (location) { 
 return originalReplace.call(this, location).catch(err => err)
}

export default router
