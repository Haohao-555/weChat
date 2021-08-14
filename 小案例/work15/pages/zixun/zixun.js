// pages/zixun/zixun.js
var num = 60;
var timerID; //计时器ID号
Page({
  data: {
    hidden: true,
    num: num
  },
  //事件处理函数
  //加载完成后就调用该函数使之界面俩秒后显示
  onLoad: function (options) {
    //这里是回调函数，如果没有将this赋值给that会是this的值受到改变
    var that = this;
    setTimeout(() => {
      that.show()
    }, 2000) //隔俩秒后调用函数show(),一开始调用，调用一次
  },
  show: function () {
    var that = this;
    that.setData({
      hidden: false
    })
  },
  start: function () {
    var that = this;
    timerID = setInterval(() => {//每隔一秒调用一次timer()函数，返回计时器的ID号，目的是为了清空秒数
      that.timer()
    }, 1000)
  },
  stop: function () {
    clearInterval(timerID)
  },
  timer: function () {
    var that = this;
    console.log(num);
    if (num > 0) {
      that.setData({
        num: num--
      })
    } else {
      that.setData({
        num: 0
      })
    }
    console.log(num)
  }
})