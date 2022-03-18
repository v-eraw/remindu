const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const GoalSchema = mongoose.Schema({
    reminder_schedule_id: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    }
});

const Reminder = mongoose.model('Reminder', Reminderchema);

module.exports = Reminder;