//index.js
//获取应用实例


Page({
  data: {
    poster: ' http://p2.music.126.net/aiPQXP8mdLovQSrKsM3hMQ==/1416170985079958.jpg? ',
    src: ' https://webfs.yun.kugou.com/202006271524/56038f7fc79c02b037155e460dcce7eb/G063/M08/05/11/H5QEAFc-bc6AfD3uAEycKVKAkaw783.mp3',
    name:'大鱼',
    author:'周深'
  },
  //事件处理函数
  onLoad:function(options){
    this.audioCtx=wx.createAudioContext('myAudio')
  },
  audioPlay: function() {
      this.audioCtx.play()
      
  },
  audioPause: function() {
    this.audioCtx.pause()
  },
  audio14: function() {
    this.audioCtx.seek(14)
  },
  audioStart: function() {
    this.audioCtx.seek(0)
  },
  timeupdate:function(e){
    console.log(e.detail.currentTime)
  }
})