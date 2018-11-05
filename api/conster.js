//抽离业务逻辑板块

const conn=require("./db.js")

module.exports={
    Api:(req,res)=>{
        res.send("请求后台api数据成功")
    },
    getAllHero:(req,res)=>{
        const sql='select * from heros'
        conn.query(sql,(err,result)=>{
            //如果读取数据读取失败，侧返回一个失败数据
          if(err)  res.send({status:500,msg:err.message,data:null});
          
            res.send({status:200,msg:"ok",data:result})
        })
    },
    addhero:(req,res)=>{
        //获取到客户端提交的英雄名称、性别即可
        //获取服务器当前时间,当作英雄的添加时间
        const hero=req.body
    
        const dt=new Date()
        const y=dt.getFullYear().toString().padStart(2,"0")
        const m=(dt.getMonth()+1).toString().padStart(2,"0")
        const d=dt.getDay().toString().padStart(2,"0")
        const hh=dt.getHours().toString().padStart(2,"0")
        const mm=dt.getMinutes().toString().padStart(2,"0")
        const ss=dt.getSeconds().toString().padStart(2,"0")
        //补全英雄添加时间
        hero.ctime=y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss
        // console.log(req.body)
        // res.send("ok")
        const sql2="insert into heros set ?"
       conn.query(sql2,hero,(err,result)=>{
           if(err){ res.send({status:500,msg:err.message,result:null})}
           res.send({status:200,msg:"ok",data:result})
       })
    },
    addheroHost:(req,res)=>{
        const id=req.params.id
        const sql3="select * from heros where id=?"
        conn.query(sql3,id,(err,result)=>{
            if(err){ res.send({status:500,msg:err.message,result:null})}
            res.send({status:200,msg:"ok",data:result})
        })
    
    },
    updataHoser:(req,res)=>{
        const id=req.params.id
        const userInfo=req.body
        const sql4="update heros set ? where id=?"
        conn.query(sql4,[userInfo,id],(err,result)=>{
            if(err){ res.send({status:500,msg:err.message,result:null})}
            res.send({status:200,msg:"ok",data:result})
        })
    },
    dalateHeros:(req,res)=>{
        const id=req.params.id
        const sql5="update heros set isdel=1 where id=?"
        conn.query(sql5,id,(err,result)=>{
            if(err) {res.send({status:500,msg:err.message,result:null})}
            res.send({status:200,msg:"ok",data:result})
        })
    }
}

