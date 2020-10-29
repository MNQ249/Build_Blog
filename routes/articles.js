const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("test articles")
  
})

router.get("/new", (req, res) => {
  console.log("test new test")
  //res.send("test new")
  res.render("articles/new");
})

router.post("/", (req, res) => {});

module.exports = router;
