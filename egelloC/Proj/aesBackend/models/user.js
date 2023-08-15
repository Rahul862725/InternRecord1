const mongoose =require('mongoose')

const Schema = mongoose.Schema;
const userSchema =Schema({
      Name:{required:true, type:String},
      Email:{required:true, type:String},
      Password: {required:true,type:String},
      Key: {required:true,type:String},
      Iv: {required:true, type:String}
})

const user=mongoose.model('AESUser',userSchema);
 module.exports=user;