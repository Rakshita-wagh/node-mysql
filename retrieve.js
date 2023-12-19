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

  con.query("SELECT * FROM users u, posts p WHERE (date='date2' OR date='date3' OR date='date4') AND u.user_id = p.user_id", function(err, result) {
      if (err) throw err;
      console.table(result);
  });
});
