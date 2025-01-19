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
