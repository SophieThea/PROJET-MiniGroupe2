document.getElementById('patientform').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page


    //Recuperation des donnees du formulaitre
    const Nom =document.getElementById('nom').value;
    const Prenom =document.getElementById('prenom').value;
    const Age =document.getElementById('age').value;
    const Adresse =document.getElementById('adresse').value;
    const Telephone =document.getElementById('telephone').value;
    const Datedenaissance =document.getElementById('naissance').value;
    const Datedecreation =document.getElementById('dcreation').value;
    const Allergies =document.getElementById('allergies_details').value;
    const Sexe =document.getElementById('sexe').value;


    // Création d'un objet contenant les données
    const patientData = {
        Nom: nom,
        Prenom: prenom,
        Telephone: telephone,
        Age: age,
        Adresse: adresse,
    };

     // Envoi des données au serveur
     const response = await fetch('api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
    });








});