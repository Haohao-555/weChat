//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {
    //promise
    //  new Promise((resolve,reject)=>{
    //    setTimeout(()=>{
    //      console.log('完成操作一')
    //     //  成功后调用resolve方法
    //     resolve()//进入then()方法
    //    },1000)
    //  }).then((res)=>{
    //    setTimeout(()=>{
    //      console.log('完成操作二')
    //      console.log('任务完成')
    //    },2000)
    //  })

    //任务1
    // let p1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('执行任务p1')
    //     //失败
    //     reject('失败任务为p1')
    //     //成功
    //     //resolve('成功完成任务p1')
    //   }, 2000)
    // })
    //任务2
    // let p2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('执行任务p2')
    //     resolve('成功完成任务p2')
    //   }, 1000)
    // })
    //任务3
    // let p3 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('执行任务p3')
    //     resolve('成功完成任务p3')
    //   }, 3000)
    // })

   // 判断三个任务是否已经完成
    // Promise.all([p1, p2, p3]).then((res)=>{
    //   console.log('任务全部完成')
    //   console.log(res)
    // }).catch((err)=>{
    //   console.log('有一个或多个任务失败')
    //   console.log(err)
    // })
    
     //竞赛
    //  Promise.race([p1, p2, p3]).then((res)=>{
    //   console.log('有一个任务完成')
    //   console.log(res)
    //  }).catch((err)=>{
    //    console.log('任务失败')
    //    console.log(err)
    //  })

    //  setTimeout((res)=>{
    //    console.log('完成流水一')
    //  },1000)
    //    console.log('完成流水二')

    //  setTimeout((res)=>{
    //    console.log('完成操作一')
    //    setTimeout((res)=>{
    //     console.log('完成操作二')
    //     console.log('流水线工作完成')
    //    },2000)
    //  },1000)
       //this.demo();
       console.log('1')
       console.log('2')
       console.log('3')
    },
    // async demo (){
    //   console.log('1')
    //    await this.demo1()
    //     console.log(3)
    // },
    // demo1(){
    //   setTimeout((res)=>{
    //      console.log(2)
    //   },3000)
    // },
  getUserInfo: function (e) {

  }
})
