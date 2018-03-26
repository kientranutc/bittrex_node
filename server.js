// include plugin
var express = require('express');
var dataApi = require('./module/ProcessApi.js');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
var app = express();
var request = require('request');
var api = new dataApi('https://bittrex.com/api/v1.1/public/getmarketsummaries', request);
api.getApi().then(test => {
    console.log(test.result[0].MarketName);
    //localStorage.removeItem('data');
    localStorage.setItem("data", JSON.stringify(test));
}).catch(error => {
    console.log(error);
})

// reload data after 60s
var stt = 1;
setInterval(function() {
    console.log("Get data localStorage" + localStorage.getItem("data"));
    console.log('---------------\n')
    console.log("id:" + stt);
    api.getApi().then(test => {
        console.log(test.result[0].MarketName);
    }).catch(error => {
        console.log(error);
    })
    stt++;
}, 60000);

// run server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("run server http://%s:%s", host, port)
});