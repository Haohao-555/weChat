// pages/jiaoxue/jiaoxue.js
Page({
  data: {
    background: ['bc-red', 'bc-green', 'bc-blue'],
    indicatiorDots: true,//指示点是否存在
    autoplay: false,
    circular: false,
    vertical: false,//是否垂直于手机屏幕播放
    interval: 2000,//每播放一个颜色停留2秒
    duration: 500//每个画面用时500毫秒
  },
  //事件处理函数
  changeIndicatorDots: function (e) {
    this.setData({
      indicatiorDots: !this.data.indicatiorDots
    })
  },
  changeautoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changecircular: function (e) {
    this.setData({
      circular: !this.data.circular
    })
  },
  changevertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  }
})
