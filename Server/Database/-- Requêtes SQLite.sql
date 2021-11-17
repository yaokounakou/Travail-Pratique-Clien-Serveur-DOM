-- Requêtes SQLite

/*----------Création de la table des comptes utilisateurs----------*/
CREATE TABLE Utilisateurs (
Id INT NOT NULL,
Nom VARCHAR(30) NOT NULL,
Prénom VARCHAR(30) NOT NULL,
Username VARCHAR(15) NOT NULL,
Âge INT NOT NULL,
Occupation VARCHAR(50) NOT NULL,
Description TEXT NOT NULL,
Courriel VARCHAR(100) NOT NULL
)

/*----------Insertion d'utilisateurs dans la base de données----------*/
INSERT INTO Utilisateurs VALUES
(1, 'Boese', 'Adam N.', 'adamBoese', 36, 'Policier', "Un policier Écouter ou agent de police Écouter est un membre de la police, qu'il porte ou non l'uniforme et dont la fonction est de faire respecter la loi, de maintenir l'ordre et d'assurer la sécurité publique.",'adamboese@armyspy.com'),
(2, 'Kiser', 'Katherine B.', 'kathKiser', 28, 'Journaliste', "Un journaliste est une personne qui recueille ou recherche, vérifie et écrit puis distribue des informations sur tout type de support média (presse écrite, radio, TV et les technologies de l'information et de la communication du Web).",'katherinekiser@dayrep.com'),
(3, 'Sheppard', 'Matthew C.', 'matthewSheppard', 73, 'Astronome', "L’astronome étudie le système céleste, l'origine et l'évolution de l'Univers. Il ou elle peut faire le choix de se spécialiser dans l'astrométrie (position et mouvement des astres),la mécanique céleste (lois régissant le mouvement des astres) ou l'astrophysique (physique appliquée à l'astronomie).",'matthewSheppard@nasa.com');

/*----------Affichage----------*/
SELECT * FROM Utilisateurs