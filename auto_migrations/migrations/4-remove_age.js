'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "age" from table "Fishes"
 *
 **/

var info = {
    "revision": 4,
    "name": "remove_age",
    "created": "2021-06-17T17:20:22.163Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["Fishes", "age"]
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
