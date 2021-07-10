const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

function getCssName() {
    const date = new Date();
    const hour = date.getHours();
    return (hour >= 6 && hour <= 18 ? 'day.css' : 'night.css');
}

app.get("/", (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${getCssName()}">
        </head>
        <body>
            <form action="/result" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="age">Age</label>
                <input type="text" name="age" id="age">
                <input type="submit" value="Submit Query">
            </form>
        </body>
        </html>`
    );
});

app.post("/result", (req, res) => {
    let {name, age} = req.body;
    res.send(`Welcome ${name ? name : "person"}, your age is: ${age ? age : 20}`);
});

app.listen(3000);
