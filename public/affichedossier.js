/*document.addEventListener('DOMContentLoaded', () => {

  // Fonction pour récupérer les dossiers
  const fetchDossiers = async () => {
    try {
      const response = await fetch('/get-dossiers');  // Appelle la route pour récupérer les dossiers
      const dossiers = await response.json();  // Parse la réponse en JSON

      // Affiche les dossiers dans le tableau
      const table = document.getElementById('dossierTable');  // Assure-toi d'avoir un tableau avec cet id
      dossiers.forEach(dossier => {
        const row = table.insertRow();  // Crée une nouvelle ligne dans le tableau
        
        // Remplir les cellules avec les données du dossier
        row.insertCell(0).textContent = dossier.IDDossier;  // Ajoute l'ID du dossier
        row.insertCell(1).textContent = dossier.datedecreation;  // Ajoute la date de création
        row.insertCell(2).textContent = dossier.IDPatient;  // Ajoute l'ID du patient
        
        // Ajoute un bouton pour ajouter un examen pour ce dossier
        const addExamCell = row.insertCell(3);  // Crée une nouvelle cellule pour le bouton
        const addExamButton = document.createElement('button');  // Crée un bouton
        addExamButton.textContent = 'Ajouter Examen';  // Texte du bouton
        addExamButton.classList.add('add-exam-btn');  // Classe pour styliser si besoin
        addExamButton.onclick = () => {
          // Redirige vers la page d'ajout d'examen avec l'ID du dossier
          window.location.href = `/ajouter-examen?id=${dossier.IDDossier}`;
        };
        addExamCell.appendChild(addExamButton);  // Ajoute le bouton à la cellule
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des dossiers:', error);
    }
  };

  fetchDossiers();  // Appelle la fonction pour récupérer les dossiers
});




document.addEventListener('DOMContentLoaded', () => {
  // Récupérer les dossiers
  const fetchDossiers = async () => {
    try {
      const response = await fetch('/get-dossiers');
      const dossiers = await response.json();

      const table = document.getElementById('dossierTable');
      dossiers.forEach(dossier => {
        const row = table.insertRow();
        row.insertCell(0).textContent = dossier.IDDossier;
        row.insertCell(1).textContent = dossier.datedecreation;
        row.insertCell(2).textContent = dossier.IDPatient;

        // Ajouter un bouton pour afficher le formulaire d'examen
        const addExamCell = row.insertCell(3);
        const addExamButton = document.createElement('button');
        addExamButton.textContent = 'Ajouter Examen';
        
        // Lors du clic sur le bouton, afficher le formulaire d'examen et pré-remplir l'ID du dossier
        addExamButton.onclick = () => {
          // Afficher le formulaire d'examen
          const examFormSection = document.getElementById('examFormSection');
          examFormSection.style.display = 'block';

          // Pré-remplir l'ID du dossier dans le formulaire caché
          document.getElementById('IDDossier').value = dossier.IDDossier;
        };

        addExamCell.appendChild(addExamButton);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des dossiers:', error);
    }
  };

  fetchDossiers();
});





document.addEventListener('DOMContentLoaded', () => {
  const fetchDossiers = async () => {
    try {
      const response = await fetch('/get-dossiers');
      const dossiers = await response.json();

      const table = document.getElementById('dossierTable');
      dossiers.forEach(dossier => {
        const row = table.insertRow();
        row.insertCell(0).textContent = dossier.IDDossier;
        row.insertCell(1).textContent = dossier.datedecreation;
        row.insertCell(2).textContent = dossier.IDPatient;

        // Ajouter un bouton pour afficher le formulaire d'examen
        const addExamCell = row.insertCell(3);
        const addExamButton = document.createElement('button');
        addExamButton.textContent = 'Ajouter Examen';
        addExamButton.onclick = () => {
          // Afficher le formulaire d'examen
          const examFormSection = document.getElementById('examFormSection');
          examFormSection.style.display = 'block';

          // Pré-remplir l'ID du dossier dans le formulaire caché
          document.getElementById('IDDossier').value = dossier.IDDossier;
        };
        addExamCell.appendChild(addExamButton);

        // Ajouter un bouton pour récupérer et afficher les examens
        const viewExamCell = row.insertCell(4);
        const viewExamButton = document.createElement('button');
        viewExamButton.textContent = 'Voir Examens';
        viewExamButton.onclick = () => {
          fetchExamens(dossier.IDDossier);  // Afficher les examens pour ce dossier
        };
        viewExamCell.appendChild(viewExamButton);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des dossiers:', error);
    }
  };

  // Fonction pour récupérer les examens liés à un dossier spécifique
  const fetchExamens = async (IDDossier) => {
    try {
      const response = await fetch(`/get-examens?IDDossier=${IDDossier}`);
      const examens = await response.json();

      // Affiche les examens dans un tableau
      const examTable = document.getElementById('examTable');
      examTable.innerHTML = '';  // Réinitialiser le tableau

      examens.forEach(examen => {
        const row = examTable.insertRow();
        row.insertCell(0).textContent = examen.nom;
        row.insertCell(1).textContent = examen.dateRealisation;
        row.insertCell(2).textContent = examen.resultats;
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des examens:', error);
    }
  };

  fetchDossiers();  // Appelle la fonction pour récupérer les dossiers
});
*/


document.addEventListener('DOMContentLoaded', () => {
  const fetchDossiers = async () => {
    try {
      const response = await fetch('/get-dossiers');
      const dossiers = await response.json();

      const table = document.getElementById('dossierTable');
      dossiers.forEach(dossier => {
        const row = table.insertRow();
        row.insertCell(0).textContent = dossier.IDDossier;
        row.insertCell(1).textContent = dossier.datedecreation;
        row.insertCell(2).textContent = dossier.IDPatient;

        // Ajouter un bouton pour afficher le formulaire d'examen
        const addExamCell = row.insertCell(3);
        const addExamButton = document.createElement('button');
        addExamButton.textContent = 'Ajouter Examen';
        addExamButton.onclick = () => {
          // Afficher le formulaire d'examen
          const examFormSection = document.getElementById('examFormSection');
          examFormSection.style.display = 'block';

          // Pré-remplir l'ID du dossier dans le formulaire caché
          document.getElementById('IDDossier').value = dossier.IDDossier;
        };
        addExamCell.appendChild(addExamButton);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des dossiers:', error);
    }
  };

  fetchDossiers();  // Appelle la fonction pour récupérer les dossiers
});













/*
document.addEventListener("DOMContentLoaded", async function () {
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