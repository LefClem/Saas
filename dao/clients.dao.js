const db = require('../db')

class ClientsMethods {

    getClients(){
        let sql = "SELECT * FROM Clients"

        return new Promise((resolve, error) => {
            db.query(sql, (err, results) => {
                if(err) throw err;
                try {
                    resolve(results)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }


    createClient(client){
        let sql = `INSERT INTO Clients SET ?`;

        return new Promise((resolve, reject) => {
            db.query(sql, client, (err, results) => {
                if(err) throw err;
                try {
                    resolve(results)
                } catch (error) {
                    console.log(error);
                    reject(error)
                }
            })
        })

    }

    modifyClient(infos, id){
        let sql = `UPDATE Clients SET ? WHERE IdClients = ${id}`;

        return new Promise((resolve, reject) => {
            db.query(sql, infos, (err, results) => {
                if(err) throw err;
                try {
                    resolve(results)
                } catch (error) {
                    console.log(error);
                    reject(error)
                }
            })
        })
    }

    deleteClient(id){
        let sql = 'DELETE FROM Clients WHERE IdClients = ?'

        return new Promise((resolve, reject) => {
            db.query(sql, id, (err, results) => {
                if(err) throw err;
                try {
                    resolve(results)
                } catch (error) {
                    reject(error);
                }
            })
        })
    }




}

module.exports = ClientsMethods;