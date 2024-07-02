import mongoose from "mongoose";

var LogModel = new mongoose.Schema({
    leadId: {
        type: mongoose.Schema.ObjectId,
        ref: 'lead'
    },
    updatedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'emp'
    }, updatedValue: {
        type: String,
    }, updatedField: {
        type: String,
    }

}, { timestamps: true })
const LogSchema = mongoose.model('logs', LogModel)

export default LogSchema