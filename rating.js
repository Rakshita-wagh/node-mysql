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

  con.query(`ALTER TABLE posts
  ADD COLUMN rating INT(5);`, function(err, result) {
      if (err) throw err;
      console.log("connected");
  });
});
