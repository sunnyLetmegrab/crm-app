import RoleModel from "../model/role_model.mjs";

async function addRole(req, res, next) {
    try {
        var roleExist = await RoleModel.findOne({
            role_name: {
                '$regex': req.body.roleName,
                "$options": 'i'
            }
        })
        if (roleExist) {
            res.status(400).send({ message: 'Role already exist' })
        }
        var response = new RoleModel({ role_name: req.body.roleName });
        let role = await response.save();
        res.status(200).send({ message: "Role added successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Role add failed." })
    }
}

async function getAllRoles(req, res, next) {
    try {
        var response = await RoleModel.find();
        res.status(200).send({ data: response })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Get role failed." })
    }
}

export { addRole, getAllRoles }