var express = require("express")
var app = express()
var PORT = process.env.PORT || 8080
var expressHandlebars = require('express-handlebars')
var routes = require("./routes/routes")

app.use(express.static("public"))
//makes public local host to acces css and js in URL

app.use(express.urlencoded({exteneded: true}))
//parse data coming in to convert to JSON
app.use(express.json())
app.engine("handlebars", expressHandlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")
//sets up handlebar engine
routes(app)
app.listen(PORT, function(){

    console.log("App is listening on http://localhost:" + PORT)
})