const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const  fourniseurSchema= new Schema({
    nom_fourni : {
        type : String,

    },
    adresse_fourni:{
        type : String,

    } ,
    numeroTelephone_fourni: {
        type : String,
    },
   Marque_id: [{
        type:  Schema.Types.ObjectId,
        ref : 'fournisseur',
    }]
});
module.exports= mongoose.model('fournisseur',fourniseurSchema);