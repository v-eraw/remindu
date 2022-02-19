const Joi = require('joi');
const mongoose = require('mongoose');

const reminderScheduleSchema = new mongoose.Schema({
    id: {
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
    frequency: {
        type: Number,
        required: true
    },
    event_id: {
        type: Number,
        required: true
    },
});