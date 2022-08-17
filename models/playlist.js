const mongoose = require('mongoose');


const PlaylistSchema = new mongoose.Schema({
    playlistname : {
        type : String,
        required : true
    },
    category : {
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


const PlaylistStore = mongoose.model('playlist',PlaylistSchema);
module.exports = PlaylistStore;