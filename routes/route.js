const express = require("express");
const router = express.Router();
const request = require("request"); 
const weatherUrl = "http://api.weatherapi.com/v1/forecast.json?key=d136599bd8b14034b76164613210603&q=Kumasi";

router.get("/", async(req, res) => {
    request(weatherUrl, async(err, response, body)=>{
        if(err){
            res.status(404).send("<h1>Status Code: 404 <br> Not Found</h1>")
            console.log(err);
            return 1;
        }
        res.render("index.ejs", {body: JSON.parse(body), rain: JSON.parse(body).forecast.forecastday[0].day.daily_chance_of_rain });
        console.log(JSON.parse(body).forecast.forecastday[0].day.daily_chance_of_rain);
    });

});


module.exports = router;