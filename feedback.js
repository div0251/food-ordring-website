const { default: mongoose } = require("mongoose");
const feedbackschema=new mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String
    },
    rating:{
        type:String
    },
    comments:{
        type:String
    },

  
   
})
const feedback= mongoose.model('feedbackdata',feedbackschema)
module.exports=feedback