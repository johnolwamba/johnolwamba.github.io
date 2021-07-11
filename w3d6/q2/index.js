const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/result", (req, res) => {
    let {name, age} = req.body;
    res.render("result", {
        name: name ? name : "person",
        age: age ? age : 20,
    });
});

app.listen(3000);
