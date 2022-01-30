const express = require("express");
const path = require("path");
const api = require("./api");
const PORT = process.env.PORT || 3000;

const app = express();
app.use("/hungman", api);
app.use("*", (req, res) => {
  res.status(404);
  res.send({ err: "Page not found" });
});

app.listen(PORT);
