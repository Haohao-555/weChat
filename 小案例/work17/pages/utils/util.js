var utilMsg='我是来自util.js的变量';
function utilFunc(){
  return '我是来自util.js的函数';
}
// 对外暴露接口
module.exports={
  utilMsg: utilMsg,
  utilFunc:utilFunc  
}