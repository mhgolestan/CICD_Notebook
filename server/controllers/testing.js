const router = require('express').Router()
const Note = require('../mongo/models/note')
const User = require('../mongo/models/user')

router.post('/reset', async (request, response) => {
  await Note.deleteMany({})
  await User.deleteMany({})
  response.status(204).end()
})

module.exports = router