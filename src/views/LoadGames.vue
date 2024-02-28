<template>
  <div>
    <!-- 使用 <iframe> 元素加载 Unity 打包的 WebGL 页面 -->
    <iframe :src="externalHtml" style="width: 100%; height: 900px;" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      externalHtml: ''
    };
  },
  mounted() {
    // 加载外部 HTML 内容
    this.loadExternalHtml();
  },
  methods: {
    loadExternalHtml() {
      // 根据路由参数获取外部 HTML 文件名（假设路由参数为 htmlFileName）
      const htmlFileName = this.$route.params.htmlFileName;

      // 模拟根据文件名加载外部 HTML 内容
      this.externalHtml = `../../static/articles/${htmlFileName}.html`;
    }
  }
};
</script>

<style scoped>
/* 可选的样式 */
</style>
