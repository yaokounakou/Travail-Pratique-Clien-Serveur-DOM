-- Requêtes SQLite

/*----------Création de la table des comptes utilisateurs----------*/
CREATE TABLE Utilisateurs (
Nom VARCHAR(30),
Prénom VARCHAR(30),
Username VARCHAR(15),
Password VARCHAR(15),
Âge INT,
Occupation VARCHAR(50),
Description TEXT,
Courriel VARCHAR(100)
)

/*----------Affichage----------*/
SELECT * FROM Utilisateurs
DELETE FROM Utilisateurs
DROP TABLE Utilisateurs