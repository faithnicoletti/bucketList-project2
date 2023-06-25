const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Fitness', fitnessSchema);