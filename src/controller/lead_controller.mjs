import LeadModel from "../model/lead_model.mjs";
import LeadStatus from "../model/lead_status.mjs"

async function addleadStatus(req, res, next) {
    try {

        var statusExist = await LeadStatus.find({
            leadStatus: {
                '$regex': req.body.leadStatus,
                "$options": 'i'
            }
        })
        if (statusExist.length > 0) {
            return res.status(400).send({ 'message': 'lead status exist' })
        }
        var createdLead = new LeadStatus({
            leadStatus: req.body.leadStatus
        })
        var response = await createdLead.save();
        return res.status(200).send({ message: "lead status added" })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "lead status add failed" })
    }
}

async function getAllLeadStatus(req, res, next) {
    try {
        var status = await LeadStatus.find();
        return res.status(200).send({ data: status });
    } catch (error) {
        return res.status(500).send({ message: 'Failed to fetch lead status.' });
    }
}

async function AddUpdateLead(req, res, next) {
    try {
        if (req.body.leadId == null) {
            var checkLead = await LeadModel.find({
                phoneNo: {
                    '$regex': req.body.phoneNumber,
                    "$options": 'i'
                }
            })
            if (checkLead.length > 0) {
                return res.status(400).send({ message: "Lead exist with same phone number" })
            }
            var newLead = new LeadModel({
                leadName: req.body.leadName,
                phoneNo: req.body.phoneNumber,
                assignedEmp: req.body.assingedId,
                leadStatus: req.body.leadStatus
            })
            var response = await newLead.save();
            return res.status(200).send({ messsage: "Lead created.", data: response.toJSON() })

        }
        var updatedLead = await LeadModel.findByIdAndUpdate(req.body.leadId, req.body, { returnDocument: 'after' })
        if (updatedLead.$isEmpty) {
            return res.status(500).send({ message: 'Failed to update lead.' });
        }
        return res.status(200).send({ message: 'Lead updated successfully', data: updatedLead.toJSON() });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Failed to perform lead action.' });

    }
}

async function deleteLead(req, res, next) {
    try {
        var deletedDoc = await LeadModel.findByIdAndUpdate(req.body.leadId, { 'deleted': true }, { returnDocument: 'after' })
        return res.status(200).send({ message: "lead deleted successfully" })
    } catch (error) {
        return res.status(500).send({ message: "failed to delete Lead" })
    }
}

async function updateLeadStatus(req, res, next) {
    try {
        var updatedLead = await LeadModel.findByIdAndUpdate(req.body.leadId, req.body, { returnDocument: 'after' })
        return res.status(200).send({ message: `Lead Status changed ${updatedLead.leadStatus}`, data: updatedLead.toJSON() });

    } catch (error) {

    }

}
async function updateLeadAssigee(req, res, next) {
    try {
        var updatedLead = await LeadModel.findByIdAndUpdate(req.body.leadId, req.body, { returnDocument: 'after' })
        return res.status(200).send({ message: `Lead assigned to ${updatedLead.assignedEmp}`, data: updatedLead.toJSON() });

    } catch (error) {

    }

}
export {
    addleadStatus,
    getAllLeadStatus,
    deleteLead,
    updateLeadAssigee,
    AddUpdateLead,
    updateLeadStatus,
}