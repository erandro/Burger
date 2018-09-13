var connection = require(`./connection.js`);

var orm =
{
    selectAll: function () {
        var queryString = "select * from burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (newBurger) {
        var queryString = "insert into burgers (burger_name) values (?)";
        connection.query(queryString, [newBurger], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (changeBurger, burgerID) {
        var queryString = "update burgers set burger_name = ? where id = ?";
        connection.query(queryString, [changeBurger, burgerID], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;