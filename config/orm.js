var connection = require("./connection.js");


// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection


var orm = { // orm is an object of which the first item is selectTodo

    selectTodo: function (mike) { // selectTODO is  a function called 'mike'
        var queryString = "SELECT * FROM burgers"; // which queries the db
        connection.query(queryString, function (err, result) { // first it has to connect, if it fails, throw err
            if (err) {
                throw err;
            }
            mike(result); //otherwise do callback
            // console.log(result);
        });
    },

    insertUno: function (newBurgerName, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        console.log(newBurgerName);
        connection.query(queryString, [newBurgerName], function (err, result) {
            
            if (err) {
                throw err;
            }
            callback(result);
            
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