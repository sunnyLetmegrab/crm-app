import mongoose from "mongoose";

const leadModel = new mongoose.Schema({
    leadName: {
        type: String,
    },
    source: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    assignedEmp: {
        type: mongoose.Schema.ObjectId,
        ref: 'emp'
    },
    leadStatus: {
        type: mongoose.Schema.ObjectId,
        ref: "leadStatus"
    }
})

const LeadModel = mongoose.model('lead', leadModel)

export default LeadModel