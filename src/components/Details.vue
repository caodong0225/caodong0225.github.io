<template>
    <div id="details">
      <header></header>
      <div class="details-wrapper">
        <div class="article-title">Vue最佳实践</div>
        <div class="article-time">2018年03月20日</div>
        <mavon-editor
          class="md"
          :value="mdContent"
          :subfield = "false"
          :defaultOpen = "'preview'"
          :toolbarsFlag = "false"
          :editable="false"
          :scrollStyle="true"
          :ishljs = "true"
        ></mavon-editor>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Details",
      data () {
        return {
          mdContent:"aaa\n",
          codeStyle:'monokai-sublime',//设置主题 ，
        }
      }
    }
</script>

<style scoped>
  header{
    height: 210px;
  }
  .md{
    box-shadow: none;
  }
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html{
    background: #fff !important;
  }
  #editor {
    margin: auto;
    width: 100%;
    height: 580px;
    margin: 15px 0;
  }
  .details-wrapper{
    max-width: 960px;
    margin: -110px auto 50px;
    min-height: 100px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px;
    padding: 35px;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    box-sizing: border-box;
    min-height: calc(100vh - 120px);
  }
  .article-title{
    font-size: 36px;
    line-height: 48px;
    font-weight: 400;
    color: rgb(33,33,33);
  }
  .article-time{
    line-height: 14px;
    font-size: 13px;
    font-weight: bold;
    color: rgb(114, 114, 114);
    margin: 8px 0px 10px;
    overflow: hidden;
  }
</style>
