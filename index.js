const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("alive");
});

app.get("/test", (req, res) => {
  res.json({ test: "test" });
  console.log("test");
});

app.post("/test/:category/:id", (req, res) => {
  const { category, id } = req.params;
  console.log(category, id);
  res.send("test success");
});

app.post("/test", (req, res) => {
  const ok = req.body;
  console.log(ok);
  res.send("test success");
});

app.post("/testAgain", (req, res) => {
  console.log(req.headers);
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
