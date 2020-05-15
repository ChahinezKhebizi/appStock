const express = require('express');
const router = express.Router();
const  commande_controler = require('../controllers/comande');

router.post('/createCommande',commande_controler.createCommande);
router.post('/modifierCommande/:id',commande_controler.modifierCommande);
router.post('/supprimerCommande/:id',commande_controler.supprimerCommande);
router.get('/getCommande/:id',commande_controler.getCommande);
router.get('/getCommandes',commande_controler.getCommandes);
router.post('/affecterCommande/:id',commande_controler.affecterCommande);




module.exports = router;