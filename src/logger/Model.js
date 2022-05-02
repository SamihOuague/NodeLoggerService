const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    hasWin: Boolean,
    price: String,
    operation: String,
    createAt: Date.now(),
});

module.exports = mongoose.model("log", Schema);