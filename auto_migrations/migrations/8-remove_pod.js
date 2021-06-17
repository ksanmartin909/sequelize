'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "pod_size" from table "Fishes"
 *
 **/

var info = {
    "revision": 8,
    "name": "remove_pod",
    "created": "2021-06-17T19:05:23.646Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["Fishes", "pod_size"]
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
