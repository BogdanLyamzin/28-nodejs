const express = require('express')
const router = express.Router()

const contacts = require("../../model");

router.get('/', async (req, res, next) => {
  const listContacts = contacts.listContacts();
  res.json({ contacts: listContacts })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
