const router = require('express').Router()
const grocery = require('../models/grocery')

// GET all groceries
router.get('/groceries', (req, res) => {
  grocery.getAll(groceries => {
    res.json(groceries)
  })
})

// POST one grocery item
router.post('/groceries', (req, res) => {
  grocery.createOne(req.body, id => {
    res.json({ id })
  })
})

// PUT update to one grocery
router.put('/groceries/:id', (req, res) => {
  grocery.updateOne(req.body, { id: req.params.id }, () => {
    res.sendStatus(200)
  })
})

// DELETE one grocery
router.delete('/groceries/:id', (req, res) => {
  grocery.deleteOne({ id: req.params.id }, () => {
    res.sendStatus(200)
  })
})

module.exports = router