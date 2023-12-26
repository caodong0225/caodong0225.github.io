<template>
    <div id="tag">
      <header>
        <div class="explain">
          <h1>筛选标签</h1>
          <div class="tag-list">
            <p @click.stop="$parent.location('/ctf')">CTF</p>
            <p @click.stop="$parent.location('/ai')">人工智能</p>
            <p @click.stop="$parent.location('/crypto')">密码学</p>
            <p @click.stop="$parent.location('/cv')">计算机视觉</p>
            <p @click.stop="$parent.location('/nlp')">自然语言处理</p>
            <p @click.stop="$parent.location('/game')">小游戏</p>
            <p class="tag-active">AI演示</p>
          </div>
          <div class="tag-more" @click="showTagModel()">...</div>
        </div>
      </header>
      <div class="archives-wrapper">
        <div class="archives-list">
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic4.jpg" @click="$parent.location('/blog/number_detect')">
            </div>
            <p class="archives-time">2023年09月18日</p>
            <h3 class="archives-title" @click="$parent.location('/blog/number_detect')">手写数字识别demo</h3>
            <div class="archives-tag">
              <ul>
                <li>AI演示</li>
              </ul>
            </div>
          </div>
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic9.png">
            </div>
            <p class="archives-time">2023年09月19日</p>
            <h3 class="archives-title">
              人工智能学习笔记七——基于BiLstm的恶意url检测的演示demo
              <p>请输入url链接:</p>
              <input v-model="url" placeholder="请输入url链接" class="textinput"/>
              <el-button  v-on:click="detect_url" :loading="url_waiting" type="primary" >检测</el-button>
              <p>为正常url链接的概率: {{url_result}}</p>
            </h3>
            <div class="archives-tag">
              <ul>
                <li>AI演示</li>
              </ul>
            </div>

          </div>

          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic11.jpg">
            </div>
            <p class="archives-time">2023年09月20日</p>
            <h3 class="archives-title">
              人工智能学习笔记八——基于深度学习的钓鱼（垃圾）短信检测的演示demo
              <p>请输入短信内容:</p>
              <input v-model="message" placeholder="请输入短信内容" class="textinput"/>
              <el-button  v-on:click="detect_message" type="primary" :loading="message_waiting">检测</el-button>
              <p>为正常短信的概率: {{message_result}}</p>
            </h3>
            <div class="archives-tag">
              <ul>
                <li>AI演示</li>
              </ul>
            </div>

          </div>

          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic10.jpg">
            </div>
            <p class="archives-time">2023年09月21日</p>
            <h3 class="archives-title">
              人工智能学习笔记九——基于transformer的恶意网页识别的演示demo
              <p>请输入网址:</p>
              <input v-model="html" placeholder="请输入网址" class="textinput"/>
              <el-button  v-on:click="detect_html" type="primary" :loading="html_waiting">检测</el-button>
              <p>为正常网站的概率: {{html_result}}</p>
            </h3>
            <div class="archives-tag">
              <ul>
                <li>AI演示</li>
              </ul>
            </div>

          </div>
          <div class="archives-item">
            <div class="archives-pic">
                <img src="../../static/images/AI2.png">
            </div>
            <p class="archives-time">2023年10月05日</p>
            <h3 class="archives-title">
              密码猜测demo
              <p>请输入生成密码数量:</p>
              <input v-model="password" placeholder="请输入生成密码数量" class="textinput"/>
              <el-button  v-on:click="generate_password" type="primary" :loading="password_waiting">生成</el-button>
              <p></p>
              <textarea class="textareaText" readonly v-model="password_result"></textarea>
            </h3>
            <div class="archives-tag">
              <ul>
                <li>AI演示</li>
              </ul>
            </div>
          </div>

        </div>
      </div>


      <div class="tag-model" v-show="isshowTagModel" @click="showTagModel()">
        <div class="tag-wrapper">
            <p @click.stop="$parent.location('/ctf')">CTF</p>
            <p @click.stop="$parent.location('/ai')">人工智能</p>
            <p @click.stop="$parent.location('/crypto')">密码学</p>
            <p @click.stop="$parent.location('/cv')">计算机视觉</p>
            <p @click.stop="$parent.location('/nlp')">自然语言处理</p>
            <p @click.stop="$parent.location('/game')">小游戏</p>
            <p class="tag-active">AI演示</p>
        </div>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
    export default {
      name: "Tag",
      data(){
        return {
          isshowTagModel:false,
          url_result:"",
          message_result:"",
          html_result:"",
          password_result:"",
          url_waiting:false,
          message_waiting:false,
          html_waiting:false,
          password_waiting:false,
          url_head:this.$global.baseURL,
          password:"",
          html:"",
          message:"",
          url:"",
        }
      },
      methods:{
        showTagModel(){
          this.isshowTagModel = !this.isshowTagModel;
        },
        selectTag(event){

        },
        detect_url() {
          this.url_waiting = true;
          axios.get(this.url_head+'/get_url?input='+this.url,{timeout: 10000}).then(response =>{
                const getdata = response.data;
                this.url_result = getdata;
                this.url_waiting = false;
                }, error =>{
                alert("网络连接故障！")
                this.url_waiting = false;
                }
                )

        },

        detect_message() {
          this.message_waiting = true;
          axios.get(this.url_head+'/get_message?input='+this.message,{timeout: 10000}).then(response =>{
                const getdata = response.data;
                this.message_result = getdata;
                this.message_waiting = false;
                }, error =>{
                alert("网络连接故障！");
                this.message_waiting = false;
                })
        },
        detect_html(){
          this.html_waiting = true;
          axios.get(this.url_head+'/get_web?input='+this.html,{timeout: 10000}).then(response =>{
                const getdata = response.data;
                this.html_result = getdata;
                this.html_waiting = false;
                }, error =>{
                alert("网络连接故障！");
                this.html_waiting = false;
                })
        },
        generate_password(){
          this.password_waiting = true;
          axios.get(this.url_head+'/get_password?input='+this.password,{timeout: 10000}).then(response =>{
                const getdata = response.data;
                this.password_result = getdata;
                this.password_waiting = false;
                }, error =>{
                alert("网络连接故障！");
                this.password_waiting = false;
                })
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
.textinput{
  width: 15%;
}
/* 滚动条的优化样式，可忽略 */
/*滚动条整体样式*/
.textareaText::-webkit-scrollbar {
  width:4px;
  height:4px;
}
  </style>
