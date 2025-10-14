const mongoose = require("mongoose");

const Projects = mongoose.model("Projects", new mongoose.Schema({
    title: String,
    firstname: String,
    lastname: String,
    email: String,
    completion: Date,
    description: String
}));

module.exports = Projects;