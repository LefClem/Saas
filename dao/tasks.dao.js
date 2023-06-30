const db = require('../db');

class TasksMethods {

    getTasks(){
        let sql = `SELECT * FROM Tasks`;

        return new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
                if(err) throw err;
                try {
                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            })
        })
    }

    createTask(task) {
        let sql = 'INSERT INTO Tasks (user_id, description, status, due_date) VALUES (?, ?, ?, STR_TO_DATE(?, "%d/%m/%Y"))';
        
        return new Promise((resolve, reject) => {
          db.query(sql, [task.user_id, task.description, task.status, task.due_date], (err, results) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(results);
            }
          });
        });
      }
      

    modifyTask(task, id){
        let sql = 'UPDATE Tasks SET description = ?, status = ?, due_date = STR_TO_DATE(?, "%d/%m/%Y") WHERE task_id = ?';

        return new Promise((resolve, reject) => {
            db.query(sql, [task.description, task.status, task.due_date, id], (err, results) => {
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

    deleteTask(id){
        let sql = `DELETE FROM Tasks WHERE task_id = ${id}`;

        return new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
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

}

module.exports = TasksMethods;