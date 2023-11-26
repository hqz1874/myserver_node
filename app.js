const express  = require('express')
const fs = require('fs')
const mysql = require('mysql')
const path = require('path')



const app = express()

const port = 8080

//开放跨域请求
app.use(function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == "OPTIONS") res.sendStatus(200); //让options尝试请求快速结束
    else next();
});

// 指定静态资源目录
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())


app.get('/', (req, res)=>{
    fs.readFile('pages/index.html', (err, data)=>{
        if(!err){
            res.end(data)
        }else{
            console.log(err);
        }
    })
})
app.use("/mp3", require('./router/mp3Router'))
app.use("/img", require('./router/imgRouter'))



// app.use()
app.get('/test', (req, res)=>{
    const pool = mysql.createPool({
        database:'siteserver',
        user:'root',
        password:'123456'
    })
    pool.getConnection((err,coon)=>{
        if(!err){
            const sql = "SELECT * FROM user "
            const sqlParams = []
            coon.query(sql,sqlParams,(e, results)=>{
                if(!e){
                    res.send(results)
                }
            })
        }else{
            console.log(err);
        }

    })
})


app.listen(port, ()=>{
    console.log(`后台启动成功，目前端口:${port}`);
})