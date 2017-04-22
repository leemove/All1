const express = require('express')
const app = express()
const router = require('./router')
app.use(router).listen(3000, x => {
  console.log('running')
})
