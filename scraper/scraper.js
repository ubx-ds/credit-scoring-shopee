const request = require('request');
const cheerio = require('cheerio');

function scraper(shop_name){
  //.section-seller-overview-horizontal__seler-info-list
  request('https://shopee.ph/lowdoghobby', function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          let temp = $('div[class=section-seller-overview-horizontal__seler-info-list]').html();
          console.log(temp);
      }
  });
}

module.exports = {
  scraper,
}