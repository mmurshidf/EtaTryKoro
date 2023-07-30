import mongoose from "mongoose";

const categoryIds = [
    new mongoose.Types.ObjectId(),
];

export const category = [
    {
        _id: categoryIds[0],
        name: "Boston University",
        __v: 0,
    },
    {
        _id: categoryIds[1],
        name: "Boston",
        __v: 0,
    },
    {
        _id: categoryIds[2],
        name: "New York",
        __v: 0,
    },
    {
        _id: categoryIds[3],
        name: "Conneticut",
        __v: 0,
    },
    {
        _id: categoryIds[4],
        name: "Food",
        __v: 0,
    },
];