var burgerData = require("../models/burger")
var burger = {
selectAll: function(cbRoutes){
    burgerData.selectAll("burger",function(data){
      cbRoutes(data)
    })
  }
}
module.exports = burger;