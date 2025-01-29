//C:\Program Files\nodejs\projet2\BackendC:\Program Files\nodejs\projet2\Backend
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Backend', 'Acceuil.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const openSidebarBtn = document.getElementById("open-sidebar");
  const closeSidebarBtn = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const contactForm = document.getElementById("contact-form");

  // Ouvrir la sidebar
  openSidebarBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  // Fermer la sidebar
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });

  // Gestion de l'envoi du formulaire
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêcher l'envoi par défaut
    alert("Votre message a été envoyé avec succès !");
    contactForm.reset(); // Réinitialiser le formulaire
  });
});

    var ctx = document.getElementById('chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janvier', 'Février', 'Mars', 'Avril'],
      datasets: [{
        label: 'Activités Complétées',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  // POUR PLAN DE PASSAGE 
  document.getElementById('addEventForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Récupérer les valeurs du formulaire
    const eventTime = document.getElementById('eventTime').value;
    const eventDescription = document.getElementById('eventDescription').value;
  
    // Créer une nouvelle ligne pour l'événement
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${eventTime}</td>
      <td>${eventDescription}</td>
      <td>
        <button class="edit-btn">Modifier</button> 
        <button class="delete-btn">Supprimer</button>
      </td>
    `;
  
    // Ajouter la ligne au tableau
    document.querySelector('table tbody').appendChild(newRow);
  
    // Réinitialiser le formulaire
    document.getElementById('addEventForm').reset();
  });
  
  // Ajouter un gestionnaire d'événements pour supprimer une ligne
  document.querySelector('table').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const row = event.target.closest('tr');
      row.remove();
    }
  });
  

