const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
    },
    password:{
        type: String,

    },
    actor_type:{
        type: String,

    },
    actor_id:[{
        type:  Schema.Types.ObjectId,

    }]

});

module.exports = mongoose.model('user', UserSchema);