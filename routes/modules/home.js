const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  const userId = req.user._id
  const filter = { userId }
  const filterCategory = req.query.category
  const filterMonth = req.query.month

  if (filterCategory) filter.category = filterCategory
  if (filterMonth) {
    const year = filterMonth.slice(0, 4)
    const month = filterMonth.slice(5, 7)
    // 選擇某年-某月-01 ~ 某年-某月-31的支出
    filter.date = { $gte: `${year}-${month}-01`, $lte: `${year}-${month}-31` }
  }

  return Promise.all([
    Record.find({ userId }).lean().sort({ date: 'desc' }),
    Category.find().lean(),
    Record.find(filter).lean().sort({ date: 'desc' })
  ])
    .then(([totalRecord, categories, records]) => {
      // 過濾重複的年月份
      const months = new Set()
      let totalAmount = 0

      totalRecord.forEach((record) => {
        months.add(record.date.slice(0, 7))
      })

      records.forEach((record) => {
        totalAmount += record.amount
      })

      res.render('index', {
        records,
        categories,
        totalAmount,
        filterCategory,
        months,
        filterMonth
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router
