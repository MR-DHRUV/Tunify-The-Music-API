const mongoose = require('mongoose');


const KeySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },

})


const KeyStore = mongoose.model('key', KeySchema);
module.exports = KeyStore