const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello wide World!");
});

app.get("/info", (req, res) => {
  res.send("site info");
});

app.get("/contact", (req, res) => {
  res.send("Please contact us!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
