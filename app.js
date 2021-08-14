const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
const usePassport = require('./config/passport')
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

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
usePassport(app)
app.use(routes)

app.listen(port, () => {
  console.log(`Express is listen on localhost:${port}`)
})
