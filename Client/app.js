const path = require("path")
const open = require("open");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("Public"));

/*---------- GET des pages de connection et de création de compte ----------*/
app.get("/ouvrirUneSession", (req, rep) => {
    rep.sendFile(path.join(__dirname + "/Public/HTML/PagesAcceuil/connectToSession.html"))
})

app.get("/creerUnCompte", (req, rep) => {
    rep.sendFile(path.join(__dirname + "/Public/HTML/PagesAcceuil/createAccountForm.html"))
})

/*---------- ÉCOUTE DU SERVEUR ----------*/
app.listen(PORT, () => {
    open("http://localhost:3000/ouvrirUneSession");
    console.log("L'application du côté client s'exécute sur le port " + PORT)
})