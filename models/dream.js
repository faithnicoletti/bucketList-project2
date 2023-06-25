const mongoose = require('mongoose');

const Schema = mongoose.Schema;





const careerSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: Number,
    comments: String, 
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});





const travelSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: Number,
}, {timestamps: true});





const hobbySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: Number,
}, {timestamps: true});





const tasteSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: Number,
}, {timestamps: true});





const fitnessSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: Number,
}, {timestamps: true});





const dreamSchema = new Schema ({
    careers: [careerSchema], 
    travels: [travelSchema],
    taste: [tasteSchema],
    hobbies: [hobbySchema],
    fitness: [fitnessSchema]
}, {
    timestamp: true
});





module.exports = mongoose.model('Dream', dreamSchema);