const express = require('express')
const app = express()

let reminders = []

app.get('/api/reminders', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})