window.onload = load;

const utilisateur = localStorage.getItem('utilisateur')

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

        let section1 = document.createElement("h1");
        nomPrenomAge.appendChild(section1)

    })
}