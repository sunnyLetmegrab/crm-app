
import express from 'express'
import { getAllRoles } from '../controller/role_controller.mjs';
import { getAllLeadStatus } from '../controller/lead_status_controller.mjs';
import { getAllEmpoyee } from '../controller/org_controller.mjs';

const commonRoute = express.Router();



commonRoute.get('/getAllEmployee', getAllEmpoyee);
commonRoute.get('/getAllRoles', getAllRoles);
commonRoute.get('/getAllstatus', getAllLeadStatus);


export default commonRoute