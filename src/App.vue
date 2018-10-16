<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goback">后退</button>
      <button @click="goHome">首页</button>
    </div>
    <div>
      导航:
      <router-link to="/params/187/mrr  is very good">params</router-link>*
      <router-link to="/goparams/188/wyf  is very good">goparams</router-link>
       <router-link to="/">首页</router-link>|
      <router-link to="/hi">hi页面</router-link>||
      <router-link :to="{name:'hi1',params:{usename:'mrr',id:'888'}}">hi1</router-link><!-- name要与inddex.js里的相同 -->
      ||
      <router-link to="/hi/hi2">hi2</router-link>


    </div>
    <transition name="fade" mode="out-in">
    <router-view/>55<!-- 放在导航之后 -->
    </transition><!-- 动画效果 -->
    
      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
      <router-view name="right" style="float:right;width:50%;background-color:#71CBD5;opacity:0.5;height:300px;"></router-view>
     <p>{{$route.name}}</p>
  </div>
  <!-- <router-link to="/">[显示字段]</router-link>制作导航to后为path值 -->
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);
    },
     goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
appendChild
removeChild