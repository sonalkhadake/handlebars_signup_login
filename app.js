const express = require("express")
const app = express();
const port = process.env.PORT || 8000;
// const mongoose=require("mongoose");
const {engine} = require("express-handlebars")
const userRoute = require("./routes/user")
const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")

//midleware
app.use(express.static("public"))
app.use("", userRoute)
app.use("", loginRoute)
app.use("", signupRoute)

app.use(express.urlencoded({extended:false}));
app.use(express.json())

//handlebar
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



app.listen(port, ()=>{
    console.log("your server is running at port"+port)
})