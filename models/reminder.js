const Joi = require('joi');
const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});