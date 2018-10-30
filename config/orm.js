////////////////////////////////
// works on localhost 8080 


////////////////////////////////
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
            // console.log(result);
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


    // Ahhhhh ok, so I get it now
    // i am defining the updatedUno object, which is a function, with a bunch of stuff
    // you can see this because it has the ':' after updateUno - after the ':' are its attributes
    // updateUno: param1 which is a function using updatedID, callback


    // basically had to create my own variable as the request: updatedID
    updateUno: function (updatedId, callback) { //this is my function being called and passed variable and result
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?"; //query the server
        console.log(updatedId); // log the value that has been set to updatedID
        connection.query(queryString, [updatedId], function (err, result) { // connect again ??? what happens here?

            if (err) {
                throw err;
            }
            callback(result);

        });
    }


    // all of the code below was me working, experimenting, failing
    //////////////////////////////////////////////////////////////////////////////
    // updateUno: function (id, callback) {
    //     var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    //     console.log(queryString);

    //     connection.query(queryString, [id], function (err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         callback(result);
    //     });
    // }




    // who knows what I am doing here. i missed a key part, which was to declare my own variable
    //////////////////////////////////////////////////////////////////////////////////////
    // updateUno: function (id, callback) {
    //     var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    //     console.log(queryString);

    //     connection.query(queryString, [id], function (err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         callback(result);
    //         // console.log(result);
    //     });
    // }
};

module.exports = orm;