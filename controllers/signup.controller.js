
const User = require("../models/User")

module.exports={
   
    signup:function(req, res){
        res.render("signup", {data:"signup"})

    },

    createaccount:function(req,res){
        const body = req.body;
  
    const user = new User({
      name: body.name,
      email: body.email,
      password: body.password
    
      
    });
  user.save().then(() => {
   console.log(req.body);
    res.redirect("/home")
    })
      
    }
    

}