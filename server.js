const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
// import axios from "axios";

// CORSを許可する
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



// getのリクエストでパスが/に対応
app.get('/', (req, res) => {
    res.send('hello');
});
// getのリクエストでパスが/に対応　ここまで

app.get('/weather', (req, res) => {
    if (req.query.city)
        let cityId = 400040; //久留米
    axios
        .get("http://weather.livedoor.com/forecast/webservice/json/v1?city=" + cityId)
        .then(response => {
            console.log("status:", response.status); // 200
            console.log("body:", response.data); // response body.
            res.send(response.data.forecasts);
        })
        .catch(err => {
            console.log("err:", err);
        });

});

app.get('/shindan', (req, res) => {
    console.log(req.query);
    const name = req.query;
    const result = [
        { "res": "1xxxx", "description": "xxxxx" },
        { "res": "2xxxx", "description": "xxxxx" },
        { "res": "3xxxx", "description": "xxxxx" },
        { "res": "5xxxx", "description": "xxxxx" },
        { "res": "6xxxx", "description": "xxxxx" },
        { "res": "7xxxx", "description": "xxxxx" },
        { "res": "8xxxx", "description": "xxxxx" },
        { "res": "9xxxx", "description": "xxxxx" },
        { "res": "10xxxx", "description": "xxxxx" },
        { "res": "11xxxx", "description": "xxxxx" },
        { "res": "12xxxx", "description": "xxxxx" }
    ];
    if (name == "牡羊座") {
        res.send(result[0]);
    } else if (name == "牡牛座") {
        res.send(result[1]);
    } else if (name == "双子座") {
        res.send(result[2]);
    } else if (name == "蟹座") {
        res.send(result[3]);
    } else if (name == "獅子座") {
        res.send(result[4]);
    } else if (name == "乙女座") {
        res.send(result[5]);
    } else if (name == "天秤座") {
        res.send(result[6]);
    } else if (name == "蠍座") {
        res.send(result[7]);
    } else if (name == "射手座") {
        res.send(result[8]);
    } else if (name == "山羊座") {
        res.send(result[9]);
    } else if (name == "水瓶座") {
        res.send(result[10]);
    } else {
        res.send(result[11]);
    });

app.listen(port);