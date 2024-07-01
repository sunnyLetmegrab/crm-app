import LeadStatus from "../model/lead_status.mjs"

async function addleadStatus(req, res, next) {
    try {
        
        var statusExist = await LeadStatus.find({
            leadStatus: {
                '$regex': req.body.leadStatus,
                "$options": 'i'
            }
        })
        if (statusExist.length>0) {
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


export {
    addleadStatus,
    getAllLeadStatus
}