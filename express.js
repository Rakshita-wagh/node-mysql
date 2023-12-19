const express=require('express');
const mysql=require('mysql');
const fs=require('fs');
const app=express();
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});



var con=mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:"",
    database:"feedback"
  }
)

app.get('/send', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});



app.post('/done',urlencodedParser,(req,res)=>
{
  var reply='';
  var user_id=req.body.a;
  var user_name=req.body.b;
  var user_email=req.body.c;
  var post_id=req.body.d;
  var title=req.body.e;
  var content=req.body.f;
  var date=req.body.g;
  var comment_id=req.body.h;
  var comment=req.body.i;
 
  var sql1=`INSERT INTO users(user_id,user_name,user_email) values (?,?,?)`
  var sql2="INSERT INTO posts(post_id,title,content,user_id,date) values (?,?,?,?,?)"
  var sql3="INSERT INTO comments(comment_id,post_id,user_id,comment) values (?,?,?,?)"


  con.connect(function(err){
      if(err)throw err;
      console.log("Connected");
  });
  con.query(sql1,[user_id,user_name,user_email],function(err,result){
      if(err)throw err;
      res.write("rec inserted");
  });
  con.query(sql2,[post_id,title,content,user_id,date],function(err,result){
      if(err)throw err;
      res.write("rec inserted");
  });
  con.query(sql3,[comment_id,post_id,user_id,comment],function(err,result){
      if(err)throw err;
      res.write("rec inserted");
  });
  res.write("record inserted");
  res.end();

}).listen(9000);
