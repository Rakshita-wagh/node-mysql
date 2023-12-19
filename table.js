var mysql=require('mysql');

var con=mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:"",
    database:"feedback"
  }
)


con.connect((err)=>
{
  if(err) throw err;
  console.log('connected');
  
  var sql1=  
  `CREATE TABLE users(user_id INT(5) AUTO_INCREMENT PRIMARY KEY,user_name varchar(20),user_mail(40))`;

  var sql2=
  `CREATE TABLE posts(post_id INT(5) AUTO_INCREMENT PRIMARY KEY,title varchar(20),content(20),FOREIGN KEY (user_id) REFERENCES users(user_id),date varchar(20))`;

  var sql3=
  `CREATE TABLE comments(comment_id INT(5) AUTO_INCREMENT PRIMARY KEY,FOREIGN KEY (post_id) REFERENCES posts(post_id)),FOREIGN KEY (user_id)REFERENCES users(user_id),comment varchar(20))`;

  con.query((sql1,sql2,sql3),(err)=>
  {
    if(err) throw err;
    console.log("tables created");
  }
  )
});