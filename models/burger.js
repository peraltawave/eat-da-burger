//  Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require('../config/orm.js');

var burger = {
    selectTodo: function (callback) {
        orm.selectTodo(function (res) {
            callback(res);
        });
    },

    insertUno: function (newBurger, callback) {
        orm.insertUno(newBurger, function (res) {
            callback(res);
        });
    },

    updateUno: function (id, callback) {
        orm.updateUno([id], function (res) {
            callback(res);
        });
    }
    
};

// Export the database functions for the controller (burgers_controller.js).

module.exports = burger;
