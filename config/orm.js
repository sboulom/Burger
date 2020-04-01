var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cbModel){
        connection.query("SELECT * FROM ??", tableName, function(err, data){
         cbModel(data)
        }) 
    }
}


module.exports = orm









// selectAll()
// insertOne()
// updateOne()
module.exports = orm;