const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');


const app = express();

// Middleware pour parser le corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Pour les fichiers statique
app.use(express.static(path.join(__dirname, 'public')));


// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Gestionpatient'
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Exemple de route GET
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'inscription.html'));
});






//Route pour ajouter un user
// Route pour gérer le formulaire
app.post('/add-user', (req, res) => {
  const { nomd, password } = req.body;

  // Logique pour insérer les données dans la base de données
  const sql = 'INSERT INTO User (Nomutilisateur , password) VALUES (?, ?)';
  db.query(sql, [nomd, password], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion des données :', err);
      return res.status(500).send('Erreur lors de l\'ajout du patient.');
    }

    // Rediriger vers patientform.html après l'insertion réussie
    res.redirect('/patientform.html');
  });
});









//Route pour ajouter un PATIENT
app.post('/add-patient', (req, res) => {
    const { nom, prenom, age, tel, sexe, nationalite } = req.body;
  
    // Requête SQL pour insérer les données dans la table `patient`
    const sql = `
      INSERT INTO patient (nom, prenom, age, tel, sexe, nationalite)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
  
    db.query(sql, [nom, prenom, age, tel, sexe, nationalite], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout du patient :', err);
        res.status(500).send('Erreur lors de l\'ajout du patient');
      } else {
        console.log('Patient ajouté avec succès');
        res.sendFile(path.join(__dirname, 'public', 'affichepatient.html'));
      }
    });
  });
  









  //Route pour ajouter un DOSSIER
app.post('/add-dossier', (req, res) => {
  const { nom, prenom, ddc } = req.body;

  // Étape 1: Chercher l'ID du patient dans la table 'patient' avec le nom et prénom
  const queryPatient = `SELECT IDPatient FROM patient WHERE nom = ? AND prenom = ?`;

  db.query(queryPatient, [nom, prenom], (err, patientResult) => {
    if (err) {
      res.status(500).send('Erreur dans la requête des informations du patient');
      return;
    }

    if (patientResult.length > 0) {
      const patientId = patientResult[0].IDPatient;  // On récupère l'ID du patient

      // Étape 2: Ajouter la date de création et l'ID du patient dans la table 'dossier'
      const queryDossier = `INSERT INTO Dossiers (datedecreation, IDPatient) VALUES (?, ?)`;

      db.query(queryDossier, [ddc, patientId], (err, dossierResult) => {
        if (err) {
          res.status(500).send('Erreur dans l\'insertion du dossier');
          return;
        }

        res.sendFile(path.join(__dirname, 'public', 'affichedossier.html'));
      });
    } else {
      res.status(404).send('Patient non trouvé');
    }
  });
});








// Route pour ajouter l'examen
app.post('/add-exam', (req, res) => {
  const { nom, dateRealisation, resultats, IDDossier } = req.body;

  // Log des données reçues pour vérifier
  console.log('Données reçues:', req.body);

  // Requête SQL pour insérer les données dans la table 'Exam'
  const query = `
    INSERT INTO Exam (nom, daterealisation, resultats, IDDossier)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [nom, dateRealisation, resultats, IDDossier], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de l\'examen:', err);
      res.status(500).send('Erreur lors de l\'ajout de l\'examen');
      return;
    }
    res.status(200).send('Examen ajouté avec succès');
  });
});








// Route pour récupérer les examens d'un dossier spécifique
app.get('/get-exams', (req, res) => {
  // Assure-toi de récupérer les examens de la base de données
  const query = "SELECT * FROM Exam";  // Change selon ton modèle de base de données

  db.query(query, (error, dossiersResult) => {
    if (error) {
      console.error("Erreur lors de la récupération des examens", error);
      return res.status(500).json({ success: false, message: "Erreur serveur" });
    }
    res.json(dossiersResult);  // Renvoie les résultats sous forme de JSON
  });
});











