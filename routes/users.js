var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});
router.post('/login', function(req, res, next) {
 
  
  res.send("Sucess!!!!!!!!!!!!")

  MongoClient.connect("mongodb://localhost:27017",(err,clint)=>{
    if(err)
    {
      console.log("Data base failed")
    }
    else
    {
      console.log("Data base connected sucessfully...")
      console.log(req.body)
      clint.db("Newdata").collection("azadas").insertOne(req.body)
    }
  })
  

});



module.exports = router;
