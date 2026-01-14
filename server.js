import express from "express";
import bodyParser from "body-parser";
import "./config/db.js"


// Routes
import authRouter from "./routers/authRoutes.js";
import taskRouter from "./routers/taskRoutes.js";



const app = express(); 

const port = 3000;

//midleware

app.use(bodyParser.json());

app.use("/api", authRouter);
app.use("/api", taskRouter);


app.listen(port, () => {
    console.log(`Server listening on ${port} and starting at http://localhost:${port}`)
});
