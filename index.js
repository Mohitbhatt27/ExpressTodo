const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("alive");
});

app.get("/test", (req, res) => {

  res.json({ test: "test" });
  console.log("test");
})




app.post("/test", (req, res) => {
  const  ok  = req.body;
  console.log(ok);
  res.send("test success");
});


// app.post("/test", (req, res) => {
//   const {ok} = req.body;
//   console.log(ok);
//   res.send("test success");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
