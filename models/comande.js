const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const  fourniseurSchema= new Schema({
    date : {
        type: String
    },
    quantite : {
        type :  String
    },
    etat : {
        String
    },
    fourniseur_id: [{
        type:  Schema.Types.ObjectId,
        ref : 'fournisseur',
    }]

});
module.exports= mongoose.model('commande',fourniseurSchema);