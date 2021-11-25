window.onload = load;

const utilisateur = localStorage.getItem('utilisateur')

function load() {
    fetch("http://localhost:2000/profilUtilisateur/" + utilisateur)
    .then(reponse =>{
        return reponse.json()
    })
    .then(reponseJson => {

        let nomPrenomAge = document.getElementById("firstInfo1");
        let pseudoCourriel = document.getElementById("firstInfo2");
        let occupation = document.getElementById("occupation");
        let description = document.getElementById("secondInfo2");

        let 

    })
}