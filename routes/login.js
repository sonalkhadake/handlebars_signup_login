const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const {login}= require("../controllers/user.controller")



router.get("/login", login)


module.exports=router



