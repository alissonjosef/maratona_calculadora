const express = require('express');
const routes = express.Router() // rota 
//__dirname e para achar a pastar raiz src caminho base
//const basePath = __dirname + "/views"

//Diretorio do caminho base
const views = __dirname + "/views/"

const profile = {
    name: "Alisson Silva",
    avatar: "https://avatars.githubusercontent.com/u/46210532?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

// resquesr, res
routes.get('/',(req, res) =>  res.render(views + "index"))
routes.get('/job',(req, res) =>  res.render(views + "job"))
routes.get('/job/edit',(req, res) =>  res.render(views + "job-edit"))
routes.get('/profile',(req, res) =>  res.render(views + "profile", { profile: profile }))


module.exports = routes;