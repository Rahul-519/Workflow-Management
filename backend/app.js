import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();

app.use(express.json());
app.use("/api/user",router);

mongoose.connect(
    "mongodb+srv://admin:ovB8Ig3Mp7gA6vbb@cluster0.pn9hvv1.mongodb.net/OPERATIONWORKFLOWMANAGEMENT?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000)).then(()=>
    console.log("connected To DataBase And Listening To LocalHost 5000")
    )
    .catch((err)=>console.log(err));

    