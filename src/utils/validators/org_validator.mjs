import { checkSchema } from "express-validator";

const registerValidator = checkSchema({
    orgName: {
        exists: true,
        isEmpty: false,
    },
    email: {
        exists: true,
        isEmpty: false,
        isEmail: true,
    },
    password: {
        exists: true,
    }
})

const loginValidator = checkSchema({
    email: {
        exists: true,
        isEmail: true,
    },
    password: {
        exists: true,
        isEmail: true
    }
})

const addEmployeeValidator = checkSchema({
    name: {
        exists: true,
    },
    email: {
        exists: true,
        isEmail: true,
    },
    password: {
        exists: true,
    }, roleId: {
        exists: true,

    }
})
const updateRoleValidator = checkSchema({
    empId: {
        exists: true,
        isEmpty: false,
    },
    roleId: {
        exists: true,
        isEmpty: false,
    }
})

export {
    registerValidator,
    loginValidator,
    addEmployeeValidator,
    updateRoleValidator,
}