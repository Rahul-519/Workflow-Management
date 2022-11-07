import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();

app.use(express.json());
app.use("/api/user",router);

mongoose.connect(
    //put your mongodb connection link
    ).then(()=>app.listen(5000)).then(()=>
    console.log("connected To DataBase And Listening To LocalHost 5000")
    )
    .catch((err)=>console.log(err));

    