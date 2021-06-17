'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "pod_size" to table "Fishes"
 *
 **/

var info = {
    "revision": 7,
    "name": "add_pod",
    "created": "2021-06-17T18:56:20.450Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Fishes",
        "pod_size",
        {
            "type": Sequelize.INTEGER,
            "field": "pod_size"
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
