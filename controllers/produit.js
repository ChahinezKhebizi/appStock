const mongoose=require('mongoose');
const produit_model= require('../models/produit');




module.exports = {


    createProduit: function (req, res, next) {
        produit_model.create({
            nom_produit: req.body.nom_produit,
            unite: req.body.unite,
            description: req.body.description,
            stock: req.body.stock,
            stockMinimum: req.body.stockMinimum,
            prixAchat: req.body.prixAchat,
            prixVente: req.body.prixVente,
            marque: mongoose.Types.ObjectId(req.body.marque)
        }, function (err, produit) {
            if (err) {
                res.status(400).json({message: err.message, data: null});
                console.log(err.message)
            } else {
                res.status(200).json(produit);
            }

        });


    },
    getProduit : function (req,res,next) {
        produit_model.aggregate([{
            $lookup : {
                from : "produits" ,//collection name in db
                localFeild : "_id",
                foreignFeild : "marque",
                as : "marqueDetails"
            }
        }]).exec(function (err, produit_model) {

        });
       produit_model.find({_id:req.params.id}).then(function(produit){
           if (err)
               res.status(400).json({message: "error", data: null});
           else{
               res.status(200).json(result);
           }
       })

    },
    getProduits :function (req, res, next) {
        produit_model.aggregate([{
            $lookup : {

                from : "marques" ,
                localField : "marque",
                foreignField : "_id",
                as : "marqueDetails"
            }
        }]).then((products)=>{
            res.status(200).json(products);
        }).catch((err)=>{
            res.status(400).json(err);
        })

    },
    modifierProduit : function (req,res,next) {

       produit_model.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},function (err,result) {
           if (err)
               res.status(400).json({message: "error", data: null});
           else{
               res.status(200).json(result);
           }
       })
    },
    supprimerProduit : function(req,res,next ){
        produit_model.findByIdAndRemove({_id:req.params.id},function (err,result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        })

    }

}
