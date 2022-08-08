import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../views/main.vue"
import Home from "../views/home/index.vue"

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
