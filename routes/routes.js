var burger = require("../models/burger")

function routes(app){

 app.get("/", function(req,res){
    burger.selectAll(function(data){
        res.render("index", {burgerData: data})
    })
 })



}

module.exports = routes