const Joi = require('joi');
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    current_progress: {
        type: Number,
        required: true
    },
    total_progress: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
    },
    description: {
        type: String,
    }
});