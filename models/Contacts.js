const mongoose = require("mongoose");

const Contacts = mongoose.model("Contacts", new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String
}));

module.exports = Contacts;