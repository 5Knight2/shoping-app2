const mysql=require('mysql2')

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'project1',
    password:'Password@123'
});

module.exports=pool.promise();

