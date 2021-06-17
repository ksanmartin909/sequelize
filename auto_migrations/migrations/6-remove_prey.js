'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "prey" from table "Fishes"
 *
 **/

var info = {
    "revision": 6,
    "name": "remove_prey",
    "created": "2021-06-17T18:47:21.527Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["Fishes", "prey"]
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
