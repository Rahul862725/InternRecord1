const express =require('express')
const bodyParser =require('body-parser')
const cors = require('cors')
const user=require('./models/user')
const { aesEncy1 , aesDec1 } = require('./aes')
 
 

const app =express()
const PORT =process.env.PORT|| 4000;

app.unsubscribe(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

require('./config')

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

app.get('/',(req,res)=>{
    
    res.send("Welcome!")
})
//Signup Page
app.post('/signup',async(req,res)=>{
    const data=req.body;
    console.log("Data is:", req.body)
    const key = makeid(32)
    const iv = makeid(16)
    const obj={
        Name:data.name,
        Email:data.email,
        Password:data.password,
        Key:key,
        Iv:iv
    }
    const dataUser=await user.find({Email:data.email});
  
    if(dataUser.length!=0)
    res.json(2);
    else{
        try{
    await user.create(obj)
      res.json(1)
        }
        catch(err)
        {
            console.log(err)
            res.json(0)
        }
    }

})

//Login Page
app.post('/login',async(req,res)=>{
    const data=req.body;
    const obj={
        Email:data.email,
        Password:data.password
    }
    
   const user1=await user.find(obj);
   if(user1.length==0)
   res.json({data:0})
   else
  {  
   
  res.json({data:1,id:user1[0]._id});}

})

app.post('/encrypt',async(req,res)=>{
    const data= req.body
    
    const user1 = await user.find({_id:data.id})
    console.log(user1)
    const enData = await aesEncy1(data.encData ,user1[0].Key, user1[0].Iv)
    // const data1 = await aesEncy(data.encData,user1[0].Iv)
    // console.log(data1)
    console.log(enData)
    res.json(enData)
    res.end()
})

app.post('/decrypt',async(req,res)=>{
    const data= req.body
    console.log(data)
    const user1 = await user.find({_id:data.id})
    const decData =  await aesDec1(data.decData,user1[0].Key, user1[0].Iv)
    res.json(decData)
    res.end()
}) 
 
app.listen(PORT,()=>{
   
    const data =aesEncy1("bhot buri galti. oye kya bat h kya chiz h baba","Thats my Kung Fu","sdsd")
    console.log(data)
    console.log(aesDec1(data,"Thats my Kung Fu","jkgj"))
    console.log(`Runing at http//localhost:${PORT}`)
})

