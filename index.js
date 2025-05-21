const exp = require("express");
const app = exp();
const mysql = require("mysql2");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const db = mysql.createPool({
  port:3306,
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'sees',
});

//start server
app.listen(8000, () => {
  console.log("Server is running");
});

db.getConnection((err) => {
  if (err) {
    console.log("database is not connected");
  } else {
    console.log("database connected");
  }
});

const pro = {
  id: 1,
  price: 250,
};

//route
// app.get("/allUser", (req, res) => {
//   res.send(pro);
// });

app.get("/allUsers", (req, res) => {
  const que = "select * from emp";
  db.query(que, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("db error");
    }
    res.send(result);
  });
});

app.post("/user", (req, res) => {
  const { empno } = req.body;
  const query = "select * from emp where empno=?";
  db.query(query, [empno], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("db.error");
    }

    res.send(result);
  });
});