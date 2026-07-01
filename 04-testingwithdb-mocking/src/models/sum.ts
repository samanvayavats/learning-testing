import mongoose from "mongoose";

const sumSchema = new mongoose.Schema({
    sum: {
        type: Number,
        required: true,
    },
});

export const Sum = mongoose.model("Sum", sumSchema);