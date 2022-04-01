const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const {signup, createaccount }= require("../controllers/home.controller");




router.get("/signup", signup)
router.post("/createaccount", createaccount)


module.exports=router

