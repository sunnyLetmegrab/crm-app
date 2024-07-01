import mongoose from "mongoose";

const leadStatus =new mongoose.Schema({

    id: {
        type: mongoose.Schema.ObjectId,
    },
    leadStatus: {
        type: String,
    }

})

const LeadStatus =  mongoose.model('leadStatus', leadStatus);

export default LeadStatus