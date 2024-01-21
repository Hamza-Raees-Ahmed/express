import express from "express"
import{authRoute} from "./routers.js/authRoute.js"
 const app = express();
 const PORT = 8000;
   app.use("/auth",authRoute)

 app.listen(PORT,(req,res)=>{
  console.log("the server is running is on port",PORT)
 })