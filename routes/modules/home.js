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
      const month = req.query.month
      if (category) filter.category = category
      if (month) filter.date = month
      filter.userId = req.user._id
      console.log(filter)
      Record.find(filter)
        .lean()
        .sort({ date: 'desc' })
        .then((records) => {
          const months = new Set()
          let totalAmount = 0
          records.forEach((record) => {
            months.add(record.date.slice(0, 7))
            totalAmount += record.amount
          })
          res.render('index', {
            records,
            categories,
            totalAmount,
            category,
            months,
            month
          })
        })
    })
    .catch((error) => console.error(error))
})

module.exports = router
