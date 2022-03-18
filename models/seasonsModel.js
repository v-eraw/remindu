const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const SeasonSchema = mongoose.Schema({
    season_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Season = mongoose.model('Season', SeasonSchema);

module.exports = Season;