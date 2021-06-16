exports.handler = async (event, context, callback) => {
    const results ={
        'query_string': event['queryStringParameters']['query_string'],
        'url_params': event['pathParameters']['number']
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(results),
    };

    console.log(event);
    callback(null, response)
};
