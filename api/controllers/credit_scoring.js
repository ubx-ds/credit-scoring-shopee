const { scraper } = require('../../scraper/scraper');
const creditCompute = require('./services/creditScore')

function scrape(req, res, next) {
  scraper()
}

function home(req, res, next) {
  let data = {
    followers: 1364,
    rating: 4.9,
    no_of_ratings: 1183,
    date_joined: 17,
    cancellation_rate: 3,
    chat_performance: 67
  }
  let score = creditCompute(data)
  res.send(200, score);
}

module.exports = {
  scrape,
  home
}