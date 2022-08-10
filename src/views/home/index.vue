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
      <el-card style="height:280px">
        <div style="height:280px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <el-card style="height:260px" >
          <div style="height:280px" ref="echarts2"></div>
        </el-card>
        <el-card style="height:260px" >
          <div style="height:280px" ref="echarts3"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'Home',
  data(){
    return {
      userImg:require("../../assets/logo.png"),
      tableData:[
        {
          name:"VUE",
          todayBuy:1,
          monthBuy:20,
          totalBuy:100
        },
        {
          name:"JAVA",
          todayBuy:1,
          monthBuy:20,
          totalBuy:100
        },
        {
          name:"C#",
          todayBuy:1,
          monthBuy:20,
          totalBuy:100
        },
        {
          name:"Anjular",
          todayBuy:12,
          monthBuy:25,
          totalBuy:200
        },
        {
          name:"React",
          todayBuy:12,
          monthBuy:25,
          totalBuy:200
        },
        {
          name:"Paython",
          todayBuy:12,
          monthBuy:25,
          totalBuy:200
        },
        {
          name:".NET",
          todayBuy:12,
          monthBuy:25,
          totalBuy:200
        },
        {
          name:".NET",
          todayBuy:12,
          monthBuy:25,
          totalBuy:200
        }
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
      ],
      optionData : {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      optionData2 : {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
    }
  },
  mounted(){
    const echartsObject = echarts.init(this.$refs.echarts);
    const echartsObject2 = echarts.init(this.$refs.echarts2);
    const echartsObject3 = echarts.init(this.$refs.echarts3);
    echartsObject.setOption(this.optionData)
    echartsObject2.setOption(this.optionData2)
    echartsObject3.setOption(this.optionData2)
  }
}
</script>
