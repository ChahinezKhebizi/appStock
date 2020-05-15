const express = require('express');
const route_fournisseur = require('./routers/fournisseur');
const route_marque = require('./routers/marque');
const route_produit = require('./routers/produit');
const route_authentificate = require('./routers/authentificate');
const route_client = require('./routers/client');
const route_commande = require('./routers/comande');


const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const app=express();
// connect to the mongo db
try {
    mongoose.connect('mongodb://localhost:27017/app_stock', { useNewUrlParser: true,useUnifiedTopology:true});
    mongoose.set('useFindAndModify', false);
} catch (error) {
    handleError(error);
}
// setup express  app
app.use(bodyParser.json());
app.use('/',route_fournisseur);
app.use('/',route_marque);
app.use('/',route_produit);
app.use('/',route_authentificate);
app.use('/',route_client);
app.use('/',route_commande);

app.use(function (err,req,res,next) {
    console.log(err);
res.status(422).send({error:err.message});
});
//listen for request
 app.listen(4000,function(req,res){ console.log('port is listening for requets ')});