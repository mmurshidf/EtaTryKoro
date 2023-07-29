import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
    {
        topic: {
            type: String,
            unique: true,
        }
    },
    { timestamps: true }
);

const categories_data = mongoose.model("categories_data", catSchema);

export default categories_data;