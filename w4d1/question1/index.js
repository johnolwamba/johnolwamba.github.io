const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render("index", {
        cookieslist: getcookie(req),
    });
});

function getcookie(req) {
    let cookie = req.headers.cookie;
    let emptyOutput = [];
    if (cookie) {
        let keyValuePairs = cookie.split('; ');
        for (let i = 0; i < keyValuePairs.length; i++) {
            let name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
            let value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=') + 1);
            emptyOutput.push({name, value});
        }
    }

    return emptyOutput;
}

app.post('/', (req, res) => {
    if (req.body.key && req.body.value) {
        const {key, value} = req.body;
        res.cookie(key, value, {maxAge: 1000 * 60 * 60 * 24 * 7});
    }
    res.redirect("back");
});

app.get('/forget', function (req, res) {
    getcookie(req).forEach(value => {
        res.clearCookie(value.name);
    });
    res.redirect('back');
});

app.listen(3000, () => {
    console.log("Your server is running on 3000");
});