var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "feedback"
});


  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");

    con.query(`SELECT comment, user_name, title 
               FROM comments c, users u, posts p 
               WHERE comment='good' AND u.user_id=c.user_id AND p.post_id=c.post_id` , function(err, result) {
        if (err) throw err;
        console.table(result);
    });

  });

