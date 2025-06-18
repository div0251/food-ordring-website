const { default: mongoose } = require("mongoose");
const orderdataschema=new mongoose.Schema({
    food:{
        type:String
        
    },
    quantity:{
        type:String
    },
    name:{
        type:String
    },
    mobile:{
        type:String
    },

   address  :{
        type:String
    },
    
     pay :{
        type:String
     }
})
const orderdata= mongoose.model('orderdata',orderdataschema)
module.exports=orderdata