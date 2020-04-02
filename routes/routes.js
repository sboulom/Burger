var burger = require("../models/burger")

function routes(app){

 app.get("/", function(req,res){
    burger.selectAll(function(data){
        res.render("index", {burgerData: data})
    })
 })
    app.post("/api/burger", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, false
    ], function(result) {
     console.log(result);
     res.redirect("/")
    });
  }),
  app.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: true
    }, condition, function(result) {
      console.log(results);
      res.sendStatus(200);
    });
  });

}
module.exports = routes