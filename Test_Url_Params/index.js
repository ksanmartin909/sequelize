exports.handler = async (event, context, callback) => {
   
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    // };

    // console.log(event);
    callback(null, event)
};
