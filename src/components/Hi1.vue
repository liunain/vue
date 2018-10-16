<template>
  <div class="hello">
    <h1>{{ msg }}--{{$route.params.usename}}-{{$route.params.id}}</h1>

  </div>
</template>
<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'Hi, I am Hi1!'
    }
  }
}
export default{
	data(){
		return{
			
		}
	}
}
</script>
<style scoped>
 
</style>