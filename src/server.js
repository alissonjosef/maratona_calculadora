const express = require("express")

const server = express()

const routes = require("./routes")

// usando templete engine
server.set('view engine', 'ejs')

// Habilitar arquivo statics
server.use(express.static("public"))

//routes
server.use(routes)
//Windows + . para aparecer emoji
server.listen(3000, () => console.log('Rodando ⏰ 🚀'))
