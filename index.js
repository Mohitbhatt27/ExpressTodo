const express = require("express");
const app = express();
const PORT = 3000;

app.get("/ping", (req, res) => {
  res.send("alive");
});

app.get("/test", (req, res) => {

  res.json({ test: "test" });
  console.log("test");
})

app.post("/test", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
