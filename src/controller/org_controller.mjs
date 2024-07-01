import mongoose from "mongoose";
import OrgModel from "../model/org_model.mjs"
import { UserSchema } from "../model/user_model.mjs";
import RoleModel from "../model/role_model.mjs";

async function register(req, res, next) {
    try {
        var emailExists = await OrgModel.findOne({ email: req.body.email })
        if (emailExists == null) {
            var model = new OrgModel(req.body)
            await model.save();
            res.status(200).send({ message: "organization created" });
        }
        res.status(400).send({ message: "Email already associated with organization" });
    } catch (error) {
        res.status(500).send({ message: "Failed to create organization" });
    }
}

async function login(req, res, next) {
    try {
        var emailExists = await OrgModel.findOne({ email: req.body.email })

        if (emailExists != null) {
            var user = await OrgModel.findOne({ email: req.body.email, password: req.body.password }, { password: 0 })
            if (user != null) {
                return res.status(200).send({ message: "Login successfull", data: user });
            }
            return res.status(400).send({ message: "Password not matched" });
        }
        return res.status(400).send({ message: "Organization not found" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "failed to login" })
    }
}


async function addEmpolyee(req, res, next) {
    try {
        var obId = new mongoose.Types.ObjectId();
        var employee = new UserSchema({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            orgId: req.orgId,
            role_id: obId,
        })
        var emailExist = await OrgModel.findOne({ email: req.body.email });
        if (emailExist) {

            return res.status(400).send({ message: "Can not create employee using organization email." });
        }
        var savedEmployee = await employee.save()

        if (savedEmployee) {
            return res.status(200).send({ message: "Employee added", data: savedEmployee });
        }
        return res.status(400).send({ message: "failed to add employee" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "failed to add employee" });
    }
}


async function editEmpolyee(req, res, next) {
    try {
        var response = await UserSchema.findByIdAndUpdate(req.body.id, { ...req.body }, {
            projection: {
                password: 0,
                "__v": 0,
            }, returnDocument: 'after'
        })
        return res.status(200).send({ message: "Employee updated", data: response });
    } catch (error) {
        return res.status(500).send({ message: "failed to update employee" });

    }
}


async function getAllEmpoyee(req, res, next) {
    try {
        var response = await OrgModel.find();
        return res.status(200).send({ data: response })
    } catch (error) {
        return res.status(200).send({ message: "failed to get employee" })
    }
}


async function updateRole(req, res, next) {

}



export {
    register,
    login,
    updateRole,
    editEmpolyee,
    getAllEmpoyee,
    addEmpolyee
}