const router = require('express').Router()
const { join } = require('path')
const orm = require('../config/orm.js')

// GET all groceries
router.get('/groceries', (req, res) => {
  
})

// POST one grocery item
router.post('/groceries', (req, res) => {

})

// PUT update to one grocery
router.put('/groceries/:id', (req, res) => {

})

// DELETE one grocery
router.delete('/groceries/:id', (req, res) => {
  
})

module.exports = router