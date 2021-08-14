//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag:true,
    name:'',
    chinese_course:'',
    math_course:'',
    avergae:''
  },
  //事件处理函数
  nameInput:function(e){
    var name=e.detail.value;
    this.setData({
      name:name
    })
  },
  chineseInput:function(e){
    this.setData({
      chinese_course: e.detail.value
    })
  },
  mathInput:function(e){
    this.setData({
      math_course:e.detail.value
    })
  },
  mysumit:function(e){
    if(this.data.name==''||this.data.chinese_course==''||this.data.math_course==''){
      return;
    }else{
      var avg=(this.data.chinese_course * 1+this.data.math_course * 1)/2;
      this.setData({
        avergae:avg,
        flag:false
      })
    }
  },
  // 对象遍历
  demo1:function(){
    var person={
      name:哈哈,
      age:12,
      course:课程
    }
    var text="";
    for(var x in person){
        text+=person[x];
    }
  }
})
