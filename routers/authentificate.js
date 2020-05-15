const express = require('express');
const router = express.Router();
const  user_controler =require('../controllers/user');

router.post('/authentificate',user_controler.authentificate);

router.post('/createUser',user_controler.createUser);
module.exports = router;