import categories_data from "../models/categories_data.js";

export const getCategory = async (req, res) => {
    try{
        const { id } = req.params;
        const category = await categories_data.findById(id);
        res.status(200).json(category);
    } catch (err) {
        res.status(404),json({ message: err.message });
    }
};