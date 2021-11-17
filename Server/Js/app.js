const express = require("express");
const cors = require("cors");
const requetesKnex = require("./requetesKnex");

const PORT = process.env.PORT || 3000;
const app = expres();

app.use(cors());
app.use(express.urlencoded({extended: false}));

app.get("/etudiants", async(req, rep) => {
    try {
        let etudiants = await requeteKnex.getEtudiants();
        rep.status(200).json(etudiants);
        
    } catch (error) {
        rep.status(500).json();
    }
})