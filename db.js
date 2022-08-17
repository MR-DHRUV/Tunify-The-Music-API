require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI = process.env.mongoURI;

const connectToMongo = () => {
    mongoose
        .connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`
            );
        })
        .catch(err => {
            console.error("Error connecting to mongo", err);
        });
}

module.exports = connectToMongo;