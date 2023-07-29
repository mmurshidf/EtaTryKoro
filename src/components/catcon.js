import express from "express";
import mongoose from "mongoose";

const app = express();

const connectDB =async ()=>{
    mongoose.connect("mongodb+srv://Faizan:zZljh4PBhg3l7XkA@cluster0.7iyf0pe.mongodb.net/?retryWrites=true&w=majority");
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model("categories_datas", productSchema);
    const data = await product.find({}).lean();
    console.log(data);
}

const dataset = connectDB();

function DataItem(arg) {
    let items = "";
    for(let i = 0; i < arg.length; i++) {
        items += arg[i[1]]
    }
    return items;
}

export const catData = DataItem(dataset);