const db = require('../db')

class ClientsMethods {

    getClients() {
        let sql = "SELECT * FROM Contacts"

        return new Promise((resolve, error) => {
            db.query(sql, (err, results) => {
                if (err) throw err;
                try {
                    resolve(results)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }


    createClient(client) {
        let sql = `INSERT INTO Contacts SET ?`;

        return new Promise((resolve, reject) => {
            db.query(sql, client, (err, results) => {
                if (err) throw err;
                try {
                    console.log(results);
                    resolve(results)
                } catch (error) {
                    console.log(error);
                    reject(error)
                }
            })
        })

    }

    modifyClient(infos, id) {
        let sql = `UPDATE Contacts SET ? WHERE contact_id = ${id}`;

        return new Promise((resolve, reject) => {
            db.query(sql, infos, (err, results) => {
                if (err) throw err;
                try {
                    resolve(results)
                } catch (error) {
                    console.log(error);
                    reject(error)
                }
            })
        })
    }

    deleteClient(id) {
        let sql = `DELETE FROM Contacts WHERE contact_id = ${id}`

        return new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
                if (err) throw err;
                try {
                    if (results.affectedRows === 0) {
                        reject("Ce contact n'existe pas")
                    } else {
                        resolve(results)
                    }
                } catch (error) {
                    reject(error);
                }
            })
        })
    }




}

module.exports = ClientsMethods;