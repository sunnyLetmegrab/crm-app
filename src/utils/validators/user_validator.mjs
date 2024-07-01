import { checkSchema } from "express-validator";

const empRegister = checkSchema({
    name: {
        isEmpty: false,
    },
    email: {
        isEmpty: false,
        isEmail: true,
    },
    password: {
        isEmpty: false,
    },
    roleId: {
        isEmpty: false,
    }
})
const empLogin = checkSchema({
    email: {
        isEmpty: false,
        isEmail: true,
    },
    password: {
        isEmpty: false,
    },

})
const empUpdateProfile = checkSchema({
    name: {
        exists: true,
    },
    email: {
        exists: true,
        isEmail: true,
    },
    password: {
        exists: true,
    }
})

export {
    empRegister,
    empLogin,
    empUpdateProfile
}