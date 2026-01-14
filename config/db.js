import mongoose from "mongoose";
const URI = "mongodb+srv://romabych2000_db_user:hjvfy2007_BHF@cluster0.qmzuebh.mongodb.net/?appName=Cluster0";

mongoose.connect(URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((e) => {
    console.error(e)
});
