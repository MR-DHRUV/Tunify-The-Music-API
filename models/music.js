const mongoose = require('mongoose');


const MusicSchema = new mongoose.Schema({
    songname : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    artist : {
        type : String,
        required : true

    },
    url : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },

})


const MusicStore = mongoose.model('music',MusicSchema);
module.exports = MusicStore;