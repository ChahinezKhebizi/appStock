const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const clientSchema= new Schema({
    nom : {
        type : String
    },
    prenom : {
        type :  String
    },
    email:{
        type : String
    },
    password : {
        type : String
    }

});
module.exports= mongoose.model('client',clientSchema);