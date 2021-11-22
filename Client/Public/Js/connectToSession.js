const Username = document.getElementById('usernameOrEmail');
const Password = document.getElementById('password');

function seConnecter() {
    
    fetch("http://localhost:3000/utilisateurs")
    .then( reponse => {
        return reponse.json()
    })
    .then(utilisateurs => {
        for (i=0; i < utilisateurs.length; i++) {
            if ((Username == utilisateurs[i].Username || Username == utilisateurs[i].Courriel) && (Password == utilisateurs[i].Password)) {
                window.location.href = "http://localhost:2000/profilUtilisateur";
            }
            else {
                alert("Erreur" + reponseJson.erreur);
            }
        }
    })
}