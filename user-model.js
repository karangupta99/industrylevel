const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    }
    
})

module.exports = mongoose.model("user",userSchema)
