const mongoose=require('mongoose');
const post=require('./post');
const { config } = require('dotenv');
config();
mongoose.connect(process.env.mongoDBURL);

const userSchema=mongoose.Schema({
    username:String,
    name:String,
    email:String,
    age:Number,
    password:String,
    posts:[
        {type:mongoose.Schema.Types.ObjectId,ref:'post'}
    ]
})

module.exports=mongoose.model('user',userSchema);