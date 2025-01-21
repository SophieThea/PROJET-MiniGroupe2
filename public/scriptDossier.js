document.getElementById('formDossier').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const Date_de_creation = document.getElementById('dcreation').value;

    await fetch('http://localhost:3000/api/dossiers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Date_de_creation })
      });

      alert('Dossier ajouté avec succès !');
      document.getElementById('formDossier').reset();
  


});
