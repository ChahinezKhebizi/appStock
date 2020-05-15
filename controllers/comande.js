const commande_model= require('../models/comande');
const mongoose = require('mongoose');

module.exports = {
    createCommande: function (req, res, next) {
        commande_model.create(req.body,function (err,result) {

            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }

        })},

    getCommandes: function (req, res, next) {
        commande_model.find(function (err, result) {

            if (err)
                res.status(400).json({message: "error", data: null});
            else {
                res.status(200).json(result);
            }

        });

    },
    getCommande: function (req, res, next) {
        commande_model.find({_id: req.params.id}).then(function (result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        })

    },
    modifierCommande: function (req, res, next) {

        commande_model.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function (result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        })
    },


    supprimerCommande: function (req, res, next) {
        commande_model.findByIdAndRemove({_id: req.params.id},function (err,result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }

        })

    },
    affecterCommande: function (req,res,next) {
        commande_model.findByIdAndUpdate({id:req.params.id},{fourniseur_id:mongoose.Types.ObjectId(req.body.id)},{new: true},
            function (err,result) {
                if (err){
                    res.status(400).json({message: "error", data: null});
                    console.log(err);
                }
                else{
                    res.status(200).json(result);
                }

        })

    }
}
