const express=requie('express');
const bp=requie('body-parser');
const mysql=requie('mysql');
const path=requie('path');
const app=requie('app');
//pour executer on mets 
//node le nom du fichier
//
//
//confuguration de la db 
const madoiciaussimets=mysql.createConnection({
host :'localhost',
user:'root',
password:'',
database:'projetnodejs'
});




//connection entre la base de donnée
projetnodejs.connect((err)=>{
if(err){
    console.error('erreur de  connexion avec la base de donnée'+err.stock)
    return;
}
console.log('connexion reussie'+projetnodejs.threadId);
});



//Middlewave
app.use(bp.json());
app.use(express.stalic('public'));


//route pour ajouter un utilisateur 
app.use('/api/user',(req,res)=>{
    const{prenom,nom,login,password,profile}=req.body;
    const sql="Insert into user (prenom,nom,login,password,profile) values(?,?,?,?,?)";
    projetnodejs.querry(sql,[prenom,nom,login,password,profile],(error,result)=>{})
});
//Madopartout ou tu vois ton nom ou tu vois db mets s'il te plait le nom de la base de donnée ok 
//ok c'est fait