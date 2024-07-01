import mongoose from "mongoose";

const roleModel =new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,

    },
    role_name: {
        type: String
    }

})

const RoleModel =  mongoose.model('roles', roleModel)

export default RoleModel