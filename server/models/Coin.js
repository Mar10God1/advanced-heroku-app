import mongoose from "mongoose";

const schema = new mongoose.Schema({
    symbol: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
});

export default mongoose.model("Coin", schema);