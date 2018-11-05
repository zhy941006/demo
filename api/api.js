const express=require("express")
const app=express()
const bodyParser=require("body-parser")
// 注册bodyParser 中间件
app.use(bodyParser.urlencoded({extended:false}))

//开启跨域请求
const cors=require("cors")
app.use(cors())

// 引入路由模块
const router=require("./router.js")
app.use(router)

app.listen(5001,()=>{
    console.log("http://127.0.0.1:5001")
})
