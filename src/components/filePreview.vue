<template> 
    <div class="container">
        <div class="fileForm">
           <form class="mui-input-group formBcg" action="files">
               <input type="file" id="exampleInputFile">
               <button type="button" class="mui-btn mui-btn-primary" @click="openToview">打开预览</button>
               <button type="button" class="mui-btn mui-btn-success" @click="uploadFile">提交上传</button>
    
</form>
        </div>
        <div class="fileView">
            <h1>文件预览</h1>
            
  
        </div>
    </div>
</template>
<script>


import 'bootstrap/dist/css/bootstrap.css'

export default {
    name:'filePreview',
    data(){
        return{
            fileMsg:{
                name:'alice',
                age:16
            },
        }
    },
    methods:{
        openToview(){
            console.log('opentoview', '打开预览文件')
        },
        uploadFile(){
             this.$ajax.post('http://wthrcdn.etouch.cn/weather_mini?city=重庆',this.fileMsg,{  
                 //方式2通过transformRequest方法发送数据，本质还是将数据拼接成字符串
                            transformRequest:[
                                function(data){
                                    let params='';
                                    for(let index in data){
                                        params+=index+'='+data[index]+'&';
                                    }
                                    return params;
                                }
                            ]
                        })
                        //拿到返回的数据
                        .then(Response => {
                            console.log(Response.data);
                        }).catch(err => {
                            console.log('请求失败：'+err.status+','+err.statusText);
                        });
                        console.log('uploadFile', '上传我的文件')
                    },
             
            
        }
  
}
</script>
<style scoped>
.container{
    display: flex
}
.fileForm{
    flex: 1;
    height: 500px;
    background-color:coral;
}
.fileView{
    flex: 3;
    background-color:cornflowerblue;
}
.formBcg{
    background-image: url(../assets/uploadfile.png);
    width: 256px;
    height: 256px;
}
</style>


