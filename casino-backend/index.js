const express = require('express');
var request = require('request');
const app = express();

const BASE_URL = `https://restcountries.eu/rest/v2/name/{name}`;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/testRest', (req, res) => {
  request({
    method: 'GET',
    uri: BASE_URL.replace('{name}',req.query.name),
  }, function (error, response, body){
    if(!error && response.statusCode == 200){
      res.json(body);
    }
  })
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
