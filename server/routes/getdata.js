const express = require('express');

var sql = require('mssql');

var dbconection =   {
  server:"GUR-30219",

        user: 'manpreetadm', 
        password: 'Admin@123'  ,
 
  database:"Employees",
  port:1433
};

   
function getdata()
{
    var conn = new sql.ConnectionPool(dbconection);  
    conn.connect(function(err){
        if (err) throw err;
        var req =  new sql.Request(conn);
        req.query("select * from salary",function(err, recordset){
        if (err) throw err;
        else
        console.log(recordset);
        conn.close();
        }); 
        });
}

getdata();



const router = express.Router();

router.get('/',(req,res)=>{

res.send('Get Works');

});

module.exports = router;