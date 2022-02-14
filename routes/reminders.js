var express = require('express');
const { response } = require('../app');
var router = express.Router();

reminders = [ 
  {
    id: "1",
    description: "wash your dishes",
    datetime: Date.now(),
    frequency: "daily"
  },
  {
    id: "2",
    description: "call your family",
    datetime: Date.now(),
    frequency: "daily"
  },
  {
    id: "3",
    description: "book a doctor's appointment",
    datetime: Date.now(),
    frequency: "onetime",
  },
]

reminder_1_details = {
  "reminder" : {
    id: "1",
    description: "wash your dishes",
    datetime: Date.now(),
    frequency: "daily"
  },
  "occurences" : [
    {
      datetime: Date.now(),
      status: "done",
      notes: "completed"
    }
  ]
}

/* GET all reminders listing. */
router.get('/', function(req, res, next) {
  res.json(reminders);
});

/* GET the details for a reminders listing. */
router.get('/:id', function(req, res, next) {
  const id = Number(request.params.id)
  const reminder = reminder_1_details

  if (reminder) {
    res.json(reminder);
  } else {
    res.status(404).end()
  }
});

/* UPDATE reminders listing. */
router.put('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST reminders listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* DELETE reminders listing. */
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;