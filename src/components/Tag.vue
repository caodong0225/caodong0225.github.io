<template>
  <div id="tag">
    <header>
      <div class="explain">
        <h1>筛选标签</h1>
        <div class="tag-list">
          <p class="tag-active">CTF</p>
          <p>人工智能</p>
          <p>密码学</p>
          <p>计算机视觉</p>
          <p>自然语言处理</p>
          <p>小游戏</p>
          <p>AI演示</p>
        </div>
        <div class="tag-more" @click="showTagModel()">...</div>
      </div>
    </header>
    <div class="archives-wrapper">
      <h3 class="archive-separator">七月, 2018</h3>
      <div class="archives-list">
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
      </div>
      <h3 class="archive-separator">六月, 2018</h3>
      <div class="archives-list">
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
        <div class="archives-item">
          <p class="archives-time">2018年07月3日</p>
          <h3 class="archives-title">基于 MIME 类型的服务端推送</h3>
          <div class="archives-operation">
            <p class="archives-tag">vue</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tag-model" v-show="isshowTagModel" @click="showTagModel()">
      <div class="tag-wrapper">
        <p class="tag-active">CTF</p>
        <p @click.stop="selectTag($event)">人工智能</p>
        <p @click.stop="selectTag($event)">密码学</p>
        <p @click.stop="selectTag($event)">计算机视觉</p>
        <p @click.stop="selectTag($event)">自然语言处理</p>
        <p @click.stop="selectTag($event)">小游戏</p>
        <p @click.stop="selectTag($event)">AI演示</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tag",
    data(){
      return {
        isshowTagModel:false
      }
    },
    methods:{
      showTagModel(){
        this.isshowTagModel = !this.isshowTagModel;
      },
      selectTag(event){
        
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
    margin: 10px 0;
    color: #3f51b5;
    font-size: 16px;
    font-weight: bold;
    margin-top: 30px;
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
  .archives-tag{
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
