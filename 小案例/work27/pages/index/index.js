//index.js
//获取应用实例
const app = getApp()
function getRandomColor(){
  let rgb=[]
  for(let i=0;i<3;++i){
     let color=Math.floor(Math.random()*256).toString(16)//产生0-255之间的16进制随机数
     color=color.length==1 ? '0'+color:color
     rgb.push(color)
  }
  return '#'+rgb.join('')//将3个数组元素连接成颜色值字符串返回
}
Page({
  data: {
    src:'https://player.bilibili.com/player.html?aid=2979186&cid=4667585&page=1',
    //poster:'http://videoimage1.cutv.com/originfileg/010061_i/2018/06/06/G15/G15fgfflggkhnhoglmongk_2b.jpg',
    danmuList:[
      {
        text:'第1s出现的弹幕',
        color:'#ff0000',
        time:1
      },{
        text:'第3s出现的弹幕',
        color:'#ff00ff',
        time:3
      }
    ]
  },
  //事件处理函数
  onLoad:function(options){
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  sendDanmu:function(){
      this.videoCtx.sendDanmu({
        text:this.inputValue,
        color:getRandomColor()
      })
  },
  inputBlur:function(e){
      this.inputValue=e.detail.value
  }
})
