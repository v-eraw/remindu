const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const HabitSchema = mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    event_id: {
        type: Number,
        required: true
    },
    goal_id: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    status: { // Make this into an enum?
        type: String,
        required: true
    }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;