/**
 * Created by BOGDAN on 27.12.2016.
 */
var request = require('request'),
    cheerio = require("cheerio"),
    cards = [],
    url = "https://privatmarket.ua/?utm_source=google_brand_main&utm_medium=cpc";
request(url, function(err, res, html){
    if(err){
        console.log(err);
    }else{
        $ = cheerio.load(html);
        var cards = [];
        $('title').each(function(){
            cards.push({
                title: $('title').text(),
                url: $('a').attr('href')
            });
        });
        console.log(cards);
    }
});
