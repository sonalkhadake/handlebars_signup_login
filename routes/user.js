const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const {homepage}= require("../controllers/user.controller")



router.get("/home", homepage)


module.exports=router