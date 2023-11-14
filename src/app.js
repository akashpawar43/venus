const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express();
// const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const routes = require('./routes/main');


// connecting databse
require('./db/conn');



// environment setup
require('dotenv').config();
const PORT = process.env.PORT;
const CONNECTDB = process.env.CONNECT;



// models
const Gallary = require('./models/Gallery');



// to get the data from website
app.use(bodyparser.urlencoded({
    extended:true
}))



app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, '/../views'));
app.use(express.static(__dirname + '/../public'));
hbs.registerPartials("views/partials")

app.use('', routes)



app.listen(PORT, () => {
    console.log("server started");
})