const express = require("express");
const router = express.Router();
const Educations = require("../models/Educations");

//try catch all promises

router.get("/", async (req, res) => {
    try {
        const educations = await Educations.find();
        res.json(educations);
    } 
    catch (error) {
        res.status(500).json(error.message);
    }
    
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const educations = await Educations.findById(id);
        res.json(educations);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.post("/", async (req, res) => {
    const educations = req.body;
    try {
        const dbResponse = await Educations.create(educations);
        res.json(dbResponse);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const educations = req.body;
        const updateEducations = await Educations.findByIdAndUpdate(id, educations, { new: true });
        res.json(updateEducations);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const educations = await Educations.findByIdAndDelete(id);
        res.json(educations);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/", async (req,res) => {
    try {
        const educations = await Educations.deleteMany({});
        res.json(educations);
    } 
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});


module.exports = router;