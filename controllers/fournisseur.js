
const fourniseur_model= require('../models/fournisseur');
const marque_model= require('../models/marque');

const user_model= require('../models/user');

const mongoose = require("mongoose");
module.exports = {
    createFournisseur :function (req, res, next) {

        fourniseur_model.create({
                nom_fourni: req.body.nom_fourni,
                adresse_fourni: req.body.adresse_fourni,
                numeroTelephone_fourni:req.body.numeroTelephone_fourni,
                Marque_id : mongoose.Types.ObjectId(req.body.Marque_id)
            },function(err,fournisseur){
                user_model.create({ email: req.body.email,
                    password: req.body.password,
                    actor_id:mongoose.Types.ObjectId(fournisseur._id),
                    actor_type: "fournisseur"}, function (err, user) {
                    if (err)
                    { res.status(400).json({message: err.message, data: null});
                        console.log(err.message)}
                    else{
                        res.status(200).json(res.send(fournisseur));
                    }
                });
            }
        );
    },

    getFournisseurs :function (req, res, next) {
        fourniseur_model.aggregate([{
            $lookup: {

                from: "marques",
                localField: "Marque_id",
                foreignField: "_id",
                as: "marqueDetails"
            }
        }]).then((products) => {
            res.status(200).json(products);
        }).catch((err) => {
            res.status(400).json(err);
        })

    }
     ,
    getMarques_fournisseur : function (req,res,next) {
        marque_model.findAll({id_fournisseur:req.body.id_fournisseur},function(err,result){
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        });


    },
    modifierFournisseur : function (req,res,next) {

        fourniseur_model.findByIdAndUpdate({_id:req.params.id},{new:true}).then(function(result){
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }})
        console.log(req.params.id);
    },
    supprimerFournisseur :  function (req,res,next) {
        fourniseur_model.findByIdAndRemove({_id:req.params.id},req.body,function (err,result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json({message: "supprime", data: null});
            }
        })

    },


}