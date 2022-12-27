import express from "express";

import { usersRoutes } from "./routes/users.routes";

import { serve, setup } from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", serve, setup(swaggerDocument));

app.use("/users", usersRoutes);

export { app };
