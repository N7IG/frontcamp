const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    author: String,
    title: String,
    content: String
});

module.exports = mongoose.model("News", NewsSchema);
