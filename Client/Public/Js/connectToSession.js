function seConnecter(event) {
    
    event.preventDefault();

    let dataForm = new URLSearchParams(new FormData(event.target));

    fetch("http://localhost:3000/connexionUtilisateur", {
        method: "POST",
        body: dataForm
    })
    .then( reponse => {
        return reponse.json()
    })
    .then(reponseJson => {

        if(reponseJson.success) {
            window.location.href = "http://localhost:2000/profilUtilisateur" + JSON.stringify(reponseJson.username);
            console.log(reponseJson.username)
        }
        else {
            alert(reponseJson.erreur);
        }
    })

}