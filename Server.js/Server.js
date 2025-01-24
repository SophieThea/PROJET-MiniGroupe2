/*const express = require('express');
const bp = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const express = require('express');
const Joi = require('joi'); // Importer Joi
const jwt = require('jsonwebtoken'); //l'api 
const bcrypt = require('bcryptjs');//l'api 



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
projetnodejs.connect((err) => {
    if (err) {
        console.error('Erreur de connexion avec la base de données :', err.stack);
        return;
    }
    console.log('Connexion réussie, ID du thread :', projetnodejs.threadId);
});
// Schéma de validation avec Joi
const patientSchema = Joi.object({
    nom: Joi.string().min(2).max(50).required(),
    prenom: Joi.string().min(2).max(50).required(),
    age: Joi.number().integer().min(0).max(150).required(),
    adresse: Joi.string().max(255).required(),
    telephone: Joi.string().pattern(/^[0-9]{10,15}$/).required(), // 10 à 15 chiffres
    naissance: Joi.date().required(),
    dcreation: Joi.date().required(),
    allergies: Joi.string().max(255).allow('').optional(), // Peut être vide
    sexe: Joi.string().valid('Homme', 'Femme').required(),
});

// Middleware
app.use(bp.json());
app.use(express.static('public'));








// Route pour ajouter un patient
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





// Routes pour les dossiers
app.post('/api/dossiers', (req, res) => {
    const {Date_creation} = req.body; // Assurez-vous que ces champs correspondent à votre formulaire
    const query = 'INSERT INTO dossier (Date_creation) VALUES (?)';
    db.query(query, [Date_creation], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout du dossier.', error: err });
      } else {
        res.status(201).json({ message: 'Dossier ajouté avec succès.' });
      }
    });
  });

  




// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

//Mado rempli les choses de la base de donnée s'il te plait
// Exemple : Nom ,  prenom etc..... 

*/











const express = require('express');
const mysql = require('mysql');


//rest onject
const app = express()


//route
//URL => http://localhost:5050
app.get('/', (req,res) =>{
    return res.status(200).send('<h1>BONzourrr les amis</h1>');                                            
});


//PORT
const PORT = 5050;


//connexion a la base de donnee
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projetnodejs'
});




connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion avec la base de données :'+err.stack);
        return;
    }
    console.log('Connexion réussie:');
});


/*connexion.query("SELECT * FROM patient",(err,rows,fields) => {
    if (err) throw err;
    console.log("mes donnees sont", rows)

});
*/


//pour recevoir les patients
app.post('/', (req, res) => {
    const patientData = req.body;

    if (!patientData.nom || !patientData.prenom || !patientData.age) {
        return res.status(400).json({ message: 'Données invalides.' });
    }

    console.log('Données reçues :', patientData);
    res.status(200).json({ message: 'Patient ajouté avec succès !' });
});





//Listen
app.listen(PORT , () => {
    console.log('Server running');
});





//
//SA MARCHE POUR L'INSTANT DONC TOUCHONS A RIEN
//cd C:\Program Files\nodejs\backend\PROJET-MiniGroupe2\Server.js   apres node server.js