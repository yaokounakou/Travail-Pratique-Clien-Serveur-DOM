function seConnecter() {
    var usernameOrEmailInput = document.forms['form']['usernameOrEmail'];
    var passwordInput = document.forms['form']['password'];
    
    var usernameOrEmailError = document.getElementById('usernameOrEmailError');
    var passwordError = document.getElementById('passwordError');
    
    var username = document.getElementById('usernameOrEmail').value;
    var password = document.getElementById('password').value;

    fetch("http://localhost:3000/utilisateurs")
    .then( reponse => {
        return reponse.json()
    })
    .then(utilisateurs => {
        for (i = 0; i < utilisateurs.length; i++) {
            // if (username != utilisateurs[i].Username || username != utilisateurs[i].Courriel) {
            //     usernameOrEmailInput.style.border = "2px solid #E12B38";
            //     usernameOrEmailInput.focus();
            //     usernameOrEmailError.style.display = "block";
            //     return false;
            // }
            // if (password == utilisateurs[i].Password) {
            //     passwordInput.style.border = "2px solid #E12B38";
            //     passwordInput.focus();
            //     passwordError.style.display = "block";
            //     return false
            // }
            if ((username == utilisateurs[i].Username || username == utilisateurs[i].Courriel) && (password == utilisateurs[i].Password)) {
                window.location.href = "http://localhost:2000/profilUtilisateur";
                return;
            }
        }
        usernameOrEmailInput.style.border = "2px solid #E12B38";
        usernameOrEmailInput.focus();
        usernameOrEmailError.style.display = "block";

        passwordInput.style.border = "2px solid #E12B38";
        passwordInput.focus();
        passwordError.style.display = "block";
        // alert("Nom d'utilisateur, Courriel ou Mot de passe invalide !")
    })
}