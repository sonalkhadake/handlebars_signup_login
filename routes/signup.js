const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const {signup}= require("../controllers/user.controller")



router.get("/signup", signup)


module.exports=router

