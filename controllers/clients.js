const ClientModels = require("../dao/clients.dao");

const clientModels = new ClientModels();

exports.getClients = async (req, res) => {
    try {
        let response = await clientModels.getClients();
        res.status(200).json({response})
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.createClients = async (req, res) => {
    try {
        const newClient = {
            user_id : Number(req.cookies.userId),
            ...req.body
        }
        let response = await clientModels.createClient(newClient);
        console.log(response);
        res.status(201).json({response})
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }
}

exports.updateClients = async (req, res) => {
    try {

        const newInfos = {
            ...req.body
        }
        let response = await clientModels.modifyClient(newInfos, req.params.id);
        res.status(201).json({response});
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.deleteClients = async (req, res) => {
    try {
        let response = await clientModels.deleteClient(req.params.id);
        res.status(201).json({ response });
    } catch (error) {
        res.status(404).json({error});
    }
}