const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});



exports.handler = function(event, context, callback){

    const name = event['name']
    callback(null,name)
  
}