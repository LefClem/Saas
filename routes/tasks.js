const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks');
const cookieJwt = require('../middlewares/cookieJwt');

router.get('/', cookieJwt, tasksCtrl.getTasks);
router.post('/', cookieJwt, tasksCtrl.createTask);
router.put('/:id', cookieJwt, tasksCtrl.updateTask);
router.delete('/:id', cookieJwt, tasksCtrl.deleteTask);


module.exports = router;