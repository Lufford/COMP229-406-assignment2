const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");

//try catch all promises

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } 
    catch (error) {
        res.status(500).json(error.message);
    }
    
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const projects = await Projects.findById(id);
        res.json(projects);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.post("/", async (req, res) => {
    const projects = req.body;
    try {
        const dbResponse = await Projects.create(projects);
        res.json(dbResponse);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const projects = req.body;
        const updateProjects = await Projects.findByIdAndUpdate(id, projects, { new: true });
        res.json(updateProjects);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const projects = await Projects.findByIdAndDelete(id);
        res.json(projects);
    }
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});

router.delete("/", async (req,res) => {
    try {
        const projects = await Projects.deleteMany({});
        res.json(projects);
    } 
    catch (error) {
        res.status(500).json(`Cannot find contact. Error: ${error.message}`);
    }
});


module.exports = router;