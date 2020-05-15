const express = require('express');
const router = express.Router();
const   client_controler =require('../controllers/client');
const   User_controler =require('../controllers/user');

router.post('/createUser',User_controler.verifierEmail,User_controler.createUser);
router.post('/createClient',User_controler.verifierEmail,client_controler.createClient);

router.get('/getUsers',User_controler.getUsers);
router.get('/getClients',client_controler.getClients);
router.get('/getClient/:id',client_controler.getClient);
router.post('/modifierClient/:id',client_controler.modifierClient);
router.post('/supprimerClient/:id',client_controler.supprimerClient);
module.exports = router;