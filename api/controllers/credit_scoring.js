const path = require('path');

const { scraper } = require('../../scraper/scraper');
const creditCompute = require('./services/creditScore')

function scrape(req, res, next) {
  scraper()
}

function score(req, res, next) {
  let index = req.params.index;
  let score = creditCompute(index)
  res.send(200, score);
}

function home(req, res, next) {
  let view = path.resolve(__dirname+'/../../views/index')
  res.render(view);
}

module.exports = {
  scrape,
  home,
  score
}