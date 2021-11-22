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

/*----------Insertion d'utilisateurs dans la base de données----------*/
INSERT INTO Utilisateurs VALUES
('Boese', 'Adam N.', 'adamBoese', 'adamBoese', 36, 'Policier', "Un policier Écouter ou agent de police Écouter est un membre de la police, qu'il porte ou non l'uniforme et dont la fonction est de faire respecter la loi, de maintenir l'ordre et d'assurer la sécurité publique.",'adamboese@armyspy.com'),

('Kiser', 'Katherine B.', 'kathKiser', 'kathKiser', 28, 'Journaliste', "Un journaliste est une personne qui recueille ou recherche, vérifie et écrit puis distribue des informations sur tout type de support média (presse écrite, radio, TV et les technologies de l'information et de la communication du Web).",'katherinekiser@dayrep.com'),

('Sheppard', 'Matthew C.', 'matthewSheppard', 'matthewSheppard', 73, 'Astronome', "L’astronome étudie le système céleste, l'origine et l'évolution de l'Univers. Il ou elle peut faire le choix de se spécialiser dans l'astrométrie (position et mouvement des astres),la mécanique céleste (lois régissant le mouvement des astres) ou l'astrophysique (physique appliquée à l'astronomie).",'matthewSheppard@nasa.com');

/*----------Affichage----------*/
SELECT * FROM Utilisateurs

-- DROP TABLE Utilisateurs