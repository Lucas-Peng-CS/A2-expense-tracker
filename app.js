const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
const hbsHelpers = require('handlebars-helpers')
const helpers = hbsHelpers()

const port = process.env.PORT || 3000
const app = express()

app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: helpers
  })
)
app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`Express is listen on localhost:${port}`)
})
