const { scraper } = require('../../scraper/scraper');
const creditCompute = require('./services/creditScore')

function scrape(req, res, next) {
  scraper()
}

function home(req, res, next) {

}

module.exports = {
  scrape,
}