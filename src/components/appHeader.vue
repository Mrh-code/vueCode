<template>

    <div class="row clearfix">
        <div class="col-md-12 column menu">
			<mt-navbar v-model="selected">
            <mt-tab-item id="1">
                <span class="mui-icon mui-icon-list"></span>
            </mt-tab-item>
            <mt-tab-item id="2">
               <input type="text" >
            </mt-tab-item>
            <mt-tab-item id="3">
                <ul><li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" @click="showUser">
					用户信息
					<b :class="caret"></b>
				</a>
				<ul :class="dropdown-menu" v-if="userflag">
					<li><a href="#">jmeter</a></li>
					<li><a href="#">EJB</a></li>
					<li class="divider"></li>
					<li><a href="#">分离的链接</a></li>
					<li class="divider"></li>
					<li><a href="#">另一个分离的链接</a></li>
				</ul>
			</li></ul>
                   <!-- <mt-popup v-model="userflag" position="bottom"></mt-popup> -->
        
            </mt-tab-item>

            
            </mt-navbar>
				
				
				
			
		</div>
		
	</div>
    

    
</template>

<script>

export default {
    data(){
        return{
            value:null,
            selected:'1',
            userflag:false,
        }
    },
    methods:{
        showUser(){
            this.userflag=!this.userflag
        }
    }
}
</script>

<style scoped>
.menu{
    background-color: burlywood;
    align-content: center;
    margin-top: 0px;
    margin-left: inherit;
    
}
.column{
    margin-top: 10px
    
}

</style>

