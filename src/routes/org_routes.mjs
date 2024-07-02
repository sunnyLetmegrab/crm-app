import express from 'express'
import { addEmpolyee, editEmpolyee, login, register, updateRole } from '../controller/org_controller.mjs';
import { addEmployeeValidator, loginValidator, registerValidator, updateRoleValidator } from '../utils/validators/org_validator.mjs';
import { addleadStatus } from '../controller/lead_status_controller.mjs';
import { addRole } from '../controller/role_controller.mjs';
import { AddUpdateLead, deleteLead, updateLeadAssigee, updateLeadStatus } from '../controller/lead_controller.mjs';

const orgRoutes = express.Router()

orgRoutes.post('/register', registerValidator, register);
orgRoutes.post('/login', loginValidator, login);
orgRoutes.post('/addEmpolyee', addEmployeeValidator, addEmpolyee);
orgRoutes.post('/editEmpolyee', editEmpolyee);
orgRoutes.post('/updateRole', updateRoleValidator, updateRole);
orgRoutes.post('/addUserRole', addRole);
orgRoutes.post('/addLeadStatus', addleadStatus);
orgRoutes.post('/addLead', AddUpdateLead)
orgRoutes.post('/updateLead', AddUpdateLead)
orgRoutes.post('/deleteLead', deleteLead)
orgRoutes.post('/changeLeadStatus', updateLeadStatus)
orgRoutes.post('/changeAssignedUser', updateLeadAssigee)
export default orgRoutes