var orm = require('../config/orm')
var burger = {
  selectAll: function(cbRoutes) {
    orm.all('burger', function(data) {
      cbRoutes(data)
    })
  },
  create: function(cols, vals, cbRoutes) {
    orm.create('burger', cols, vals, cbRoutes)
  },
  update: function(objColVals, condition, cbRoutes) {
    orm.update('burger', objColVals, condition, cbRoutes)
  },
  delete: function(condition, cbRoutes) {
    orm.delete('burger', condition, cbRoutes)
  }
}

module.exports = burger
