
<template>

  <div style="width: 100%">
 <!--静态html资源-->

 <div style="margin-top: 60px;">
   <iframe :src="pathUrl" scrolling="auto" frameborder="0" style="width: 100%;height:900px;"></iframe>
 </div>
</div>


</template>
<script>
export default {
	data () {
	   return {
	     pathUrl:''
	   }
	 },
	 mounted () {
      this.pathUrl = '../../static/pdf/web/viewer.html?file=' + encodeURIComponent('../../articles/article9.pdf')   // 找到之前引进来pdf文件中的的viewe.html并+pdf地址
    },
 }
</script>