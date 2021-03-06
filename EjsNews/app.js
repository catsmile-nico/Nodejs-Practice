const express = require('express')
const app = express()
const port = 5000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/img', express.static(__dirname + 'public/img'))
// app.use('/js', express.static(__dirname + 'public/js'))

// template Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// parse search
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended : true }))

// routes
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)

// listen on port
app.listen(port, () => console.log(`listening on port ${port}`))