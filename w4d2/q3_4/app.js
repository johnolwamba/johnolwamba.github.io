const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(session({secret: 'otoyo'}));

const products = {
    0: {
        name: 'Ugali',
        price: 100
    },
    1: {
        name: 'Pork',
        price: 200
    },
    2: {
        name: 'Cereals',
        price: 350
    }
};

app.get('/', (req, res) => {
    const products = req.session.cart ? req.session.cart : {};
    res.render('index', {products: products});
});

app.post('/addToCart', (req, res) => {
    const cart = req.session.cart ? req.session.cart : {};
    let id = parseInt(req.body.id);
    let name = req.body.productName;
    let price = parseInt(req.body.price);
    let quantity = parseInt(req.body.quantity);

    if (!cart[id]) {
        cart[id] = {
            quantity: 0
        };
    }

    cart[id].name = name;
    cart[id].price = price;
    cart[id].quantity += quantity;

    req.session.cart = cart;

    const cartItems = computeSize(cart);

    res.status(200).json({
        'cart_size': cartItems
    });
});

app.get('/product', (req, res) => {
    const product = products[req.query.id];
    const cart = req.session.cart ? req.session.cart : {};
    if (!product) {
        res.send('Sorry, an error occured. <a href=\'/\'>Back to cart</a>');
    }

    const cartItems = computeSize(cart);

    res.render('product', {
        id: req.query.id,
        productName: product.name,
        price: product.price,
        cart_size: cartItems
    });
});

function computeSize(cart) {
    let cartItems = 0;
    for (let key in cart) {
        if (cart.hasOwnProperty(key)) {
            cartItems += cart[parseInt(key)].quantity;
        }
    }
    return cartItems;
}

app.listen(3000);