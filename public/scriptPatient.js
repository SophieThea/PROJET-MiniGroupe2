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
  const sexe = document.getElementById('sexe').value;

  const patientData = { nom, prenom, age, adresse, telephone, naissance, sexe };

  try {
      const response = await fetch('http://localhost:5050/', {
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




  

