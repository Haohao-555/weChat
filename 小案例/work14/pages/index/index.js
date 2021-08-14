//index.js
Page({
  createColor: function() {
    var color = [];
    var letters = '012356789ABCDEF'; //定义16进制颜色字符集

    for (var i = 0; i < 3; i++) { // 产生三种随机颜色
      var c = '#';
      for (var j = 0; j < 6; j++) {
        c += letters[Math.floor(Math.random() * 16)]
      }
      color.push(c)
    }

    console.log(color);
    this.setData({
      color1: color[0],
      color2: color[1],
      color3: color[2]
    })
  },

  //  onLoad:function(e){
  //      this.createColor();
  //      setInterval(()=>{
  //        this.createColor();
  //      },8000)
  //  },
  changecolor:function(e){
     this.createColor();
   }
})