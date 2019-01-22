const { Router } = require("express");
const songRoutes = require("./song");

module.exports = Router()
  .use("/songs", songRoutes);
