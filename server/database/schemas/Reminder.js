const { isInteger } = require('core-js/core/number');
const mongoose = require('mongoose');

const { Reminder } = mongoose;

const reminderSchema = new Schema({
  id: { type: Number, required: true},
  name: { type: String},
  category: { type: Schema.ObjectId, ref: 'Category', required: false },
  text: { type: String},
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
