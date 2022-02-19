const Joi = require('joi');
const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    date: {
        type: Date,
        required: true
    },
});