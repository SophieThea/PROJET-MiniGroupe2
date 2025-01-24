
//Code Client (Validation des Formulaires et Soumission) 

document.getElementById('formDossier').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
alue;
    const datedecreation = document.getElementById('dcreation').value;
    
    const patientData = { dcreation};

    try {
        const response = await fetch('http://localhost:5050/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patientData),
        });

        if (response.ok) {
            alert('Dossier ajouté avec succès !');
            document.getElementById('formDossier').reset();
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



