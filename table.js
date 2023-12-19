var mysql=require('mysql');

var con=mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:"",
    database:"feedback"
  }
)


  con.connect(function (err) {
    if (err) throw err;
    console.log("connected");

    var sql1=  
  `CREATE TABLE users(user_id INT(5) AUTO_INCREMENT PRIMARY KEY,user_name VARCHAR(20),user_mail VARCHAR(40))`;
    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("Table 'user' created");
    });

    var sql2=
    `CREATE TABLE posts(post_id INT(5) AUTO_INCREMENT PRIMARY KEY,title VARCHAR(20),content VARCHAR(20),user_id INT(5),FOREIGN KEY (user_id) REFERENCES users(user_id),date VARCHAR(20))`;

    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log("Table 'post' created");
    });
   
  var sql3=
  `CREATE TABLE comments(comment_id INT(5) AUTO_INCREMENT PRIMARY KEY,post_id INT(5),FOREIGN KEY (post_id) REFERENCES posts (post_id),user_id INT(5),FOREIGN KEY (user_id) REFERENCES users(user_id),comment VARCHAR(20))`;

    con.query(sql3, function (err, result) {
        if (err) throw err;
        console.log("Table 'comment' created");
    });
});

 
