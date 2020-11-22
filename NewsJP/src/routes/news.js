var config = require('./config')

const express = require('express') // web application framework
const newsRouter = express.Router()
const axios = require('axios') // make http request

newsRouter.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/top-headlines?category=technology&country=jp&apiKey=${config.API_KEY}`)
        // console.log(newsAPI.data)
        res.render('news', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response){
            res.render('news', { articles : null }) //print error when webapi fails
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request){
            res.render('news', { articles : null }) //print error when webapi fails
            console.log(err.request)

        } else {
            res.render('news', { articles : null }) //print error when webapi fails
            console.error('Error', err.message)
        }
    }
})

newsRouter.post('', async(req, res) => {
    let search = req.body.search

    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?language=jp&q=${search}&apiKey=${config.API_KEY}`)
        console.log(search)
        res.render('news', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response){
            res.render('news', { articles : null }) //print error when webapi fails
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request){
            res.render('news', { articles : null }) //print error when webapi fails
            console.log(err.request)

        } else {
            res.render('news', { articles : null }) //print error when webapi fails
            console.error('Error', err.message)
        }
    }
})

module.exports = newsRouter