const cors = require("cors");
const express = require("express");
const requetesKnex = require("./Js/requetesKnex");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));

app.set("json spaces", 2);

/*---------------  ---------------*/
app.get("/utilisateurs", async(req, rep) => {
   
    try {
        let utilisateurs = await requetesKnex.voirUtilisateurs();
        rep.status(200).json(utilisateurs);
        
    } catch (error) {
        rep.status(500).json();
    }

})

app.post("/utilisateur", async(req, rep) => {
    
    try {
        
        if (req.body.Nom !== "") {

            let utilisateur = {
                "Nom": req.body.Nom,
                "Prénom": req.body.Prénom,
                "Username": req.body.Username,
                "Password": req.body.Password,
                "Âge": parseInt(req.body.Âge),
                "Occupation": req.body.Occupation,
                "Description": req.body.Description,
                "Courriel": req.body.Courriel
            }
            
            await requetesKnex.ajouterUnUtilisateur(utilisateur);
            rep.status(200).json({
                success: true
            });

        } else {

            rep.status(200).json({
              success: false,
              error: "L'utilisateur ne doit pas être vide"
            });

        }
        
    } catch (error) {

        rep.status(500).json({
            success: false,
            erreur: error
        });

    }
})

app.post("/connexionUtilisateur", async(req, rep) => {
    
    try {
        
        let connexion = false;

        const userConnexion = {
            username: req.body.usernameOrEmail,
            password: req.body.password
        }

        console.log(userConnexion.username);

        const donnees = await requetesKnex.voirUtilisateurs();

        for (i = 0; i < donnees.length; i++) {
            if ((userConnexion.username == donnees[i].Username || userConnexion.username == donnees[i].Courriel) && (userConnexion.password == donnees[i].Password)) {
                console.log("Hello")
                rep.status(200).json({
                    success: true
                });
                connexion = true;
                return userName = userConnexion.username;
                // return
            }
        }
        if (!connexion) {
            rep.status(200).json({
                success: false,
                erreur: "Nom d'utilisateur, courriel ou mot de passe invalide."
            });
        }

    } catch (error) {

        rep.status(500).json({
            success: false,
            erreur: error
        });

    }
})

/*---------------  ---------------*/

app.listen(PORT, () => {
    console.log("L'application du côté serveur s'exécute sur le port " + PORT + ".")
})