var config = require('./config')

const express = require("express");
const app = express();
const port = 4000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(config.API_KEY);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.get("/data", (req, res) => {
    newsapi.v2.topHeadlines({
        country: 'jp',
        category: 'technology',
        pageSize: 20
    }).then(news => res.send(news));
});

app.listen(port, () => console.log(`listening on port ${port}`));