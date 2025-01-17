// Configuration de la connexion
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Votre utilisateur wat
    password: '', // Votre mot de passe MySQL
    database: 'db' // Remplacez par votre base de données
  });
  
  // Fonction pour ajouter un enregistrement
  function ajouter(nom,ville,tel) {
    const sql = 'INSERT INTO client (nom,ville,tel)  values(?,?,?)';
    connection.query(sql,[nom,ville,tel], (err, results) => {
      if (err) throw err;
      console.log('Patient ajouté');
      
    });
  }
  
  // Fonction pour modifier un enregistrement
  function modifier(idPatient,newData) {
    const sql = 'UPDATE client SET nom= ? WHERE idclient= ?';
    connection.query(sql, data, (err, results) => {
      if (err) throw err;
      console.log('client modifié.');
    });
  }
  
  // Fonction pour supprimer un enregistrement
  function supprimer(idPatient) {
    const sql = 'DELETE FROM client WHERE idclient= ?';
  connection.query(sql, (err, results) => {
      if (err) throw err;
      console.log('client supprimé')
    });
  }
  
  // Exportation des fonctions
  module.exports = {
    ajouter,
    modifier,
    supprimer
  };  
  
  

