const express = require('express')
const { engine } = require('express-handlebars') //載入樣板引擎
const app = express()
const port = 3000
// 載入json檔
const restaurants = require('./public/jsons/restaurant.json').results

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public')) //載入json檔案

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index',{ restaurants: restaurants })
})

// 動態路由
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id //字串
  const restaurant = restaurants.find((rest) => rest.id.toString() === id)
  res.render('detail', {restaurant})
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})