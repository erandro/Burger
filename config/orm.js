var connection = require(`./connection.js`);

var orm =
{
    selectAll: function (table, cb) {
        var queryString = "select * from " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, newBurgerInfo, cb) {
        var queryString = "insert into " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") values (";
        queryString += printQuestionMarks(newBurgerInfo.length);
        queryString += ") "

        connection.query(queryString, newBurgerInfo, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "update " + table;

        queryString += " set ";
        queryString += objToSql(objColVals);
        queryString += " where ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// used by ../models/burger.js
module.exports = orm;