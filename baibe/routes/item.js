var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'zuoye'
});
/* GET home page. */
//router.post('/list',function(req, res, next) {
//    res.header('Access-Control-Allow-Origin',"*")
//    var a1=req.body.T1;
//    var a2=req.body.T2;
//    var a3=req.body.T3;
//    var a4=req.body.T4;
//    con.query(`INSERT INTO trt(title,people,timer,detail) VALUES('${a1}','${a2}',NOW(),'${a4}')`,function(err,rows){
//        res.send(rows);
//    })
//});
//
//
//router.post('/detail',function(req, res, next) {
//    res.header('Access-Control-Allow-Origin',"*");
//    //console.log(a);
//    con.query('SELECT * FROM trt', function(err,rows){
//        res.send(rows)
//        //console.log(rows)
//    })
//});
//router.post('/del',function(req,res,next){
//    res.header('Access-Control-Allow-Origin',"*")
//    var cc=req.body.bbid;
//    //console.log(cc)
//    con.query('DELETE FROM trt WHERE id='+cc,function(err,rows){
//        res.send(rows)
//    })
//})
//router.post('/update',function(req,res,next){
//    res.header('Access-Control-Allow-Origin',"*")
//    var B1=req.body.b1;
//    var B2=req.body.b2;
//    var B3=req.body.b3;
//    var B4=req.body.id1
//    console.log(B1,B2,B3,B4)
//    con.query('UPDATE trt SET title="'+B1+'",people="'+B2+'",detail="'+B3+'" WHERE id='+B4,function(err,rows){
//        res.send(rows)
//        console.log(rows)
//    })
//})



//router.post('/list',function(req, res, next) {
//    res.header('Access-Control-Allow-Origin',"*")
//    var a1=req.body.T1;
//    var a2=req.body.T2;
//    var a3=req.body.T3;
//    var a4=req.body.T4;
//    con.query(`INSERT INTO trt(title,people,timer,detail) VALUES('${a1}','${a2}',NOW(),'${a4}')`,function(err,rows){
//        res.send(rows);
//    })
//});
router.get('/',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')


    res.send({name:123})


})


router.post('/tu',function(req,res,next){
   res.header('Access-Control-Allow-Origin','*')
    console.log(123)

    res.send({name:123})


})


//router.post('/img-1',function(req, res, next) {
//    res.header('Access-Control-Allow-Origin',"*");
//    //console.log(a);
//    con.query('SELECT * FROM tu', function(err,rows){
//        res.send(rows)
//        //console.log(rows)
//    })
//});


module.exports = router;