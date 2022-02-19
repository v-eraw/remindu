const Joi = require('joi');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    user_id: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    season_id: {
        type: Number,
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
});