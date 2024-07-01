


import express from 'express';
import { getUser, loginEmployee, refresToken, updateProfile } from '../controller/employee_controller.mjs';
import { empLogin, empUpdateProfile } from '../utils/validators/user_validator.mjs';


const userRroute = express.Router()
userRroute.post('/login', empLogin, loginEmployee);
userRroute.post('/refreshToken', refresToken);
userRroute.get('/getProfile', getUser);
userRroute.get('/updateProfile', empUpdateProfile, updateProfile);

export default userRroute