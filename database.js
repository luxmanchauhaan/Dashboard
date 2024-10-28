const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password :'password',
    database :'mydatabase'
})

function querry(querryString, callback){
    pool.getConnection((error, connection) =>{
        if(error){
            console.error('Error establishingh database connection:', error);
            callback(error, null);
            return;
        }
        connection.querry(querryString,(err, results) =>{
            connection.release();

            if(err){
                console.error('Error executing database querry:',err);
                callback(err.null);
                return;
            }
            callback(null, results);
        });
    });
}

module.exports = {
    querry
}