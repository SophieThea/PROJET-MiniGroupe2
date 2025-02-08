/*const examForm = document.getElementById('examForm');
examForm.addEventListener('submit', (e) => {
  e.preventDefault();  // Empêche le comportement par défaut du formulaire si tu fais une requête AJAX

  // Log pour vérifier si l'ID du dossier est bien récupéré
  console.log('Dossier ID:', document.getElementById('IDDossier').value);

  // Envoie la requête POST à la route correcte
  fetch('/add-exam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nom: document.getElementById('examNom').value,
      dateRealisation: document.getElementById('examDate').value,
      resultats: document.getElementById('examResult').value,
      IDDossier: document.getElementById('IDDossier').value
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Examen ajouté:', data);
  })
  .catch(error => {
    console.error('Erreur lors de l\'ajout de l\'examen:', error);
  });
});
*/



/*const examForm = document.getElementById('examForm');
examForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche l'envoi normal du formulaire

  // Récupère les données des champs du formulaire
  const examNom = document.getElementById('examNom').value;
  const examDate = document.getElementById('examDate').value;
  const examResult = document.getElementById('examResult').value;
  const IDDossier = document.getElementById('IDDossier').value;

  // Vérifie que tous les champs sont remplis
  if (!examNom || !examDate || !examResult || !IDDossier) {
    alert("Tous les champs doivent être remplis.");
    return;
  }

  // Envoie les données du formulaire à la route /add-exam
  fetch('/add-exam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nom: examNom,
      dateRealisation: examDate,
      resultats: examResult,
      IDDossier: IDDossier,
    }),

  })
  .then(response => response.json())
  .then(data => {
    console.log("Examen ajouté avec succès:", data);
  })
  .catch(error => {
    console.error('Erreur lors de l\'ajout de l\'examen:', error);

  });

});











const examForm = document.getElementById('examForm');

examForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche l'envoi normal du formulaire

  // Récupère les données des champs du formulaire
  const examNom = document.getElementById('examNom').value;
  const examDate = document.getElementById('examDate').value;
  const examResult = document.getElementById('examResult').value;
  const IDDossier = document.getElementById('IDDossier').value;

  console.log("Données envoyées :", { examNom, examDate, examResult, IDDossier }); // Debug

  // Vérifie que tous les champs sont remplis
  if (!examNom || !examDate || !examResult || !IDDossier) {
    alert("Tous les champs doivent être remplis.");
    return;
  }

  // Envoie les données du formulaire à la route /add-exam
  fetch('/add-exam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nom: examNom,
      dateRealisation: examDate,
      resultats: examResult,
      IDDossier: IDDossier,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Réponse du serveur :", data); // Debug
    if (data.success) {
      alert("Examen ajouté avec succès !");
      examForm.reset(); // Réinitialise le formulaire
      document.getElementById("examFormSection").style.display = "none";
    } else {
      alert("Erreur : " + data.message);  
    }
  })
  .catch(error => {
    console.error("Erreur lors de l'ajout de l'examen :", error);
  });
});

*/







// Fonction pour charger les examens depuis le serveur et les afficher dans le tableau
function loadExams() {
  fetch('/get-exams')  // Une route pour récupérer tous les examens
    .then(response => response.json())
    .then(exams => {
      const examTableBody = document.querySelector('#examTable tbody');
      examTableBody.innerHTML = '';  // Vide le tableau avant de le remplir

      exams.forEach(exam => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${exam.nom}</td>
          <td>${exam.dateRealisation}</td>
          <td>${exam.resultats}</td>
        `;
        examTableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Erreur lors du chargement des examens:', error));
}

// Fonction pour ajouter un examen via le formulaire
const examForm = document.getElementById('examForm');

examForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche l'envoi normal du formulaire

  // Récupère les données des champs du formulaire
  const examNom = document.getElementById('examNom').value;
  const examDate = document.getElementById('examDate').value;
  const examResult = document.getElementById('examResult').value;
  const IDDossier = document.getElementById('IDDossier').value;

  console.log("Données envoyées :", { examNom, examDate, examResult, IDDossier }); // Debug

  // Vérifie que tous les champs sont remplis
  if (!examNom || !examDate || !examResult || !IDDossier) {
    alert("Tous les champs doivent être remplis.");
    return;
  }

  // Envoie les données du formulaire à la route /add-exam
  fetch('/add-exam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nom: examNom,
      dateRealisation: examDate,
      resultats: examResult,
      IDDossier: IDDossier,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Réponse du serveur :", data); // Debug
    if (data.success) {
      alert("Examen ajouté avec succès !");
      examForm.reset(); // Réinitialise le formulaire
      document.getElementById("examFormSection").style.display = "none";

      loadExams();  // Recharge les examens pour mettre à jour le tableau
    } else {
      alert("Erreur : " + data.message);  
    }
  })
  .catch(error => {
    console.error("Erreur lors de l'ajout de l'examen :", error);
  });
});

// Charger les examens au chargement de la page
document.addEventListener('DOMContentLoaded', loadExams);