/*app.post('/add-exam', (req, res) => {
  const { examNom, examDate, examResult } = req.body;

  // Récupérer l'ID du dernier dossier ajouté
  const queryLastDossier = `SELECT IDDossier FROM Dossiers ORDER BY IDDossier DESC LIMIT 1`;
  db.query(queryLastDossier, (err, result) => {
      if (err) {
          res.status(500).send('Erreur lors de la récupération du dernier dossier');
          return;
      }

      if (result.length > 0) {
          const lastDossierId = result[0].IDDossier;

          // Insérer l'examen avec l'ID du dernier dossier
          const queryExam = `INSERT INTO Exam (nom, daterealisation, resultats, IDDossier) VALUES (?, ?, ?, ?)`;
          db.query(queryExam, [examNom, examDate, examResult, lastDossierId], (err, examInsertResult) => {
              if (err) {
                  res.status(500).send("Erreur lors de l'ajout de l'examen");
                  return;
              }
              res.send("Examen ajouté avec succès");
          });
      } else {
          res.status(404).send("Aucun dossier trouvé");
      }
  });
});
*/








// Route pour récupérer les dossiers
app.get('/get-dossiers', (req, res) => {
  const queryDossiers = `SELECT * FROM Dossiers`;  // Récupère tous les dossiers

  db.query(queryDossiers, (err, dossiersResult) => {
    if (err) {
      res.status(500).send('Erreur dans la récupération des dossiers');
      return;
    }
    res.json(dossiersResult);  // Renvoie les résultats sous forme de JSON
  });
});








// Route pour récupérer les patients:
app.get('/get-patients', (req, res) => {
  const queryPatients = `SELECT * FROM patient`;  // Récupère tous les patients

  db.query(queryPatients, (err, patientsResult) => {
    if (err) {
      res.status(500).send('Erreur dans la récupération des patients');
      return;
    }

    res.json(patientsResult);  // Renvoie les résultats sous forme de JSON
  });
});




  








// Route pour ajouter une activité
// Route pour ajouter une activité
app.post('/add-activity', (req, res) => {
  const { activite, prenom, date, status, commentaires } = req.body;

  // Vérifier si le patient existe et récupérer son ID en fonction du prénom
  const sqlFindPatient = 'SELECT IDPatient FROM patient WHERE Prenom = ?';
  db.query(sqlFindPatient, [prenom], (err, results) => {
    if (err) {
      console.error("Erreur lors de la recherche du patient:", err);
      return res.json({ success: false, message: "Erreur lors de la recherche du patient." });
    }

    if (results.length === 0) {
      return res.json({ success: false, message: "Patient non trouvé. Veuillez vérifier le prénom." });
    }

    const IDPatient = results[0].IDPatient;

    // Insérer l'activité avec l'ID du patient
    const sqlInsertActivity = `
      INSERT INTO activite (TypeActivite, Nom, Date, statut, commentaire, IDPatient) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    db.query(sqlInsertActivity, [activite, prenom, date, status, commentaires || null, IDPatient], (err, result) => {
      if (err) {
        console.error("Erreur lors de l'ajout de l'activité:", err);
        res.json({ success: false, message: "Erreur lors de l'ajout de l'activité." });
      } else {
        res.json({ success: true, message: "Activité ajoutée avec succès." });
      }
    });
  });
});


// Route pour récupérer toutes les activités
app.get('/get-activities', (req, res) => {
  const sql = 'SELECT * FROM activite';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des activités:', err);
      res.json({ success: false, message: 'Erreur lors de la récupération des activités.' });
    } else {
      res.json(results);
    }
  });
});












// Lancer le serveur
const port = 3030;
app.listen(port, () => {
  console.log(`Serveur Express en écoute sur le port ${port}`);
});






//lien apache et mysql:
//sudo /Applications/XAMPP/xamppfiles/xampp startapache
//sudo /Applications/XAMPP/xamppfiles/xampp startmysql


