//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src:'../../image/cat.jpg',
    imgArray:[
      {
        mode:'aspectFit',
        text:'aspectFit:保持纵横比缩放图片，使图片完整显示出来'
      },{
        mode:'scaleToFill',
        text:'scaleToFill:不保持纵横比缩放图片，使图片拉伸适应'
      },{
        mode:'top',
        text:'top:不缩放图片，只显示图片的顶部区域'
      },{
        mode:'bottom',
        text:'bottom:不缩放图片，只显示图片的底部区域'
      },{
        mode:'center',
        text:'center:不缩放图片，只显示图片的中心区域'
      }
    ]
  },
  //事件处理函数
  
})
