window.onload = load;

let dataForm = new URLSearchParams(new FormData(target));

function load() {
    fetch("http://localhost:2000/profilUtilisateur/" + utilisateur)
    .then(reponse =>{
        return reponse.json()
    })
    .then(reponseJson => {

        let nomPrenomAge = document.getElementById("nom-prenom-age");
        let pseudoCourriel = document.getElementById("pseudo-courriel");
        let occupation = document.getElementById("occupation");
        let description = document.getElementById("description");


    })
}