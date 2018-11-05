const express=require("express")
const router=express.Router()

// 引入mysql模块
const mysql=require("mysql")
const conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"host"
})

const api=require("./conster.js")
router.get("/",api.Api)

// 对外暴露getAllHero接口
router.get("/getAllHero",api.getAllHero)

// 对外暴露addhero接口
router.post("/addhero",api.addhero)

//查询英雄信息Api借口
router.get("/addheroHost/:id",api.addheroHost)

// 修改英雄信息api接口
router.post("/updataHoser/:id",api.updataHoser)

router.get("/dalateHeros/:id",api.dalateHeros)

module.exports=router