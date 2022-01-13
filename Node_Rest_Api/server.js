const express = require('express');
const mongoose = require('mongoose')
const app = express();
var bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.listen(3000,()=>{console.log('listening port 3000')});

let url = 'mongodb://127.0.0.1/payment_history';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
let dbo = mongoose.connection;
dbo.on("open", function() {
    console.log("MongoDB database connection established successfully");
  });
dbo.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/getAllPayments',(req,res)=>{
    dbo.collection("payments").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        //db.close();
      });
});

app.post('/getAllPayments',(req,res)=>{
  const query = { status: req.body.search};

  console.log(query)
})

