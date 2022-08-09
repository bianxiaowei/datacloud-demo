<template>
  <el-row :gutter="20" class="home">
    <el-col :span="8" style="margin-top: 20px;">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userInfo">
              <span class="name">Admin</span>
              <span class="access">超级管理员</span>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2022-8-9</span></p>
            <p>上次登录地点：<span>武汉</span></p>
          </div>
        </el-card>   
        <el-card style="margin-top:20px;height:460px;">
          <el-table :data="tableData">
            <el-table-column v-for="(val,key) in tableLabel" 
            :key="key" :prop="key" :label="val">
            </el-table-column>
          </el-table>
        </el-card>
    </el-col>
    <el-col :span="16" style="margin-top:20px">
      <div class="num">
        <el-card v-for="(item,index) in countData" :key="index" :body-style="{display:'flex',padding: 0}">
          <i class="icon" :class="'el-icon-'+item.icon" :style="{ background : item.color}"></i>
          <div class="detail">
            <p class="num">{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px"></el-card>
      <div class="graph">
        <el-card style="height:260px"></el-card>
        <el-card style="height:260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      userImg:require("../../assets/logo.png"),
      tableData:[
        {
          name:"VUE入门",
          todayBuy:1,
          monthBuy:20,
          totalBuy:100
        },
        {
          name:"JAVA入门",
          todayBuy:1,
          monthBuy:20,
          totalBuy:100
        },
        {
          name:"C#入门",
          todayBuy:1,
          monthBuy:20,
          totalBuy:100
        },
        {
          name:"Anjular入门",
          todayBuy:12,
          monthBuy:25,
          totalBuy:200
        },
      ],
      tableLabel:{
        name:"课程",
        todayBuy:"今日购买",
        monthBuy:"本月购买",
        totalBuy:"总购买"
      },
      countData:[
        {
          name:"今日支付订单",
          value:1234,
          icon:"success",
          color:"#2ec7c9"
        },
        {
          name:"今日收藏订单",
          value:1234,
          icon:"star-on",
          color:"#ffb980"
        },
        {
          name:"今日未支付订单",
          value:1234,
          icon:"s-goods",
          color:"#5ab1ef"
        },
        {
          name:"今日支付订单",
          value:1234,
          icon:"success",
          color:"#2ec7c9"
        },
        {
          name:"今日收藏订单",
          value:1234,
          icon:"star-on",
          color:"#ffb980"
        },
        {
          name:"今日未支付订单",
          value:1234,
          icon:"s-goods",
          color:"#5ab1ef"
        }
      ]
    }
  }
}
</script>
