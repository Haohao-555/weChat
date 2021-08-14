//index.js
//获取应用实例


Page({
  data: {
    r: 50,
    g: 100,
    b: 150,
    a: 1
  },
  //事件处理函数
  colorChanging: function (e) {
    let color = e.currentTarget.dataset.color;//获取当前slider组件的data-color值
    let value = e.detail.value;//获取当前slider组件的value值
    console.log(color, value);
    this.setData({
      [color]: value
    })
  },
  text:function(){
    wx.request({
      url: 'http://www.baidu.com/', //仅为示例，并非真实的接口地址
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('成功')
        console.log(res.data)
      },
      fail:function(res){
        console.log('失败')
      }
    })
  }
})