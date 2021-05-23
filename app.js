const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json()); // allow json format

// api key
const API_KEY = process.env.API_KEY;

// routes
app.post('/movies', (req, res) => {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    axios({
        url: API_URL,
        responseType: 'json'
    }).then(data => res.json(data.data));
});

app.listen(3000);