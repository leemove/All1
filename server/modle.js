const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')
const articleSchema = mongoose.Schema({
  author: {
    type: String,
    require: true,
    trim: true
  },
  title: {
    type: String,
    default: '未命名'
  },
  upDate: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    require: true
  },
  img: String
})
const Article = mongoose.model('Article', articleSchema)
const handel = {}
handel.getToday = function (req, res) {
  Article.find({ author: 'admin' }).exec().then((data) => {
    // console.log(data)
    res.json(data)
  })
}
module.exports = handel
