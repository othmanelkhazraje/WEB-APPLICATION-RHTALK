const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,    
    },
    email : {
        type: String,
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('question', schema);

module.exports = Userdb;