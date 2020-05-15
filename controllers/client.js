const client_model=require('../models/client');
const user_model = require('../models/user');
const mongoose= require('mongoose');


module.exports ={
    createClient : function (req,res,next){

        client_model.create(req.body,function(err,client){
                req.body.actor_id = mongoose.Types.ObjectId(client._id);
                req.body.actor_type = "client";
                user_model.create(req.body, function (err, user) {
                    if (err)
                    { res.status(400).json({message: err.message, data: null});
                        console.log(err.message)}
                    else{
                        res.status(200).json(client);
                    }
                });
            }
        );
    },
    getClients : function (req,res,next) {
        client_model.find(function(err,result){

            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }

        });

    },
    getClient : function (req,res,next) {
        client_model.find({_id:req.params.id}).then(function(result){
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        })

    },
    modifierClient  : function (req,res,next) {

        client_model.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then(function(result){
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        })
    },


    supprimerClient : function(req,res,next ){
        client_model.findByIdAndRemove({_id:req.params.id},function (err,result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json({message: "supprime", data: null});
            }
        })

    }
}
