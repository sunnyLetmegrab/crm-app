import bodyparser from "body-parser";
import express from "express";
import empRroute from "./routes/employee_routes.mjs";
import orgRoutes from "./routes/org_routes.mjs";
import swaggerUi from 'swagger-ui-express'
import { readFile } from 'fs/promises';
import commonRoute from "./routes/common_routes.mjs";

const swaggerJson = JSON.parse(await readFile(new URL('../swagger-output.json', import.meta.url)));
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use('/employee', empRroute)
app.use('/org', orgRoutes)
app.use('/common', commonRoute)

export default app
