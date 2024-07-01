import mongoose from "mongoose";

var orgModel = new mongoose.Schema({
    orgName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const OrgModel = mongoose.model('org', orgModel)


export default OrgModel

