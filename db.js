const mysql = require('mysql');
require('dotenv').config;

let connexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Klapaucius972!',
    database: 'Saas'
})

connexion.connect((error) => {
    try {
        if(error) throw error;
        console.log("Connecté: " + connexion.config.database + " " + connexion.threadId);
    } catch (error) {
        console.error("Erreur de connexion: " + error);
    }
})


module.exports = connexion;