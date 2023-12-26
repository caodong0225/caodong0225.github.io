<template>
    <div class="number_detect">
      <vue-esign
        ref="esign"
        class="write_detect"
        :width="300"
        :height="300"
        :isCrop="isCrop"
        :lineWidth=16
        :lineColor="red"
        />
      <button @click="handleReset">清空画板</button>
      <button @click="handleGenerate" :disabled=isClick>识别数字</button>
      <div>
        <img :src="imgSrc" width="400" height="400">
      </div>
    </div>
</template>
  <script>
  import vueEsign from 'vue-esign'
  import axios from 'axios'
  export default {
    data(){
      return {
        lineWidth: 2,
        lineColor: '#000000',
        resultImg: '',
        isCrop: false,
        isClick:false,
        imgSrc:"../../static/images/AI1.png",
      }
    },
    components: {
      vueEsign,
    },
    methods:{
      // 清空画布
      handleReset () {
        this.$refs.esign.reset()
      },
      // 生成签名的base64图片
      handleGenerate () {

        this.$refs.esign.generate().then(res => {
          const newstring = this.base64Img(res);
          this.isClick = true;
          //发送get请求

          axios.get(this.$global.baseURL+'/get_MNIST?input='+newstring,{timeout: 10000}).then(response =>{
            const getdata = response.data;
            this.imgSrc = res.split(",")[0] +","+ getdata;
            this.isClick = false;
            }, error =>{
            alert("网络连接故障！")
            this.isClick = false;
            })

        }).catch(err => {
          //console.log('画布没有签字时会执行这里 Not Signned')
        })
      },
      // 附：base64转化成图片
      base64Img(dataurl, fileName='file') {
        const arr = dataurl.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const suffix = mime.split('/')[1];
        //const bstr = atob(arr[1]);
        /*
        const bstr = atob(arr[1]);
        let n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], `${fileName}.${suffix}`, { type: mime });
        */
       return arr[1]
      },
    },
  }
  </script>
<style scoped>
.number_detect
{
  position: relative;
  text-align: center;
}
.write_detect
{
  position: relative;
  margin-left: calc(50% - 150px);
  margin-top: 70px;
  border: 1px dashed #000;
}
</style>
