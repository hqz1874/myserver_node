const express = require("express")
const router = express.Router()
const mysql = require('mysql')
const  GenId  = require("../tool/SnowFlake")
const genid = new GenId({ WorkerId: 1 })

// 图片文件上传
router.post("/upload", (req, res) => {
    let fileObject = null
    let filePath = ''

    // if(!req.files || Object.keys(req.files).length == 0){
    //     res.status(400).send({
    //         message:"上传失败",
    //         code:500
    //     })
    //     return;
    // }
    let mo = req.file
    console.log('zheshi');
    console.log(mo);
    // fileObject = req.files.file
    // console.log(fileObject);
    // filePath = './public/img/music/'  + fileObject.name ;

    // fileObject.mv(filePath,(err)=>{
    //     if(err){
    //         return res.status(500).send({
    //             code:1,
    //             msg:"系统错误"
    //         })
    //     }
    //     res.send({
    //         data:"chenggong"
    //     })
    // })

})


// MP3文件下载
// router.get("/download", async (req, res) => {
//     let momo = req.query.id
//     res.download(`./public/mp3/${momo}.mp3`)
//     console.log(momo);
// })




//获取 MP3文件信息  单个
// router.get("/info" , (req, res)=>{
//     let momo = req.query.id
//     // console.log(momo);
//     const pool = mysql.createPool({
//         database:'mymusic',
//         user:'root',
//         password:'123456'
//     })
//     pool.getConnection((err,coon)=>{
//         if(!err){
//             const sql = "SELECT * FROM musicInfo WHERE id = ? "
//             const sqlParams = [momo]
//             coon.query(sql,sqlParams,(e, results)=>{
//                 if(!e){
//                     res.send(results)
//                 }
//             })
//         }else{
//             console.log(err);
//         }
//     })
// })

//获取 MP3文件信息  全部
router.get("/infoall" , (req, res)=>{
    const pool = mysql.createPool({
        database:'myimg',
        user:'root',
        password:'123456'
    })
    pool.getConnection((err,coon)=>{
        if(!err){
            const sql = "SELECT * FROM info "
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

//添加  MP3文件信息 
// router.post("/info" , (req, res)=>{
    
//     // let { SongID, SongName, Singer, SongImg, SongUrl } = req.body
//     let obj = req.body
//     let id = genid.NextId();
//     obj.id = id
//     console.log(obj);

//     const pool = mysql.createPool({
//         database:'mymusic',
//         user:'root',
//         password:'123456'
//     })
//     pool.getConnection((err,coon)=>{
//         if(!err){
//             const sql = "insert into musicInfo set ?"
//             const sqlParams = obj
//             coon.query(sql,sqlParams,(e, results)=>{
//                 if(!e){
//                     res.send(results)
//                 }
//             })
//         }else{
//             console.log(err);
//         }
//     })
// })

//更新 MP3文件信息  单个
// router.put("/info" , (req, res)=>{
//     // let { id, Singer , SongName , SongID , SongImg } = req.body
//     // "UPDATE `blog` SET `title` = ?,`content` = ?,`category_id` = ? WHERE `id` = ?"
//     let obj = req.body
//     let momo = obj.id
//     delete obj.id
//     const pool = mysql.createPool({
//         database:'mymusic',
//         user:'root',
//         password:'123456'
//     })
//     pool.getConnection((err,coon)=>{
//         if(!err){
//             const sql = "UPDATE musicInfo SET ? WHERE id = ?"
//             const sqlParams = [obj,momo]
//             coon.query(sql,sqlParams,(e, results)=>{
//                 if(!e){
//                     res.send(results)
//                 }
//             })
//         }else{
//             console.log(err);
//         }
//     })
// })

// 删除数据
// router.delete("/info" , (req, res)=>{
//     let id =  req.body.id

//     const pool = mysql.createPool({
//         database:'mymusic',
//         user:'root',
//         password:'123456'
//     })
//     pool.getConnection((err,coon)=>{
//         if(!err){
//             const sql = "DELETE FROM musicInfo WHERE `id` = ?"
//             const sqlParams = id
//             coon.query(sql,sqlParams,(e, results)=>{
//                 if(!e){
//                     res.send(results)
//                 }
//             })
//         }else{
//             console.log(err);
//         }
//     })
// })
module.exports = router