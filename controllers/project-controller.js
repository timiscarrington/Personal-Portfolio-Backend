const express = require('express');
const { resourceLimits } = require('worker_threads');
const router = express.Router();
const { Projects } = require('../models')

//mongoose connection
require('../config/db.connection')

//route to show all
router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.find({})
        resourceLimits.status(200).json(projects)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

router.post('/', async (req, res, next) => {
    try {
        const createdProject = await Projects.create (req.body)
        res.status(201).json(createdProject)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const project = await Projects.findByID(req.params.id)
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
})

router.delete("/:id", async (req, res) => {
	try {
        const deletedProject = await Projects.findByIdAndRemove(req.params.id)
        res.status(202).json({message:`${deletedProject}`})
        
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

router.put('/:id', async (req, res, next)=> {
    try {
        const updatedProject = await Projects.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).json(updatedProject)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

module.exports = router;