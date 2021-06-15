const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});



exports.number = ()  => {
    return "5";
};