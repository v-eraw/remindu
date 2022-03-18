const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const EventSchema = mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    season_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    end_date: {
        type: Date
    }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;