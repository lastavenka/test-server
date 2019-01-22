const { Router } = require("express");
const generateData = require("../data");

const index = function (req, res) {
  const data = generateData();
  res.json(data);
};

module.exports = Router()
  .get("/", index);