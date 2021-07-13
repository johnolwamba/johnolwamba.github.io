const express = require("express");
const session = require('express-session');
const path = require("path");

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(session({
    secret: 'otoyo',
    resave: false,
    saveUninitialized: true
}));

app.use(require('flash')());

app.use(function(req, res, next){
    res.locals.sessionFlash = req.session.sessionFlash;
    delete req.session.sessionFlash;
    next();
});

app.get("/", (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    res.render("index", {
        cssLink: (hour >= 6 && hour <= 18 ? 'day.css' : 'night.css'),
    });
});

app.post("/result", (req, res) => {
    let {name, age} = req.body;
    req.session.sessionFlash = {
        type: 'info',
        message: {
            name: name,
            age: age
        }
    }

    res.redirect(303, `/output`)
});

app.get("/output", (req, res) => {
    const date = new Date();
    const hour = date.getHours();

    res.render("output", {
        cssLink: (hour >= 6 && hour <= 18 ? 'day.css' : 'night.css'),
    })
});

app.listen(3000);
