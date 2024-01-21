import express  from "express";
// import { signupController } from "./controller/authControllers.js";

import {signupController} from "../routers.js/controller/authControllers.js"

const authRoute = express.Router();
authRoute.post("/signup", signupController)



export {authRoute}