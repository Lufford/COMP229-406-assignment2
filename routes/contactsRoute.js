const express = require("express");
const router = express.Router();
const Contacts = require("../models/Contacts");

//try catch all promises

router.get("/", async (req, res) => {
    try {
        const contacts = await Contacts.find();
        res.json(contacts);
    } 
    catch (error) {
        res.status(500).json(error.message);
    }
    
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const contacts = await Contacts.findById(id);
        res.json(contacts);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.post("/", async (req, res) => {
    const contacts = req.body;
    try {
        const dbResponse = await Contacts.create(contacts);
        res.json(dbResponse);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const contacts = req.body;
        const updateContacts = await Contacts.findByIdAndUpdate(id, contacts, { new: true });
        res.json(updateContacts);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const contacts = await Contacts.findByIdAndDelete(id);
        res.json(contacts);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/", async (req,res) => {
    try {
        const contacts = await Contacts.deleteMany({});
        res.json(contacts);
    } 
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});


module.exports = router;