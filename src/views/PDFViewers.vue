<template>
  <!-- 使用动态生成的 PDF 文件 URL 在 iframe 中显示 PDF 文件 -->
  <!--
  <iframe :src="pathUrl" scrolling="auto" frameborder="0" style="width: 100%; height: 900px;"></iframe>
  -->
  <div style="padding-top: 56px">
    <vue-pdf-app style="height: 100vh;" :pdf="pathUrl"></vue-pdf-app>
  </div>
</template>

<script>
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";
export default {
  data () {
    return {
      pathUrl:''
    }
  },
  components: {
    VuePdfApp
  },
  mounted () {
    // 根据路由参数获取 PDF 文件名
    const fileName = this.$route.params.fileName;
    this.pathUrl = `../../static/articles/${fileName}.pdf`   // 找到之前引进来pdf文件中的的viewe.html并+pdf地址
  },
};
</script>

<style>
/* 样式 */
</style>
