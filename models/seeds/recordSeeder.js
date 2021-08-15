const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Record = require('../record')
const User = require('../user')
const db = require('../../config/mongoose')
const records = require('./records.json')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      records.forEach((record) => (record.userId = user._id))
      return Promise.all(
        Array.from({ length: records.length }, (_, i) =>
          Record.create(records[i])
        )
      )
    })
    .then(() => {
      console.log('done.')
      process.exit()
    })
})
