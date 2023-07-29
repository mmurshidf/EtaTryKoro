import mongoose from "mongoose";

const categoryIds = [
    new mongoose.Types.ObjectId(),
];

export const category = [
    {
        _id: categoryIds[0],
        topic: "Boston University",
        __v: 0,
    },
    {
        _id: categoryIds[1],
        topic: "Boston",
        __v: 0,
    },
    {
        _id: categoryIds[2],
        topic: "New York",
        __v: 0,
    },
];