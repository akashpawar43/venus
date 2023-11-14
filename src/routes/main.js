const express = require('express');
const Gallery = require('../models/Gallery')

const routes = express.Router()



routes.get("/",async (req,res)=>{
    res.render("index");
})

routes.get("/contact",async (req,res)=>{
    res.render("contact");
})

routes.get("/gallery",async (req,res)=>{
    const gallery = await Gallery.find();
    res.render("gallery",{
        gallery: gallery
    });
})

module.exports=routes;