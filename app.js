const express = require('express')
const { engine } = require('express-handlebars') //載入樣板引擎
const app = express()
const port = 3000
// 載入json檔
const restaurants = require('./public/jsons/restaurant.json').results //Array

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public')) //載入json檔案

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants }) //傳到前端
})

// 動態路由
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id //字串
  const restaurant = restaurants.find((rest) => rest.id.toString() === id)
  res.render('detail', {restaurant})
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword?.trim()
  // console.log('keyword', keyword)
  const matchedRestaurants = keyword ? restaurants.filter((rest) => 
    Object.values(rest).some((property) => {
      if (typeof property === 'string'){
        return property.toLowerCase().includes(keyword.toLowerCase())
      }
      return false
    })
  ) : restaurants
  res.render('index', { restaurants: matchedRestaurants, keyword }) //傳到前端
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})