const router = require('express').Router()
const { join } = require('path')

router.get('/index', (req, res) => {
  res.render('index')
})

module.exports = router