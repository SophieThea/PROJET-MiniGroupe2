const express = require('express');
const mysql = require('mysql');
const Joi = require('joi'); // Importer Joi
const jwt = require('jsonwebtoken'); //l'api 
const bcrypt = require('bcryptjs');//l'api 


const app = express();
const PORT = 3020;

app.use(express.json()); // Middleware pour lire les JSON

// Configuration de la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetnodejs',
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion avec la base de données :', err.stack);
        return;
    }
    console.log('Connexion réussie, ID du thread :', db.threadId);
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

// Route pour ajouter un utilisateur avec validation
app.post('/api/user', (req, res) => {
    // Valider les données reçues
    const { error, value } = patientSchema.validate(req.body);

    if (error) {
        console.error('Validation échouée :', error.details);
        return res.status(400).json({ message: 'Données invalides', details: error.details });
    }

    const { nom, prenom, age, adresse, telephone, naissance, dcreation, allergies, sexe } = value;

    // Requête SQL pour insérer les données
    const sql = "INSERT INTO user (nom, prenom, age, adresse, telephone, naissance, dcreation, allergies, sexe) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [nom, prenom, age, adresse, telephone, naissance, dcreation, allergies, sexe], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion dans la base de données :', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        res.status(200).json({ message: 'Patient ajouté avec succès', data: result });
    });
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

document.getElementById('patientform').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données du formulaire
    const Nom = document.getElementById('nom').value;
    const Prenom = document.getElementById('prenom').value;
    const Age = document.getElementById('age').value;
    const Adresse = document.getElementById('adresse').value;
    const Telephone = document.getElementById('telephone').value;
    const Datedenaissance = document.getElementById('naissance').value;
    const Datedecreation = document.getElementById('dcreation').value;
    const Allergies = document.getElementById('allergies_details').value;
    const Sexe = document.getElementById('sexe').value;

    // Création d'un objet contenant les données
    const patientData = {
        nom: Nom,
        prenom: Prenom,
        age: Age,
        adresse: Adresse,
        telephone: Telephone,
        naissance: Datedenaissance,
        dcreation: Datedecreation,
        allergies: Allergies,
        sexe: Sexe,
    };

    // Envoi des données au serveur
    const response = await fetch('http://localhost:3020/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
    });

    if (response.ok) {
        console.log("Données envoyées avec succès !");
        alert("Patient ajouté avec succès !");
    } else {
        console.error("Erreur lors de l'envoi des données.");
        alert("Une erreur est survenue.");
    }
});
