var orm = require ("../config/orm")
var burger = {
  selectAll: function(cbRoutes){
    orm.selectAll("burger",function(data){
      cbRoutes(data)
    })
  }
}


module.exports = burger