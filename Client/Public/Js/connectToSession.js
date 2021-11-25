function seConnecter(event) {
    
    event.preventDefault();

    let dataForm = new URLSearchParams(new FormData(event.target));

    const error = document.getElementById("usernameEmailOrPasswordError");


    fetch("http://localhost:3000/connexionUtilisateur", {
        method: "POST",
        body: dataForm
    })
    .then( reponse => {
        return reponse.json()
    })
    .then(reponseJson => {

        if(reponseJson.success) {
            window.location.href = "http://localhost:2000/profilUtilisateur/?id=" + reponseJson.username;
            console.log(reponseJson.username)
        }
        else {
            error.style.display = "block";
        }
    })

}