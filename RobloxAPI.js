var request = require("request");
var express = require('express');
const cheerio = require('cheerio');
var app = express();

app.get(/CountOfFriendsFor\d+/, function(req, res) {
    let ID = req.url.match(/[0-9]+/)
    request("https://friends.roblox.com/v1/users/"+ ID[0] +"/friends/count", function(error, response, body) {
       res.send(body)
         });
}); //GetPlayerFriendsCount

app.get(/GetCountOfPlayingInGame\d+/, function(req, res) {
    let PlaceID = req.url.match(/[0-9]+/)
    request("https://www.roblox.com/games/"+ PlaceID[0], function(error, response, body) {
       
    let $ = cheerio.load(body);
    let RobloxClass = $('#about > div.section.game-about-container > div.section-content.remove-panel > ul > li:nth-child(1) > p.text-lead.font-caption-body.wait-for-i18n-format-render');
    res.send(RobloxClass.text())
         });
}); //GetCountOfPlayingById

setInterval(function(){ 
    https.get("https://example.com/",function(res){ 
    console.log("Ping app") 
    }) 
    },10000) //To keep application work