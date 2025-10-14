const mongoose = require("mongoose");

const Users = mongoose.model("Users", new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date
}));

module.exports = Users;