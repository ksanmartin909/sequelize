exports.handler =  (event, context, callback) => {
    const results ={
        'query_string': event['queryStringParameters']['query_string'],
        'url_params': event['pathParameters']['number'],
        'req_body': JSON.parse(event['body'])['name'],
    };
    
  
    const response = {
        statusCode: 200,
          body: JSON.stringify(results)
    };

    console.log(event);
    callback(null, response);
};
