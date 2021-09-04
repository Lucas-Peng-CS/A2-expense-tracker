if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Category = require('../category')
const db = require('../../config/mongoose')
const categories = require('./categories.json')

db.once('open', () => {
  Category.create(categories)
    .then(() => {
      db.close()
      console.log('done')
    })
})
