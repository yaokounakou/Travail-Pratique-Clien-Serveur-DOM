window.onload = load;

function load() {

    let params = (new URL(document.location)).searchParams;
    let username = params.get('id');

    fetch("http://localhost:2000/profilUtilisateur/${id}")
    .then(reponse => {   
        return reponse.json()
    })
    .then (reponseJson => {
        
        let nomPrenomAge = document.getElementById('nom-prenom-age');
        nomPrenomAge.innerText(reponseJson.)
    })

}