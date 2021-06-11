const mysql = require('mysql2');


exports.handler =  (event, context, callback) => {
  
  const connection  = mysql.createConnection({
      host : 'sequelize-test2-instance-1.c1vi0b0qtajg.us-east-2.rds.amazonaws.com',
      user : 'admin',
      password : 'PassioN12345**',
      database :'sequelizeTestDB',
    });

    connection.query('SELECT * from Customers', function (error, results, fields) {
      // And done with the connection.
      connection.release();
      // Handle error after the release.
      if (error) callback(error);

      else callback(null,results[0].Name);

  });
};