const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  Category.find()
    .lean()
    .then((categories) => {
      const filter = {}
      const category = req.query.category
      if (category) filter.category = category
      Record.find(filter)
        .lean()
        .sort({ date: 'desc' })
        .then((records) => {
          let totalAmount = 0
          records.forEach((record) => (totalAmount += record.amount))
          res.render('index', {
            records,
            categories,
            totalAmount,
            category
          })
        })
    })
    .catch((error) => console.error(error))
})

module.exports = router
