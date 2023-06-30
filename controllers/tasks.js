const TaskModels = require('../dao/tasks.dao');

const taskModels = new TaskModels();

exports.getTasks = async (req, res) => {
    try {
        let response = await taskModels.getTasks();
        res.status(200).json({response});
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.createTask = async (req, res) => {
    try {
        const newTask = {
            user_id : Number(req.cookies.userId),
            ...req.body
        }
        let response = await taskModels.createTask(newTask);
        res.status(201).json({response});
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }
}

exports.updateTask = async (req, res) => {
    try {
        const updateTask = {
            ...req.body
        }
        let response = await taskModels.modifyTask(updateTask, req.params.id);
        res.status(201).json({response});
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }
}

exports.deleteTask = async (req, res) => {
    try {
        let response = await taskModels.deleteTask(req.params.id);
        res.status(201).json({response});
    } catch (error) {
        res.status(400).json({error});
    }
}