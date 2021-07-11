const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    res.render("index", {
        time: date.toTimeString(),
        cssLink: (hour >= 6 && hour <= 18 ? 'day.css' : 'night.css'),
    });
});

app.listen(3000);