module.exports={
    homepage:function(req, res){
        res.render("home", {data:"Homepage"})

    },
    login:function(req, res){
        res.render("login", {data:"login"})

    },
    signup:function(req, res){
        res.render("signup", {data:"signup"})

    }

}