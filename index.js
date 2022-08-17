const connectToMongo = require('./db')
const fs = require('fs');
// const path = -require('');
const path = require('path')
const cors = require('cors')
const express = require("express");
const app = express();
const port = 5000;
const bodyparser = require('body-parser')
const KeyStore = require("./models/apikeys")
const { body, validationResult } = require('express-validator');
const http = require("http");
const md5 = require('md5');
const nodemailer = require('nodemailer');
const authifyMailer = require('./authifyMailer');
const MusicStore = require('./models/music');


setInterval(function () {
    http.get("http://shotifylink.herokuapp.com/awake");
}, 100000);


app.use(express.static('static'))
app.use(bodyparser.json()); // support json encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies


connectToMongo();

// create new user
app.post('/user/new', [
    body('email', 'Enter a valid email address').isEmail(),
    body('name', 'Enter a valid name of length between 3 and 20').isLength({ min: 3, max: 20 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        console.log(errors)
        return res.json({ message: errors.errors[0].msg })
    }

    const user = await KeyStore.findOne({ email: req.body.email });

    if (user) {
        return res.json({ message: "User with given email address already exists" })
    }

    try {

        const keyGen = String(Date.now() + req.body.email);
        const apiKey = await md5(keyGen);

        const userIdGen = String(req.body.email + Date.now() + "45456561" );
        const usersId = await md5(userIdGen);

        let newUser = await KeyStore.create({
            email: req.body.email,
            key: apiKey,
            name: req.body.name,
            userId: usersId,
        })

        await authifyMailer(req.body.email, "API Key for Tunify", `API Key : ${apiKey}`)


        res.status(200).json({ message: "Account created successflly, Please check your email for api key" });




    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
})


// add new song
app.post('/music/new', [
    body('apiKey', 'Invalid key').isString(),
    body('apiKey', 'Invalid key').isLength({ min: 32, max: 32 }),
    body('songname', 'Enter a valid songname').isLength({ min: 1, max: 200 }),
    body('category', 'Enter a valid category').isLength({ min: 1, max: 100 }),
    body('artist', 'Enter a valid artist').isLength({ min: 1, max: 100 }),
    body('url', 'Enter a valid link to song').isURL(),
], async (req, res) => {



    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        console.log(errors)
        return res.json({ message: errors.errors[0].msg })
    }


    const apikey = await KeyStore.findOne({ key: req.body.apiKey });

    if (!apikey) {
        return res.status(400).json({ message: "Invalid API key" });
    }

    const existingMusic = await MusicStore.findOne({ songname: req.body.songname });
    const existingMusicArtist = await MusicStore.findOne({ artist: req.body.artist });



    if (existingMusic && existingMusicArtist) {
        return res.json({ message: "Song already exists" })
    }

    try {

        let newSong = await MusicStore.create({
            songname: req.body.songname,
            category: req.body.category,
            artist: req.body.artist,
            url: req.body.url,
            username: apikey.userId,
        })


        res.status(200).json({ newSong, message: "Song Saved" });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
})


// get all music
app.get('/music/all', async (req, res) => {

    try {

        let Songs = await MusicStore.find({});
        res.status(200).json({ Songs });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
})


// get users music
app.get('/user/music', [
    body('apiKey', 'Invalid key').isString(),
    body('apiKey', 'Invalid key').isLength({ min: 32, max: 32 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        console.log(errors)
        return res.json({ message: errors.errors[0].msg })
    }


    const apikey = await KeyStore.findOne({ key: req.body.apiKey });

    if (!apikey) {
        return res.status(400).json({ message: "Invalid API key" });
    }

    try {

        let Songs = await MusicStore.find({username : apikey.userId });
        res.status(200).json({ Songs });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
})


// search song by category
app.get('/music/category/:category', async (req, res) => {
    if (!req.params.category) {
        res.status(400).json({ message: "No results" });
    }
    try {

        let Songs = await MusicStore.find({ category: req.params.category });
        if (Songs.length === 0) {
            return res.status(200).json({ message: "No Song Found" })
        }
        res.status(200).json({ Songs });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
})

// search song by name
app.get('/music/search/:query', async (req, res) => {
    if (!req.params.query) {
        return res.status(400).json({ message: "No results" });
    }
    try {
        let Songs = await MusicStore.find({ songname: req.params.query });

        if (!Songs.length === 0) {
            return res.status(400).json({ message: "No Song Found" })
        }
        res.status(200).json({ Songs });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
})


// search song by artist
app.get('/music/artist/:query', async (req, res) => {
    if (!req.params.query) {
        return res.status(400).json({ message: "No results" });
    }
    try {
        let Songs = await MusicStore.find({ artist: req.params.query });

        if (!Songs.length === 0) {
            return res.status(400).json({ message: "No Song Found" })
        }
        res.status(200).json({ Songs });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
})



app.listen(process.env.PORT || port, () => {
    console.log(`Server started on  port ${port}`);
})


