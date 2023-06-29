const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');
const cookieJwt = require('../middlewares/cookieJwt');
const auth = require('../middlewares/auth');


router.get('/', cookieJwt, clientsCtrl.getClients)
router.post('/', cookieJwt, clientsCtrl.createClients);
router.delete('/:id', cookieJwt, clientsCtrl.deleteClients);
router.put('/:id', cookieJwt, clientsCtrl.updateClients);




module.exports = router;