const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ReminderScheduleSchema = mongoose.Schema({
    reminder_schedule_id: {
        type: Number,
        required: true
    },
    start_datetime: {
        type: Date,
        required: true
    },
    end_datetime: {
        type: Date
    },
    frequency: {
        type: String
    },
    event_id: {
        type: Number,
        required: true
    }
});

const ReminderSchedule = mongoose.model('ReminderSchedule', ReminderScheduleSchema);

module.exports = ReminderSchedule;