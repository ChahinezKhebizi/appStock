const marque_model= require('../models/marque');
const mongoose = require('mongoose');

module.exports = {
    createMarque :function (req, res, next) {
        marque_model.create({
            nom_marque: req.body.nom_marque
        }).then((marque)=>{
            res.status(200).json(marque);
        }).catch((err)=>{
            res.status(400).json(err);
        })
    } ,

    getMarques: function (req, res, next) {
        marque_model.find({_id: req.params.id}).then(function (result) {
            res.send(result)
        }).catch(next);

    },
    getMarque : function (req,res,next) {
        marque_model.find({_id:req.params.id}).then(function(result){
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        })

    },
    modifierMarque : function (req,res,next) {

        marque_model.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then(function(marque){
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        })
    },


    supprimerMarque : function(req,res,next ){
        marque_model.findByIdAndRemove({_id:req.params.id},function (err,result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json({message: "supprime", data: null});
            }
        })

    }
}