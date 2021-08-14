//index.js
var rand,sum;//全局变量
//产生随机数函数
function createRand(){
  rand=[];//初始化数组变量
  sum=0;
  for(var i=0; i<6;i++){
     var r=(Math.random()*100).toFixed(2)*1;//产生100以内的随机数
     rand.push(r);//将产生的随机数添加到数组中
     sum+=rand[i];//随机数列求和
     console.log(rand[i]);//在控制台显示数组元素
  }
  console.log(sum);
};
Page({
    onLoad: function(){
      createRand();//调用产生随机数函数
      this.setData({
        rand:rand,
        sum:sum
      })
    },
     newRand:function(){
       createRand();
       this.setData({
         rand:rand,
         sum:sum
       })
     }
  
})
