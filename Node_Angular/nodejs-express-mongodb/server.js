const express = require('express');
const cors = require('cors');
const db = require('../models');
const { url } = require('./db.config');
const mongoose = require('mongoose');
const app = express();

let corsOption = {
    origin:'http://localhost:5060'
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({message:'Welcome to my page'})
});

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}` )
})

db.mongoose.connect(db,url,{

})
.then(()=>{
    console.log('Connected to db');
})
.catch(err=>{
    console.log('Cannot connect to db');
    process.exit();
});

