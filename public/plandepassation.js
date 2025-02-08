document.addEventListener('DOMContentLoaded', () => {
    loadActivities();
  });
  
  // Fonction pour charger et afficher les activités
  function loadActivities() {
    fetch('/get-activities')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = ''; // Vider le tableau avant d'ajouter les nouvelles données
  
        data.forEach(activity => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${activity.activite}</td>
            <td>${activity.patient}</td>
            <td>${activity.date}</td>
            <td>${activity.status}</td>
            <td>${activity.commentaires}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Erreur lors du chargement des activités:', error));
  }
  
  // Gestion du formulaire pour ajouter une activité
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const activite = document.getElementById('activite').value;
    const patient = document.getElementById('patient').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;
    const commentaires = document.getElementById('commentaires').value;
  
    fetch('/add-activity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activite, patient, date, status, commentaires })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Activité ajoutée avec succès !');
        document.querySelector('form').reset();
        loadActivities(); // Rafraîchir la liste
      } else {
        alert('Erreur : ' + data.message);
      }
    })
    .catch(error => console.error('Erreur lors de l\'ajout de l\'activité:', error));
  });
  