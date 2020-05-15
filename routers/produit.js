const express = require('express');
const router = express.Router();
const  Produit_controler =require('../controllers/produit');
const  user_controler =require('../controllers/user');



router.post('/createProduit',user_controler.verifyTokenFournisseur,Produit_controler.createProduit);
router.get('/getProduits',user_controler.verifyTokenFournisseur,Produit_controler.getProduits);
router.post('/modifierProduit/:id',user_controler.verifyToken,Produit_controler.modifierProduit);
router.get('/getProduit/:id',user_controler.verifyToken,Produit_controler.getProduit);
router.post('/supprimerProduit/:id',user_controler.verifyToken,Produit_controler.supprimerProduit);
module.exports = router;