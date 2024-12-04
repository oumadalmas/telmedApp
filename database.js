const mysql = require(`mysql2`);
require(`dotenv`).config();


const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
})

db.getConnection((err, result)=>{
    if(!err){
        console.log(`Database Started`);
        
    }else{
        console.log(err)
        
    }
})

module.exports = db