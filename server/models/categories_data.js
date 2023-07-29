import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        }
    }
);

mongoose.pluralize(null);

const categories_data = mongoose.model("categories_data", catSchema);

export default categories_data;