const express = require("express");
const router = require("./routes");

module.exports = express()
  .use("/api", router);
