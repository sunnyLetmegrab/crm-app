import { UserSchema } from '../model/user_model.mjs'

async function loginEmployee(req, res, next) {
    try {
        var user = await UserSchema.findOne({ email: req.body.email, orgId: req.body.orgId, password: req.body.password })
        var data = user.toJSON();
        if (data) {
        }
        return res.status(200).send(data);
    } catch (error) {

    }
    return res.status(200).send({});
}

async function refresToken(req, res, next) {

}
async function getUser(req, res, next) {

}

async function updateProfile(params) {

}

export {
    loginEmployee,
    refresToken,
    getUser,
    updateProfile
}