const mysql = require(`mysql2`);
require(`dotenv`).config();


const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
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