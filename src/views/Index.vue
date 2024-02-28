<template>
  <div>
    <header>
      <div class="explain">
        <h1>个人主页</h1>
        <h5>主要学习人工智能，游戏开发以及前后端设计</h5>
      </div>
    </header>
    <div class="index-wrapper" v-for="data in $global.games">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
            <img v-bind:src="data.picture" @click="location(`${data.url}`)" alt="background">
          </div>
          <p class="blog-time">{{data.date}}</p>
          <h3 class="blog-title">{{data.title}}</h3>
          <div class="blog-content">
            {{data.description}}
            <span class="blog-more" @click="location(`${data.url}`)">开始游戏</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li v-for="tag in data.tags">{{tag}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $global from "../../global.js";
export default {
  name: 'index',
  computed: {
    $global() {
      return $global
    }
  },
  data () {
    return {

    }
  },
  methods:
  {
    location(url)
    {
      this.$router.push(url);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-wrapper{
  max-width: 960px;
  margin: 30px auto 40px;
}
.blog-wrapper{
  margin-bottom: 30px;
  padding: 12px 12px 0;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(151,151,151,0.58);
}
.blog-time{
  line-height: 24px;
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: bold;
  color: #727272;
  overflow: hidden;
}
.blog-pic img{
  width: 100px;
  height: 100px;
  border: 2px solid #fff;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
.blog-title{
  margin-bottom: 15px;
  font-size: 24px;
  line-height: 32px;
  color: #3f51b5;
}
.blog-content{
  word-break: break-all;
  padding-bottom: 20px;
  line-height: 1.8;
}
.blog-more{
  display: inline-block;
  padding: 0 6px;
  font-weight: 500;
  color: #3f51b5 !important;
  border: none !important;
  border-radius: 3px;
}
.blog-tag{
  position: relative;
  margin: 0 -12px;
  padding: 12px 20px 8px;
  border-top: 1px solid #ddd;
}
.blog-tag li{
  display: inline-block;
  margin: 0 8px 8px 0;
  border-radius: 2px;
  background: #8bc34a;
  padding: 0 16px;
  line-height: 28px;
  color: rgba(255,255,255,0.8);
}
.textareaText{
  margin-top: 10px;
  padding: 0 24px 0 10px;
  width: 50%;
  min-height: 78px;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  color: #333;
  flex-grow: 1; /* 使文本域占据剩余空间 */
  resize: vertical; /* 允许用户调整垂直方向变化 */
}


</style>
