const { Router } = require("express");
const generateData = require("../data");

const index = function (req, res) {
  const data = generateData();
  return res.status(200).json(data);
};

module.exports = Router()
  .get("/", index);