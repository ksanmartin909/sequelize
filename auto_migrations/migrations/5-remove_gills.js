'use strict';

var Sequelize = require('../nodejs/node_modules/sequelize');

/**
 * Actions summary:
 *
 * removeColumn "gills" from table "Fishes"
 *
 **/

var info = {
    "revision": 5,
    "name": "remove_gills",
    "created": "2021-06-17T17:21:56.503Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["Fishes", "gills"]
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
