const express = require('express')
const { engine } = require('express-handlebars') //載入樣板引擎
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public')) //載入json檔案

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index')
})

// 動態路由
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  res.send(`read restaurant: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})