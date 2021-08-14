//index.js
//获取应用实例
const app=getApp();//获取应用全局实例
var util = require('../utils/util.js');//获取utils模块应用实例
var indexMsg='我是来自index.js的变量';
function indexFunc(){
  return '我是来自index.js的变量';
}
Page({
  data: {
    msg1: app.globalMsg, //使用全局变量
    msg2: app.globalFunc(), //全局函数
    msg3: indexMsg,//本文件变量
    msg4: indexFunc(), //本文件函数
    msg5: util.utilMsg,//其他模块变量
    msg6: util.utilFunc()//其他模块函数
  }

})