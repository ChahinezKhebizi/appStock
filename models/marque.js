const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const  marqueSchema= new Schema({
    nom_marque : {
        type_marque : String
    }

});

module.exports= mongoose.model('marque',marqueSchema);
