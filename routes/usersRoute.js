const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

//try catch all promises

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } 
    catch (error) {
        res.status(500).json(error.message);
    }
    
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const users = await Users.findById(id);
        res.json(users);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.post("/", async (req, res) => {
    const users = req.body;
    try {
        const dbResponse = await Users.create(users);
        res.json(dbResponse);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const users = req.body;
        const updateUsers = await Users.findByIdAndUpdate(id, users, { new: true });
        res.json(updateUsers);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const users = await Users.findByIdAndDelete(id);
        res.json(users);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/", async (req,res) => {
    try {
        const users = await Users.deleteMany({});
        res.json(users);
    } 
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});


module.exports = router;