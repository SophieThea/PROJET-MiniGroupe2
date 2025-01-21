const express = require('express');
const bp = require('body-parser');
const mysql = require('mysql');
const path = require('path');

// Initialisation de l'application
const app = express();
const PORT = 3020;

// Configuration de la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetnodejs'
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion avec la base de données :', err.stack);
        return;
    }
    console.log('Connexion réussie, ID du thread :', projetnodejs.threadId);
});

// Middleware
app.use(bp.json());
app.use(express.static('public'));

// Route pour ajouter un utilisateur
app.post('/api/user', (req, res) => {
    const { prenom, nom, login, password } = req.body;
    const sql = "INSERT INTO user (prenom, nom, login, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [prenom, nom, login, password], (error, result) => {
        if (error) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
            res.status(500).send('Erreur lors de l\'ajout de l\'utilisateur');
            return;
        }
        res.status(200).send('Utilisateur ajouté avec succès');
    });
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
//Mado rempli les choses de la base de donnée s'il te plait
// Exemple : Nom ,  prenom etc..... 
