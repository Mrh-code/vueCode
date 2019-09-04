<template>
    <div class="menuContainer">
        <div class="logopanel">
                <h3><span :style="{color:'green',}"> [</span> 
                终端控制台 <span :style="{color:'green',}">]</span></h3>
        </div>
        <h5>Navigation</h5>
        <ul class="list-group">
            <li :class="['list-group-item', 'list-group1']">
                <router-link to="/controlPanel">
                控制面板
                </router-link>
                </li>
            <li class="list-group-item list-group1">
                <router-link to="/filePreview">
                文件上传
                </router-link>
                </li>
        </ul>
<ul>
    <li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" @click="setshow">
					Java 
					<b class="caret"></b>
				</a>
				<ul class="dropdown-menu" v-if="down">
					<li><a href="#">jmeter</a></li>
					<li><a href="#">EJB</a></li>
					<li class="divider"></li>
					<li><a href="#">分离的链接</a></li>
					<li class="divider"></li>
					<li><a href="#">另一个分离的链接</a></li>
				</ul>
			</li>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" @click="setshow">
					Java 
					<b :class="caret"></b>
				</a>
               
</ul>

    </div>
</template>
<script>
export default {
    data(){
        return{
            down:false,
        }
    },
    methods:{
        setshow(){
            this.down=!this.down
        }
    }
}
</script>
<style scoped>
.menuContainer{
    height: 600px;
    margin: 0%;
    background-color:darkslategray
}
.logopanel{
    background-color: white;
    
}
.list-group1{
    background-color:darkslategray;
    
}


</style>

