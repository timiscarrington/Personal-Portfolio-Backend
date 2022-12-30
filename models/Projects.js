const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'name is required'],
        unique: true
    },
    screenshot:{
        type: String,
        required:[true, 'screenshot of project required']
    },
    summary: {
        type: String,
        required:[true, 'Summary of project required']
    },
    languages: {
            type: String,
            required:[true, 'list languages, and frameworks used']
    }
}, {timestamps: true})

const Projects = mongoose.model('Projects', projectSchema)
module.exports = Projects;