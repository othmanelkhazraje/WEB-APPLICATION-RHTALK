const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    domaine : {
        type : String,    
    },
    question : {
        type: String,
    },
    status : String
})

const Userdb = mongoose.model('question', schema);

module.exports = Userdb;