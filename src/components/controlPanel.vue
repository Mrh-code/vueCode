<template>
    <div>
        <div class="row clearfix">
		<div class="col-md-4 column">
            <div class="mui-card mui-card-media mui-card1">
				<div class="row row1">
					<img src="../assets/carclient.png" />
				<div class="mui-media-body">在线终端数：
					<h2>{{onlineDev}}</h2>
					</div>
	</div>
	<div class="mui-card-footer">{{stimes | dataFormat('yyyy-mm-dd')}}</div>
</div>


		</div>
		<div class="col-md-4 column">
			
            <div class="mui-card mui-card-media mui-card2">
				<div class="row row1">
					<img src="../assets/CPU.png" />
				<div class="mui-media-body">紧急事件：
					<h2>{{emergency}}</h2>
					</div>
	</div>
	<div class="mui-card-footer">{{stimes | dataFormat('yyyy-mm-dd')}}</div>
</div>
		</div>
		<div class="col-md-4 column">
			<div class="mui-card mui-card-media mui-card3">
				<div class="row row1">
					<img src="../assets/memory.png" />
				<div class="mui-media-body">超时设备数：
					<h2>{{outtime}}</h2>
					</div>
	</div>
            
	<div class="mui-card-footer">{{stimes | dataFormat('yyyy-mm-dd')}}</div>
</div>
		</div>
        </div>


        <div>
            <h1>客户端详情</h1>
            <table class="table">
				<thead>
					<tr>
						<th>
							SessionID
						</th>
						<th>
							客户端地址
						</th>
						<th>
							连接情况
						</th>
						<th>
							连接/断开时间
						</th>
                        <th>
							更多操作
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="flag">没有匹配的数据</tr>
					<tr v-for="item in devDetail" :key="item.ID">
						<td>{{item.ID}}</td>
						<td>{{item.address}}</td>
						<td>{{item.station}}</td>
						<td>{{item.onoffTime}}</td>
						<td>删除增加拍照</td>
					</tr>
				</tbody>
			</table>
        </div>
        <div>
            <h1>加载地图区域</h1>
            <img alt="140x140" src="../assets/logo.png" />
        </div>
    </div>
    
    
</template>

<script>


export default {
    name:'controlPanel',
    data(){
        return{
            onlineDev:0,
            emergency:2,
			outtime:3,
			stimes:new Date(),

			flag:false,
			devDetail:[
				{ID:1,address:'南岸区',station:true,onoffTime:'2019-04-24'}
				]
        }
	},
	methods:{
		getMsg(){
			this.$ajax({
              method:'get',
              url:'http://wthrcdn.etouch.cn/weather_mini?city=重庆'
                        }).then((Response)=>{
                          console.log(Response.data)
                        }).catch((Response) => {
                            console.log('请求失败：');
                        });
      console.log('调用了getMsg函数')

		},
		showTable(){
			if(this.devDetail.length==0){
				this.flag=true
			}else{
				console.log('判断数组不为空')
			}
		},
		initWebScoket(){//初始化websocket
			const wsuri="ws://172.33.24.243:17865";
			this.websocket = new WebSocket(wsuri);
			this.websocket.onmessage = this.websocketonmessage;
			this.websocket.onopen = this.websocketonopen;
			this.websocket.onerror = this.websocketonerror;
			this.websocket.onclose = this.websocketonclose;
		},
		 websocketonopen(){ //连接建立之后执行send方法发送数据
		let actions = {"test":"12345"};        
		this.websocketsend(JSON.stringify(actions));
      },
      websocketonerror(){//连接建立失败重连
        this.initWebScoket();
      },
      websocketonmessage(e){ //数据接收
		const redata = JSON.parse(e.data);
		 alert(redata.Type);
		alert(redata.datetime);
		alert(redata.clientCount);
		this.onlineDev= redata.clientCount
      },
      websocketsend(Data){//数据发送
        this.websock.send(Data);
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
      },
	},
	created(){
		this.getMsg();
		this.showTable();
		console.log('调用方法showtable')
		this.initWebScoket();
	},
	destroyed(){
		this.websocket.close();

	}   
}
</script>
<style scoped>
.mui-card1{
	background-color:lightseagreen
}
.mui-card2{
	background-color:salmon
}
.mui-card3{
	background-color:cornflowerblue
}
.row1{
	align-items:center;
	justify-items:center;
	margin-left: 10px;
	margin-top: 10px;
	
}
</style>


