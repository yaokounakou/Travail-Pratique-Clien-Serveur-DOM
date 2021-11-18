const cors = require("cors");
const express = require("express");
const requetesKnex = require("./Js/requetesKnex");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));

/*---------------  ---------------*/

app.post("/utilisateur", async(req, rep) => {
    try {
        
        let utilisateur = {
            "Nom": req.body.Nom,
            "Prénom": req.body.Prenom,
            "Username": req.body.Username,
            "Âge": parseFloat(req.body.Age),
            "Occupation": req.body.Occupation,
            "Description": req.body.Description,
            "Courriel": req.body.Courriel
        }

        await requetesKnex.ajouterUnUtilisateur(utilisateur);

    } catch (error) {

        rep.status(500).json({
            success: false,
            erreur: error
        });

    }
})

/*---------------  ---------------*/

app.listen(PORT, () => {
    console.log("L'application du côté serveur s'exécute sur le port " + PORT)
})