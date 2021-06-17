'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "age" to table "Fishes"
 *
 **/

var info = {
    "revision": 2,
    "name": "add_age",
    "created": "2021-06-17T17:13:43.640Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Fishes",
        "age",
        {
            "type": Sequelize.INTEGER,
            "field": "age"
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
