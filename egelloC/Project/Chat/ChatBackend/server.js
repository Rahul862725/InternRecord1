const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose=require('mongoose')


const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

// module
const chat = require('./Module/chat')

// connect to mongodb
const url = process.env.ATLAS_URL || 'mongodb://localhost:27017/chat'
mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.once('open', ()=>{
  console.log("Mongodb Connection Successfully!")
})

// Routes
app.get('/',(req,res)=>{
  res.send("Working Fine!")
})

app.post('/all',async (req, res, next)=>{
    res.send(await chat.find({name:req.body.name}))
})

app.post('/add', async (req, res, next)=>{

  const obj = {
    name: req.body.name,
    message: req.body.message
  }
 console.log(obj)
  await chat.insertMany(obj).then(()=>{
    console.log("Successfully Inserted");
    res.json("ok")
  }).catch((err)=>{
    console.log("Error is: ",err)
    res.send("Error")
  })
   

})

app.listen(PORT,()=>{
  console.log(`Server runing on http://localhost:${PORT}`)
})