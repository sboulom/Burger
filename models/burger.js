var orm = require ("../config/orm")
var burger = {
  selectAll: function(cbRoutes){
    orm.all("burger",function(data){
      cbRoutes(data)
    })
  },
  create: function(cols, vals, cbRoutes) {
   orm.create("burger", cols, vals, function(res){
     cbRoutes(res);
   })
  },
  update: function(objColVals, condition, cbRoutes){
    orm.update("burger", objColVals, condition, function(res){
      cbRoutes(res);
    })
  },
  delete: function(condition, cbRoutes){
    orm.delete("burger", condition, function(res){
      cbRoutes(res);
    })
  }
}


module.exports = burger
