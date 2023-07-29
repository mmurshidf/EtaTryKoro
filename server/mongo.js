import categories_data from "./models/categories_data.js"
import { category } from "./data/index.js";
import mongoose from "mongoose";
import express from "express";

const app = express();
app.use(express.json());

const PORT = 27017;

mongoose.connect("mongodb+srv://Faizan:zZljh4PBhg3l7XkA@cluster0.7iyf0pe.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    categories_data.insertMany(category, {ordered : false});

}).catch((error) => console.log(`${error} did not connect`));