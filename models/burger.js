//  Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require('../config/orm.js');
var burger = {
    selectTodo: function (callback) {
        orm.selectTodo(function (res) {
            callback(res);
        });
    },

    insertUno: function (callback) {
        orm.insertUno(function (res) {
            callback(res);
        });
    },

    updateUno: function (callback) {
        orm.updateUno(function (res) {
            callback(res);
        });
    }
    
};

// Export the database functions for the controller (burgers_controller.js).

module.exports = burger;
