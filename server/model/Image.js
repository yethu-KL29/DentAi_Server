const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },
    
 
    img: {
        data: Buffer,
        contentType: String,
    }
   
    
});

module.exports = new mongoose.model('Image', imageSchema);