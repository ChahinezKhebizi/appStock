const express = require('express');
const router = express.Router();
const   Marque_controler =require('../controllers/marque');
const   User_controler =require('../controllers/user');


router.post('/createMarque',Marque_controler.createMarque);
router.get('/getMarques',Marque_controler.getMarques);
router.get('/getMarque/:id',Marque_controler.getMarque);
router.post('/modifierMarque/:id',User_controler.verifyToken,Marque_controler.modifierMarque);
router.post('/supprimerMarque/:id',User_controler.verifyToken,Marque_controler.supprimerMarque);
module.exports = router;
