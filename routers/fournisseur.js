const express = require('express');
const router = express.Router();
const   Fournisseur_controler =require('../controllers/fournisseur');
const   User_controler =require('../controllers/user');



router.post('/createFournisseur',Fournisseur_controler.createFournisseur);
router.get('/getFournisseurs',Fournisseur_controler.getFournisseurs);
router.get('/getMarques_fournisseur',Fournisseur_controler.getMarques_fournisseur);
router.post('/modifierFournisseur/:id',Fournisseur_controler.modifierFournisseur);
router.post('/supprimerFournisseur/:id',Fournisseur_controler.supprimerFournisseur);

module.exports = router;
