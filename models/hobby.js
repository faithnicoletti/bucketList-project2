const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    comments: String, 
    completed: {
        type: Boolean,
        default: false
    },
    photos: [String]
}, {timestamps: true});

module.exports = mongoose.model('Hobby', hobbySchema);