const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    log: String,
    orderedAt: Date
});

module.exports = mongoose.model("log", Schema);