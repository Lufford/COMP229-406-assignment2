const mongoose = require("mongoose");

const Educations = mongoose.model("Educations", new mongoose.Schema({
    title: String,
    firstname: String,
    lastname: String,
    email: String,
    completion: Date,
    description: String
}));

module.exports = Educations;