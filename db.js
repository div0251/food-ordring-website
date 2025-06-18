const { default: mongoose } = require("mongoose");
const contactschema=new mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String
    },
   mobile  :{
        type:Number
    },
    date:{
        type:String
    },

     time:{
        type:String
    },
     guest:{
        type:Number
    },
})
const contact= mongoose.model('contact',contactschema)
module.exports=contact