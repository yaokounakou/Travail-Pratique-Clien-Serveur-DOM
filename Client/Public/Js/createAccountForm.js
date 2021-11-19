function creerUnCompte(event) {

    event.preventDefault();

    let dataForm = new URLSearchParams(new FormData(event.target));

    fetch("http://localhost:3000/utilisateur", {method: "POST", body: dataForm})
    .then( reponse => {
        return reponse.json()
    })
    .then(reponseJson => {

        if(reponseJson.success) {
            alert("Votre compte a bien été créé. Cliquez pour vous connecter.");
            window.location.href = "http://localhost:2000/ouvrirUneSession"
        }
        else {
            alert("Une erreur s'est produite. Réessayez à nouveau. " + reponseJson.erreur)
        }

    })
}