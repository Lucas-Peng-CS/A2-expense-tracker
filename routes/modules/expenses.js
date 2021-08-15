const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  const date = new Date()
  const currentDate = formatDate(date)
  function formatDate (date) {
    let month = date.getMonth() + 1
    let day = date.getDate()
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day
    return date.getFullYear() + '-' + month + '-' + day
  }
  Category.find()
    .lean()
    .then((categories) => res.render('new', { categories, currentDate }))
    .catch((error) => console.error(error))
})

router.post('/', (req, res) => {
  const data = req.body
  data.userId = req.user._id
  return Record.create(data)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .lean()
    .then((record) => {
      Category.find()
        .lean()
        .then((categories) => res.render('edit', { record, categories }))
    })
    .catch((error) => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then((record) => {
      record = Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then((record) => record.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

module.exports = router
