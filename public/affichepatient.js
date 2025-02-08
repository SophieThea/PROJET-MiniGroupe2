// On attend que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
  
    // Fonction pour récupérer les patients
    const fetchPatients = async () => {
      try {
        const response = await fetch('/get-patients');  // Appelle la route pour récupérer les patients
        const patients = await response.json();  // Parse la réponse en JSON
  
        // Affiche les patients dans le tableau
        const table = document.getElementById('patientTable');  // Assure-toi d'avoir un tableau avec cet id
        patients.forEach(patient => {
          const row = table.insertRow();  // Crée une nouvelle ligne dans le tableau
          row.insertCell(0).textContent = patient.IDPatient;  // Ajoute l'ID du patient
          row.insertCell(1).textContent = patient.nom;  // Ajoute le nom du patient
          row.insertCell(2).textContent = patient.prenom;  // Ajoute le prénom du patient
          row.insertCell(3).textContent = patient.age;  // Ajoute l'âge du patient
          row.insertCell(4).textContent = patient.tel;  // Ajoute le téléphone du patient
          row.insertCell(5).textContent = patient.sexe;  // Ajoute le sexe du patient
          row.insertCell(6).textContent = patient.nationalite;  // Ajoute la nationalité du patient
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des patients:', error);
      }
    };
  
    fetchPatients();  // Appelle la fonction pour récupérer les patients
  });
  





  /*document.addEventListener("DOMContentLoaded", async function () {
    const tableBody = document.querySelector("#patientTable tbody");

    // Charger les patients depuis le serveur
    const response = await fetch("/get-patients");
    const patients = await response.json();

    // Ajouter les patients dans le tableau
    patients.forEach(patient => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.nom}</td>
            <td>${patient.prenom}</td>
            <td>${patient.age}</td>
            <td>${patient.telephone}</td>
            <td>${patient.sexe}</td>
            <td>${patient.nationalite}</td>
            <td>
                <button onclick="modifierPatient(${patient.id})">Modifier</button>
                <button onclick="supprimerPatient(${patient.id})">Supprimer</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
});

// Fonction pour modifier un patient
function modifierPatient(id) {
    window.location.href = `Patientform.html?id=${id}`;
}

// Fonction pour supprimer un patient
async function supprimerPatient(id) {
    if (confirm("Voulez-vous vraiment supprimer ce patient ?")) {
        const response = await fetch(`/delete-patient/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Patient supprimé !");
            location.reload(); // Recharger la page pour mettre à jour la liste
        } else {
            alert("Erreur lors de la suppression !");
        }
    }
}
*/