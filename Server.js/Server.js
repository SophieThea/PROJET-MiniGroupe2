const express = require('express');
const bp = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const express = require('express');
const Joi = require('joi'); // Importer Joi
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



// Initialisation de l'application
const app = express();
const PORT = 3000;

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






// Route pour ajouter un patient
app.post('/api/user', (req, res) => {
    const {Nom, Prenom, Age, Tel,Sexe, Nationalité} = req.body;
    const sql = "INSERT INTO user (Nom, Prenom, Age, Tel,Sexe, Nationalité) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [Nom, Prenom, Age, Tel,Sexe, Nationalité], (error, result) => {
        if (error) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
            res.status(500).send('Erreur lors de l\'ajout de l\'utilisateur');
            return;
        }
        res.status(200).send('Utilisateur ajouté avec succès');
    });
});




// Routes pour les dossiers
app.post('/api/dossiers', (req, res) => {
    const {Date_creation} = req.body; // Assurez-vous que ces champs correspondent à votre formulaire
    const query = 'INSERT INTO dossiers (Date_creation) VALUES (?)';
    db.query(query, [Date_creation], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout du dossier.', error: err });
      } else {
        res.status(201).json({ message: 'Dossier ajouté avec succès.' });
      }
    });
  });
  
  app.get('/api/dossiers', (req, res) => {
    const query = 'SELECT * FROM dossiers';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des dossiers.', error: err });
      } else {
        res.json(results);
      }
    });
  });
  







// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});





//Mado rempli les choses de la base de donnée s'il te plait
// Exemple : Nom ,  prenom etc..... 
