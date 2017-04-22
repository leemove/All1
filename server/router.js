const express = require('express')
const router = express.Router()
const handel = require('./modle')
router.get('/api/today', function (req, res) {
  handel.getToday(req, res)
})
module.exports = router
