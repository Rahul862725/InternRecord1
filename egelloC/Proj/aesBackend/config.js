const mongoose = require('mongoose')

const url=process.env.ATLAS_URL||'mongodb://localhost:27017/clc'
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Mongodb Connection Successfully!")
})