<template>
    <div>
        <h2>{{ msg }}asdf</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newstitle}}</p>
    </div>
</template>
 
<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  // 模板中的路由钩子函数
   beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>
