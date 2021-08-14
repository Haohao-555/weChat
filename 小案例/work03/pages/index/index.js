//index.js
//获取应用实例

Page({
  data: {
    imgSrc:'/image/1.jpg'
  },
  //事件处理函数
  tapCat:function(){
    // 音频上下文
    let audio=wx.createInnerAudioContext();
    audio.src='/audio/2.mp3';
    // 播放音频
    audio.play();
  }
})
