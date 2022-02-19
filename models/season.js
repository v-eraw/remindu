const Joi = require('joi');
const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
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
});