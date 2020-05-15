const user_model = require('../models/user');

const jwt = require('jsonwebtoken');
// const jwt_decode=require('jwt-decode');

module.exports = {
    createUser :function (req, res, next) {
        user_model.create({ email: req.body.email, password: req.body.password, actor_id:req.body.actor_id,
            actor_type: req.body.actor_type}, function (err, result) {
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }
        });

    },
    authentificate : function (req,res,next ) {
        user_model.findOne({email:req.body.email}).then(function (result) {
            const token = jwt.sign({id: result._id,actor_type: result.actor_type},'secretKey', { expiresIn: '2h' });
            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(token);
            }
        })
    },
    verifyTokenFournisseur: function (req, res, next) {


        jwt.verify(req.header("Authorization"),'secretKey', function(err, decoded) {

            if (err)
                res.status(400).json({msg:"invalid token"});
            else
                next();


        });

    }
    ,
    verifyToken: function (req, res, next) {


        jwt.verify(req.header("Authorization"),'secretKey', function(err, decoded) {

            if (err)
                res.status(400).json({msg:"invalid token"});
            else {
                if (decoded.actor_type == 'fournisseur')
                    next();
                else res.status(400).json({msg: "invalid actor"});
            }

        });

    },
    getUsers : function (req,res,next) {
        user_model.find({},function(err,result){

            if (err)
                res.status(400).json({message: "error", data: null});
            else{
                res.status(200).json(result);
            }

        });

    },
    verifierEmail :  function (req, res, next ) {
        user_model.findOne({email: req.body.email},function (err,result) {

            if(err){
                res.status(401).json({message: "error"})
            }else {
                console.log(result)

                if(!result) next();
                else res.status(409).json({message: "email existe"})
            }



        })

    }
};
