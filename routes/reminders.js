var express = require('express');
const { response } = require('../app');
var router = express.Router();

reminders = [ 
  {
    id: "1",
    name: "name",
    description: "wash your dishes",
    datetime: Date.now(),
    frequency: "daily"
  },
  {
    id: "2",
    name: "name",
    description: "call your family",
    datetime: Date.now(),
    frequency: "daily"
  },
  {
    id: "3",
    name: "name",
    description: "book a doctor's appointment",
    datetime: Date.now(),
    frequency: "onetime",
  },
]

const generateId = () => {
  const maxId = reminders.length > 0
    ? Math.max(...reminders.map(n => n.id))
    : 0
  return maxId + 1
}

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
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const reminder = {
    id: body.id,
    description: body.description || false,
    date: new Date(),
    frequency: body.frequency || "one-time",
  }

  reminders =  reminders.concat(reminder)

  response.json(reminder)
});

/* DELETE reminders listing. */
router.delete('/:id', function(req, res, next) {
  const id = Number(req.params.id)
  reminders = reminders.filter(reminder => reminder.id !== id)

  res.status(204).end()
});

module.exports = router;