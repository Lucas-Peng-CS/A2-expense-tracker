const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
const port = 3000
const app = express()

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(routes);

app.listen(port,() => {
  console.log(`Express is listen on localhost:${port}`);
})