const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const  produitSchema= new Schema({
        nom_produit : {
            type: String,


        },
        unite: {
            type : String,


        },
        description : {
           type:String,


        },
        stock :{
            type:String,


        },
        stockMinimum :{
            type:String,


        },
        prixAchat :{
            type:String,



        },
        prixVente : {
          type:String,
          required: true
        },
        marque : [{
            type : Schema.Types.ObjectId,
            ref : 'marque',
            required: true

        }],

});

const Produit =mongoose.model('produit',produitSchema);
module.exports=Produit;