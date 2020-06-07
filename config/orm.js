var connection = require("./connection.js");

var orm = {
  selectAll: function (table) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function (table, bName, eaten) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, ??)";

    connection.query(queryString, [table, bName, eaten], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function (table, col, id) {
    var queryString = "UPDATE ?? SET ?? WHERE ??";

    connection.query(queryString, [table, col, id], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;
