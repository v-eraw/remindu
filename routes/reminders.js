var express = require('express');
var router = express.Router();

reminders = [ 
  {
    id: "1",
    description: "wash your dishes",
    datetime: Date.now(),
    frequency: "daily",
  },
  {
    id: "2",
    description: "call your family",
    datetime: Date.now(),
    frequency: "daily",
  },
  {
    id: "3",
    description: "book a doctor's appointment",
    datetime: Date.now(),
    frequency: "onetime",
  },
]

/* GET all reminders listing. */
router.get('/', function(req, res, next) {
  console.log("getting reminders")
  res.send(reminders);
});

/* GET the details for a reminders listing. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
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