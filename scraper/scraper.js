const request = require('request');
const cheerio = require('cheerio');

function scraper(shop_name){
  
  request('https://shopee.ph/lowdoghobby', function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          let temp = $('div section-seller-overview__item-text-value').attr('class');
          console.log(temp);
      }
  });
}

module.exports = {
  scraper,
}