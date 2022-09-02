const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect('mongodb+srv://yoda:starwars!_@cluster0.nlo1erh.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology:
true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('starwars-quotes')
        const quotesCollection = db.collection('quotes')
        app.use(bodyParser.urlencoded({ extended: true }));
        app.get('/', (req, res) =>{res.sendFile(__dirname + '/index.html');})
        app.post('/quotes', (req, res) =>{
            quotesCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/') // after the action, the program restart, but the value is stored at the db
                console.log(result);
            })
            .catch(error => console.error(error));
            console.log(req.body);})
        app.listen(3000, function() {console.log('Listening on port 3000');})
    })
    .catch(console.error)


// Middlewares




// Handlers





