<template>
  <div>
    <header>
      <div class="explain">
        <h1>个人主页</h1>
        <h5>主要学习人工智能，游戏开发以及前后端设计</h5>
      </div>
    </header>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/2.png" @click="$parent.location('/blog/wuziqi')">
            </div>
          <p class="blog-time">2022年07月10日</p>
          <h3 class="blog-title">五子棋小游戏</h3>
          <div class="blog-content">
            五子棋小游戏，目前单人模式还没做完，悔棋功能无法使用
            <span class="blog-more" @click="$parent.location('/blog/wuziqi')">开始游戏</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>unity游戏开发</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/1.png"  @click="$parent.location('/blog/jingziqi')">
            </div>
          <p class="blog-time">2023年01月05日</p>
          <h3 class="blog-title">井字棋小游戏</h3>
          <div class="blog-content">
            井字棋小游戏，加入了极大极小值算法，可以单人和AI对战
            <span class="blog-more"  @click="$parent.location('/blog/jingziqi')">开始游戏</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>unity游戏开发</li>
              <li>极大极小值算法</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/3.png"  @click="$parent.location('/blog/tanchishe')">
            </div>
          <p class="blog-time">2023年08月04日</p>
          <h3 class="blog-title">贪吃蛇小游戏</h3>
          <div class="blog-content">
            贪吃蛇小游戏，Unity练手用的
            <span class="blog-more"  @click="$parent.location('/blog/tanchishe')">开始游戏</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>unity游戏开发</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/4.png"  @click="$parent.location('/blog/newyork')">
            </div>
          <p class="blog-time">2023年09月16日</p>
          <h3 class="blog-title">纽约市地图</h3>
          <div class="blog-content">
            第一次做3D游戏，把下载下来的两个素材整合了一下
            <span class="blog-more"  @click="$parent.location('/blog/newyork')">开始游戏</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>unity游戏开发</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/pic4.jpg"  @click="$parent.location('/blog/number_detect')">
            </div>
          <p class="blog-time">2023年09月18日</p>
          <h3 class="blog-title">手写数字识别demo</h3>
          <div class="blog-content">
            这是人工智能学习笔记四——手写数字识别的演示demo
            <span class="blog-more"  @click="$parent.location('/blog/number_detect')">点击进入</span>
          </div>
          <div class="blog-tag">
            <ul>
              <li>AI演示</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/pic9.png">
            </div>
          <p class="blog-time">2023年09月19日</p>
          <h3 class="blog-title">恶意url识别demo</h3>
          <div class="blog-content">
            这是人工智能学习笔记七——基于BiLstm的恶意url检测的演示demo
            <p>请输入url链接:</p>
            <input v-model="url" placeholder="请输入url链接" class="textinput"/>
            <el-button  v-on:click="detect_url" :loading="url_waiting" type="primary" >检测</el-button>
            <p>为正常url链接的概率: {{url_result}}</p>
          </div>
          <div class="blog-tag">
            <ul>
              <li>AI演示</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/pic11.jpg">
            </div>
          <p class="blog-time">2023年09月20日</p>
          <h3 class="blog-title">恶意短信识别demo</h3>
          <div class="blog-content">
            这是人工智能学习笔记八——基于深度学习的钓鱼（垃圾）短信检测的演示demo
            <p>请输入短信内容:</p>
            <input v-model="message" placeholder="请输入短信内容" class="textinput"/>
            <el-button  v-on:click="detect_message" type="primary" :loading="message_waiting">检测</el-button>
            <p>为正常短信的概率: {{message_result}}</p>
          </div>
          <div class="blog-tag">
            <ul>
              <li>AI演示</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/pic10.jpg">
            </div>
          <p class="blog-time">2023年09月21日</p>
          <h3 class="blog-title">恶意网站识别demo</h3>
          <div class="blog-content">
            这是人工智能学习笔记九——基于transformer的恶意网页识别的演示demo
            <p>请输入网址:</p>
            <input v-model="html" placeholder="请输入网址" class="textinput"/>
            <el-button  v-on:click="detect_html" type="primary" :loading="html_waiting">检测</el-button>
            <p>为正常网站的概率: {{html_result}}</p>
          </div>
          <div class="blog-tag">
            <ul>
              <li>AI演示</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-wrapper">
      <ul>
        <li class="blog-wrapper">
          <div class="blog-pic">
              <img src="../../static/images/AI2.png">
            </div>
          <p class="blog-time">2023年10月05日</p>
          <h3 class="blog-title">密码猜测demo</h3>
          <div class="blog-content">
            这是PassGAN: A Deep Learning Approach for Password Guessing论文的复现
            <p>请输入生成密码数量:</p>
            <input v-model="password" placeholder="请输入生成密码数量" class="textinput"/>
            <el-button  v-on:click="generate_password" type="primary" :loading="password_waiting">生成</el-button>
            <p></p>
            <textarea class="textareaText" readonly v-model="password_result"></textarea>
          </div>
          <div class="blog-tag">
            <ul>
              <li>AI演示</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
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
  methods:
  {
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
