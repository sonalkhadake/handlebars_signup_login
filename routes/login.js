const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const {login, logincredentials }= require("../controllers/home.controller")



router.get("/login", login)
router.post("/ logincredentials",  logincredentials)


module.exports=router



