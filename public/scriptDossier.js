/*const express = require('express');
const mysql = require('mysql');
const Joi = require('joi'); // Validation
const bcrypt = require('bcryptjs'); // Pour hacher les mots de passe
const jwt = require('jsonwebtoken'); // Pour l'authentification

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
    console.log('Connexion réussie, ID du thread :', projetnodejs.threadId);
});

// Schéma de validation Joi
const patientSchema = Joi.object({
    nom: Joi.string().min(2).max(50).required(),
    prenom: Joi.string().min(2).max(50).required(),
    age: Joi.number().integer().min(0).max(120).required(),
    adresse: Joi.string().max(255).required(),
    telephone: Joi.string().pattern(/^\d+$/).min(10).max(15).required(),
    naissance: Joi.date().required(),
    dcreation: Joi.date().required(),
    allergies: Joi.string().allow(''),
    sexe: Joi.string().valid('M', 'F').required(),
});

// Route pour ajouter un utilisateur avec validation et hachage
app.post('/api/user', async (req, res) => {
    // Valider les données reçues
    const { error, value } = patientSchema.validate(req.body);
    if (error) {
        console.error('Validation échouée :', error.details);
        return res.status(400).json({ message: 'Données invalides', details: error.details });
    }

    const { nom, prenom, age, adresse, telephone, naissance, dcreation, allergies, sexe } = value;

    // Exemple de hachage (si un mot de passe est utilisé plus tard)
    // const hashedPassword = await bcrypt.hash(password, 10);

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
//Code Client (Validation des Formulaires et Soumission) 

document.getElementById('patientform').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const age = document.getElementById('age').value;
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const naissance = document.getElementById('naissance').value;
    const dcreation = document.getElementById('dcreation').value;
    const allergies = document.getElementById('allergies').value;
    const sexe = document.getElementById('sexe').value;

    const patientData = { nom, prenom, age, adresse, telephone, naissance, dcreation, allergies, sexe };

    try {
        const response = await fetch('http://localhost:3020/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patientData),
        });

        if (response.ok) {
            alert('Patient ajouté avec succès !');
            document.getElementById('patientform').reset();
        } else {
            const error = await response.json();
            alert(`Erreur : ${error.message}`);
        }
    } catch (err) {
        console.error('Erreur réseau :', err);
        alert('Une erreur réseau est survenue.');
    }
});


// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
*/


const express = require('express');


//rest onject
const app = express()


//route
//URL => http;//localhost:5050
app.get('/', (req,res) =>{
    return res.status(200).send('<h1>BONzourrr les amis</h1>');                                            
});


//PORT
const PORT = 5050;

//Listen
app.listen(PORT , () => {
    console.log('Server running');

});