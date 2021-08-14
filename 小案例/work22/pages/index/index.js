//index.js



Page({
  data: {
    r:50,
    g:100,
    b:150,
    a:1
  },
  //事件处理函数
  colorChanging:function(e){
    let color=e.currentTarget.dataset.color;//获取当前slider组件的data-color值
    let value=e.detail.value;//获取当前slider组件的value值
    console.log(color,value);
    this.setData({
      [color]:value
    })
  }
})
