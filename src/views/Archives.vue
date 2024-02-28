<template>
  <div id="archives">
    <header>
      <div class="explain">
        <h1>博客历史</h1>
        <h5></h5>
      </div>
    </header>
    <div class="archives-wrapper">
      <div v-for="data in $global.articles">
        <h3 class="archive-separator">{{data.month}}</h3>
        <div class="archives-list">
          <div class="archives-item" v-for="blog in data.content">
            <div class="archives-pic">
              <img v-bind:src="blog.picture" @click="location(`${blog.url}`)" alt="background">
            </div>
            <p class="archives-time">{{blog.date}}</p>
            <h3 class="archives-title" @click="location(`${blog.url}`)">{{blog.title}}</h3>
            <div class="archives-tag">
              <ul>
                <li v-for="tag in blog.tags">{{tag}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $global from "../../global.js";
export default {
  name: "Archives",
  computed: {
    $global() {
      return $global
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

<style scoped>
.archives-wrapper{
  margin: 0px auto 40px;
  min-height: calc(100vh - 270px);
}
.archive-separator{
  color: #3f51b5;
  font-size: 16px;
  font-weight: bold;
  margin: 30px 0 10px;
}
.main-wrapper {
  flex: 1;
  background: #f6f6f6;
  padding: 0 15px;
}
.archives-list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.archives-item{
  width: calc(50% - 10px);
  box-sizing: border-box;
  padding: 16px 20px 0;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(151,151,151,0.58);
  margin-bottom: 20px;
}
.archives-time{
  margin: 0 0 10px;
  line-height: 14px;
  font-size: 13px;
  font-weight: bold;
  color: #727272;
  overflow: hidden;
  padding-top: 10px;
}
.archives-pic img{
  width: 100px;
  height:100px;
  border: 2px solid #fff;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
.archives-title{
  font-size: 18px;
  margin-bottom: 0;
  padding-bottom: 16px;
}
.archives-tag
{
  position: relative;
  margin: 0 -12px;
  padding: 12px 10px 8px;
  border-top: 1px solid #ddd;
}
.archives-tag li{
  display: inline-block;
  margin: 0 8px 8px 0;
  border-radius: 2px;
  background: #8bc34a;
  padding: 0 16px;
  line-height: 28px;
  color: rgba(255,255,255,0.8);
}
</style>
