<template>
    <div id="archives">
      <header>
        <div class="explain">
          <h1>博客历史</h1>
          <h5></h5>
        </div>
      </header>
      <div class="archives-wrapper">
        <h3 class="archive-separator">2023年01月</h3>
        <div class="archives-list">
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic1.jpg" @click="$parent.location('/archives/article1')">
            </div>
            <p class="archives-time">2023年01月06日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article1')">人工智能学习笔记一——激活函数</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
              </ul>
            </div>
          </div>
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic2.png" @click="$parent.location('/archives/article2')">
            </div>
            <p class="archives-time">2023年01月08日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article2')">人工智能学习笔记二——神经网络</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
              </ul>
            </div>  
          </div> 
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic3.jpg" @click="$parent.location('/archives/article3')">
            </div>
            <p class="archives-time">2023年01月10日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article3')">人工智能学习笔记三——卷积神经网络</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
                <li>计算机视觉</li>
              </ul>
            </div>  
          </div> 
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic4.jpg" @click="$parent.location('/archives/article4')">
            </div>
            <p class="archives-time">2023年01月14日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article4')">人工智能学习笔记四——手写数字识别</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
                <li>计算机视觉</li>
              </ul>
            </div>
          </div> 
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic5.png" @click="$parent.location('/archives/article5')">
            </div>
            <p class="archives-time">2023年01月20日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article5')">CTF学习笔记一——RSA加密</h3>
            <div class="archives-tag">
              <ul>
                <li>CTF</li>
                <li>密码学</li>
              </ul>
            </div>
          </div> 
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic6.png" @click="$parent.location('/archives/article6')">
            </div>
            <p class="archives-time">2023年01月21日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article6')">人工智能学习笔记五——孪生神经网络</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
              </ul>
            </div>
          </div> 
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic7.jpg" @click="$parent.location('/archives/article7')">
            </div>
            <p class="archives-time">2023年01月24日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article7')">CTF学习笔记二——ECC加密</h3>
            <div class="archives-tag">
              <ul>
                <li>CTF</li>
                <li>密码学</li>
              </ul>
            </div>
          </div> 
        </div>
        <h3 class="archive-separator">2023年03月</h3>
        <div class="archives-list">
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic8.jpg" @click="$parent.location('/archives/article8')">
            </div>
            <p class="archives-time">2023年03月14日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article8')">人工智能学习笔记六——CBOW模型</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
                <li>自然语言处理</li>
              </ul>
            </div>
          </div>
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic9.png" @click="$parent.location('/archives/article9')">
            </div>
            <p class="archives-time">2023年03月14日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article9')">人工智能学习笔记七——基于BiLstm的恶意url检测</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
                <li>自然语言处理</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="archive-separator">2023年04月</h3>
        <div class="archives-list">
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic11.jpg" @click="$parent.location('/archives/article11')">
            </div>
            <p class="archives-time">2023年04月09日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article11')">人工智能学习笔记八——基于深度学习的钓鱼短信检测</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
                <li>自然语言处理</li>
              </ul>
            </div>
          </div>
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic10.jpg" @click="$parent.location('/archives/article10')">
            </div>
            <p class="archives-time">2023年04月09日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article10')">人工智能学习笔记九——基于transformer的恶意网页识别</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
                <li>自然语言处理</li>
              </ul>
            </div>
          </div>
        </div>  
        <h3 class="archive-separator">2023年08月</h3>
        <div class="archives-list">
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic12.png" @click="$parent.location('/archives/article12')">
            </div>
            <p class="archives-time">2023年08月29日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article12')">人工智能学习笔记十——基于aaegan的手写英文欺骗样本生成</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
              </ul>
            </div>
          </div>
          <div class="archives-item">
            <div class="archives-pic">
              <img src="../../static/images/pic13.png" @click="$parent.location('/archives/article13')">
            </div>
            <p class="archives-time">2023年08月29日</p>
            <h3 class="archives-title" @click="$parent.location('/archives/article13')">人工智能学习笔记十一——基于crnn+ctc的验证码识别机制</h3>
            <div class="archives-tag">
              <ul>
                <li>人工智能</li>
                <li>计算机视觉</li>
              </ul>
            </div>
          </div>
        </div>         
      </div>
    </div>
</template>

<script>
    export default {
        name: "Archives"
    }
</script>

<style scoped>
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
