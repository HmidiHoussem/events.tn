var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'jaw'
});
connection.connect((err)=>{
  if (err){
    console.log(err);

  }
  else console.log(`connected to DataBase  `);
})

module.exports = connection;