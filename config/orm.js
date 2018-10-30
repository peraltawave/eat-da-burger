var connection = require("./connection.js");


// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection


var orm = { // var is an object of which the first item is selectAll

    selectTodo: function (callback) { // selectAll is also a function called 'callback'
        var queryString = "SELECT * FROM burgers"; // which queries the db
        connection.query(queryString, function (err, result) { // first it has to connect, if it fails, throw err
            if (err) {
                throw err;
            }
            callback(result); //otherwise do callback
            // console.log(result);
        });
    },

    insertUno: function (burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            // console.log(result);
        });
    },

    updateUno: function (id, callback) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            // console.log(result);
        });
    }
};

module.exports = orm;





// var orm = {
//     selectWhere: function(burgers, burger_name, valOfCol) {
//       var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//       connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//         if (err) throw err;
//         console.log(result);
//       });
//     }
// };


// `selectAll()`
// * `insertOne()`
// * `updateOne()`




















/* Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("cats", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("cats", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
 */