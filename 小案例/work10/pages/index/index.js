//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    Y:''
  },
  //事件处理函数
  calc:function(e){
    var x,y;
    var x=e.detail.value;//获取文本框内容
    if(x<0){
      y=Math.abs(x);//取绝对值
    }else if(x<10){
      y=Math.exp(x)*Math.sin(x);//e的x次方乘于sinx
    }else if(x<20){
      y=Math.pow(x,3);//x的3次方
    }else{
      y=(3+2*x)*Math.log(10);//(3+2x)lnx
    }
    this.setData({
      Y:y
    })
  }
})
