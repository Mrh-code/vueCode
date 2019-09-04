<template>
  <div id="app">
    <div class="row clearfix">
      <div class="col-md-3 column">
        <leftMenu />
      </div>
		<div class="col-md-9 column">
      <app-header />
      <transition mode="out-in">
            <router-view :key="activeDate"></router-view>
      </transition>
      
		</div>
		
	</div>
  <app-footer />
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'
import leftMenu from './components/leftMenu.vue'
import appFooter from './components/appFooter.vue'
export default {
  name: 'App',
  components:{
    appHeader,leftMenu,appFooter
  },
  data(){
    return{

    }
  },
  methods:{
    getAllList(){
      // this.axios.get(api).then((Response)=>{
      //   console.log(Response.data)
      // })
      this.$ajax({
              method:'get',
              url:'http://wthrcdn.etouch.cn/weather_mini?city=重庆'
                        }).then((Response)=>{
                          console.log(Response.data)
                        }).catch((Response) => {
                            console.log('请求失败：');
                        });
      console.log('调用了getlist函数')
    }
  },
  created(){
    this.getAllList();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0%;
  padding: 0%
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  /* position: absolute */
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
