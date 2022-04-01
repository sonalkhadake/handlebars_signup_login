const express = require("express")
const app = express();
const port = process.env.PORT || 8000;
const mongoose=require("mongoose");
// var bodyParser = require('body-parser')
const {engine} = require("express-handlebars")
const userRoute = require("./routes/home")
const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")

//midleware
app.use(express.static("public"))
app.use("", userRoute)
app.use("", loginRoute)
app.use("", signupRoute)
app.use(express.json())
app.use(express.urlencoded({extended:false}));


//handlebar
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//database connection
//IVN3dTbeldwbSI3S
mongoose.connect("mongodb+srv://sonalikhadake:IVN3dTbeldwbSI3S@cluster0.76scx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
    console.log("connection is success")
}).catch(err=>{
    console.log(err);
})



app.listen(port, ()=>{
    console.log("your server is running at port"+port)
})