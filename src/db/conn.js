const mongoose = require('mongoose');
require('dotenv').config();
const CONNECTDB = process.env.CONNECT;

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTDB, () => {
    console.log("db connected")

    // for inserting data to database     
    // copy and paste code from db.js file (save and run it only once and after that remove it)


    // sample code
    // Gallary.create([
    //     {
    //         category:'category1',
    //         link:'./static/images/in/in-6.jpg'
    //     }
    // ])
    
})