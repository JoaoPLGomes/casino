const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors())

const BASE_URL = `https://restcountries.eu/rest/v2/name/{name}`;

const fetchURL = (url) => axios.get(url).catch(err => 'No results');

// Exercise 1
app.get('/api/v1/CountriesRest', (req, res) => {
  axios.get(BASE_URL.replace('{name}',req.query.name))
  .then((response) => {
    res.json(response.data);
  })
});

// Exercise 2
app.get('/api/v1/CountriesRestArray', (req, res) => {
  const arr = req.query.array.split(',').map(val => fetchURL(BASE_URL.replace('{name}',val)));
  Promise.all(arr)
  .then((data) => {
    res.json(data.map(obj => obj.data ? obj.data.map(arrObj => arrObj.name) : null))
  })
  .catch((err) => console.log(err));
});

app.listen(8000, () => {
  console.log('Casino app listening on port 8000!')
});
