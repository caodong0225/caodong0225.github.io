<template>
  <div id="tag">
    <header>
      <div class="explain">
        <h1>筛选标签</h1>
        <div class="tag-list">
          <div v-for="tag in tags">
            <p v-if="!(tag === tags[index])" @click="changeIndex(tags.indexOf(tag))">{{tag}}</p>
            <p v-else class="tag-active">{{tag}}</p>
          </div>
        </div>
        <div class="tag-more" @click="showTagModel()">...</div>
      </div>
    </header>
    <div class="archives-wrapper">
      <div class="archives-list">
        <div class="archives-item" v-for="blog in blogInfo" v-show="blog.tags.indexOf(tags[index])>=0">
          <div class="archives-pic">
            <img v-bind:src="blog.picture" @click="location(`${blog.url}`)" alt="">
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
    <div class="tag-model" v-show="isshowTagModel" @click="showTagModel()">
      <div class="tag-wrapper">
        <div v-for="tag in tags">
          <p v-if="!(tag === tags[index])" @click="changeIndex(tags.indexOf(tag))">{{tag}}</p>
          <p v-else class="tag-active">{{tag}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $global from "../../global.js";
export default {
  name: "Tag",
  computed: {
    $global() {
      return $global
    }
  },
  data(){
    //截取所有的标签
    const tags = new Set();
    for(let i =0;i < $global.articles.length;i++)
    {
      for(let j =0;j < $global.articles[i].content.length;j++)
      {
        $global.articles[i].content[j].tags.forEach((tag) => tags.add(tag));
      }
    }
    for(let i =0;i < $global.games.length;i++)
    {
      $global.games[i].tags.forEach((tag) => tags.add(tag));
    }
    //合并数据
    var blogInfo = [];
    for(let i =0;i < $global.articles.length;i++)
    {
      for(let j =0;j < $global.articles[i].content.length;j++)
      {
        blogInfo.push($global.articles[i].content[j]);
      }
    }
    for(let i =0;i < $global.games.length;i++)
    {
      blogInfo.push($global.games[i]);
    }
    return {
      tags: Array.from(tags),
      isshowTagModel:false, //是否显示标签选择模态框
      index: 0, //当前选中的标签索引
      blogInfo: blogInfo //获取所有的博客信息
    }
  },
  methods:{
    showTagModel(){
      this.isshowTagModel = !this.isshowTagModel;
    },
    selectTag(event){

    },
    location(url)
    {
      this.$router.push(url);
    },
    changeIndex(index){
      this.index = index;
      this.$forceUpdate() // 调用这个方法会刷新视图
    }
  }
}
</script>

<style scoped>
.tag-model{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.tag-wrapper{
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  background:#fff;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
.tag-wrapper p {
  padding: 0 15px;
  margin: 5px;
  line-height: 32px;
  cursor: pointer;
}
.tag-active{
  color: #fff;
  background: #ff4081;
  border-radius: .2em;
}
.explain{
  position: relative;
}
.tag-more{
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: #3f51b5;
  width: 60px;
  text-align: center;
  line-height: 40px;
  height: 44px;
  cursor: pointer;
}
header{
  padding: 100px 15px !important;
}
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
  margin-bottom: 10px;
  margin-top: 10px;

}
.archives-time{
  margin: 0 0 10px;
  line-height: 14px;
  font-size: 13px;
  font-weight: bold;
  color: #727272;
  overflow: hidden;
}
.archives-title{
  font-size: 18px;
  margin-bottom: 0;
  padding-bottom: 16px;
}
.archives-operation{
  border-top: 1px solid #ddd;
  display: flex;
  padding: 12px 20px 8px;
  margin: 0 -20px;
}
.archives-pic img{
  width: 100px;
  height:100px;
  border: 2px solid #fff;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
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
.tag-list{
  display: flex;
  height: 44px;
  margin-top: 8px;
  line-height: 44px;
  overflow: hidden;
  flex-wrap: wrap;
}
.tag-list p{
  padding: 0 12px;
  color: rgba(255,255,255,0.8);
}
.tag-list p:hover{
  cursor: pointer;
}
.tag-active{
  border-bottom: 2px solid #ff4081;;
}
</style>
