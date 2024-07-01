import mongoose from "mongoose";

var userModel = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'roles'
    },
    orgId: {
        type: mongoose.Schema.ObjectId,
        ref: 'org'
    }
})

const UserSchema =mongoose.model('emp', userModel)

export {
    UserSchema
}


