const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});
const {number} = require('/opt/exportNumber');


exports.handler = function(event, context){
    const num = number();
    const name = event['name'];
    callback(null, num)
  
}