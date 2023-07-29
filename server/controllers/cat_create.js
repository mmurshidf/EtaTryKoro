import categories_data from "../models/categories_data.js";

export const catadd = async (req,res) => {
    try {
        const {
            topic
        } = req.body;

        const newCat = new categories_data({
            topic,
        });
        const savedCat = await newCat.save();
        res.status(201).json(savedCat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};